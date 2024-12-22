/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from "react";
import Title from "../ui/Title";
import { useView } from "@/contexts/ViewContext";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// @ts-ignore
import "intersection-observer";
import { useInView } from "react-intersection-observer";
import Timeline from "./Timeline";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Works() {
  const { setSectionInView } = useView();
  const worksSectionRef = useRef<HTMLDivElement>(null); // Ref to the works section
  const worksContainerRef = useRef<HTMLDivElement>(null); // Ref to the works container

  const works = [
    {
      title: "Gemini Clone",
      gitLink: "https://github.com/yajatwasisht/Gemini-Clone.git",
      liveLink: "https://yajatgeminiclone.netlify.app/",
      about:
        "Gemini App is an interactive AI chat application inspired by Google Gemini. It allows users to engage in natural language conversations with an AI model.",
      stack: ["node.js", "react.js", "API", "tailwindcss"],
      img: "/gemini.png",
    },
    {
      title: "MP3",
      gitLink: "https://github.com/yajatwasisht/Gemini-Clone.git",
      liveLink: "https://yajatmp3.netlify.app//",
      about:
        "Created an MP3 player with JavaScript, HTML, and CSS. Implemented audio playback and playlist management in MP3 player.",
      stack: ["HTML", "CSS", "JavaScript", "tailwindcss"],
      img: "/mp3.png",
    },
    {
      title: "HOTEL GSAP",
      gitLink: "https://github.com/yajatwasisht/FOOD-GSAP.git",
      liveLink: "https://hotelgsap.netlify.app/again.html",
      about:
        "This project is a visually dynamic hotel website built using HTML, CSS, JavaScript, and GSAP. The website features stunning animations and interactive elements, providing an engaging user experience while browsing the hotel.",
      stack: ["HTML", "CSS", "GSAP", "tailwindcss"],
      img: "/hotelgsap.png",
    },
    {
      title: "Fanta",
      gitLink: "https://github.com/yajatwasisht/Fanta-using-GSAP.git",
      liveLink: "https://gsapfanta.netlify.app/",
      about:
        "Interactive Fanta website featuring engaging animations created with GSAP. Showcases creative web design and smooth transitions for an enhanced user experience.",
      stack: ["HTML", "CSS", "GSAP", "tailwindcss"],
      img: "/fanta.png",
    },
    {
      title: "I phone",
      liveLink: "https://yajatiphone.netlify.app/",
      gitLink: "https://github.com/yajatwasisht/iphone-main-using-gsap.git",
      about:
        "This is a clone of Apple's iPhone 15 Pro website using React.js and TailwindCSS. It highlights the effective use of GSAP (Greensock Animations) and Three.js for displaying iPhone 15 Pro models in various colors and shapes.",
      stack: ["CSS", "typescript", "ReactJS", "tailwindcss"],
      img: "/iphone.png",
    },
    {
      title: "Weather App",
      gitLink: "https://github.com/yajatwasisht/React-based-Weather-App.git",
      liveLink: "https://yajatweather.netlify.app/",
      about:
        "This project is a modern, user-friendly weather application built using React. It fetches and displays real-time weather data from a public API, providing an engaging way to learn and practice React development.",
      stack: ["CSS", "Javascript", "ReactJS", "Weather API"],
      img: "/weather.png",
    },
    {
      title: "Currency Convertor",
      gitLink: "https://github.com/yajatwasisht/Currency-Convertor.git",
      liveLink: "https://yajatcurrencyconverter.netlify.app/",
      about:
        "A responsive currency converter application built using HTML, CSS, JavaScript, and an API for real-time exchange rates.",
      stack: ["HTML", "CSS", "JavaScript", "tailwindcss"],
      img: "/currency.png",
    },
    {
      title: "Tic Tac Toe",
      gitLink: "https://github.com/yajatwasisht/TicTacToe.git",
      liveLink: "https://yajattictac.netlify.app/",
      about:
        "This project is a classic Tic-Tac-Toe game implemented using HTML, CSS, and JavaScript. It's a simple and fun project that helps to sharpen your front-end development skills.",
      stack: ["HTML", "CSS", "JavaScript"],
      img: "/tic.png",
    },
    // Add more projects as needed
  ];

  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "-100px 0px",
  });

  const [isScrolling, setIsScrolling] = useState(false); // Track the scroll state

  useEffect(() => {
    if (inView) setSectionInView("work");

    const section = worksSectionRef.current;
    const worksContainer = worksContainerRef.current;

    if (worksContainer && section) {
      // Create a horizontal scroll effect when the button is pressed
      gsap.fromTo(
        worksContainer,
        {
          x: "1%", // Start from the right (off-screen)
        },
        {
          x: "-90%", // End at the normal position (fully moved to the left)
          ease: "none", // Linear scrolling
          scrollTrigger: {
            trigger: section,
            start: "top top", // Trigger as soon as the section hits the top
            end: "+=100%", // Keep it pinned until the section is fully visible
            pin: true, // Pin the section in place
            scrub: 1, // Scrub animation with scroll
            markers: false, // Disable scroll trigger markers
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Cleanup ScrollTrigger on unmount
    };
  }, [inView, setSectionInView]);

  const handleDownClick = () => {
    if (worksContainerRef.current) {
      const worksContainer = worksContainerRef.current;
      // Animate the horizontal scroll on button press
      gsap.to(worksContainer, {
        x: "-100%", // Move the container to the left
        duration: 2, // Duration of the scroll animation
        ease: "power2.inOut", // Easing function
      });
      setIsScrolling(true);
    }
  };

  return (
    <section
      ref={worksSectionRef} // Directly attach the ref here
      className="flex flex-col gap-6 md:gap-10 pt-[110px] relative"
      id="work"
    >
      <Title>Projects</Title>
      <div
        ref={worksContainerRef} // Directly attach the ref here
        className="works-container"
        style={{
          display: "flex",
          flexDirection: "row",
          overflowX: "hidden", // Hide horizontal scrollbar
          overflowY: "hidden", // Hide vertical scrollbar
          position: "relative",
          width: "300vw", // Make the content larger than the viewport
        }}
      >
        {works.map((work, index) => (
          <div
            key={index}
            className="work-item"
            style={{
              flex: "0 0 auto", // Ensure items don't stretch
              width: "30vw", // Adjust width of each item to fit into the viewport
              marginRight: "4rem", // Add spacing between items
              color: "white",
              backgroundColor: "rgba(173, 216, 230, 0.5)",

              borderRadius:"20px",
              padding: "10px",
            }}
          >
            <div className="work-card">
              <img
                src={work.img}
                alt={work.title}
                className="w-full h-auto"
                style={{
                  width: "90%", // Reduce the image size to 90% of the container width
                  height: "220px",
                  objectFit: "cover",
                  margin: "20px auto", // Center the image within the container
                  display: "block",
                  borderRadius: "8px", 
                }}
              />
              <h3 className="text-xl font-semibold mt-4" style={{ margin: "10px 10px 0" }}>
                {work.title}
              </h3>
              <p style={{ margin: "10px 10px 0" }}>{work.about}</p>
              <a
                href={work.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{margin: "10px 10px 0", marginRight: "1rem",background:"red" }}
              >
                Live Site
              </a>
              <a
                href={work.gitLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{margin: "10px 10px 0", marginLeft: "16rem", background:"black" }}
              >
                GitHub
              </a>
              <div className="stack" style={{ marginTop: "1rem" }}>
                {work.stack.map((tech, idx) => (
                  <span key={idx} className="tech-stack" style={{ marginRight: "2rem", background:"yellow", color:"black" }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <Timeline />

      
    </section>
  );
}
