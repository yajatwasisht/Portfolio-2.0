'use client';

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Title from "../ui/Title";
import styles from "./Resume.module.scss";



gsap.registerPlugin(ScrollTrigger);

export default function Resume() {
  const resumeSectionRef = useRef<HTMLDivElement>(null);
  const cardGroupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = resumeSectionRef.current;
    const cards = cardGroupRef.current;

    if (section && cards) {
      // Animation for cards
      gsap.timeline({
        scrollTrigger: {
          trigger: cards,
          start: "top 75%",
          end: "top top",
          scrub: true,
          toggleActions: "play none none reverse",
        },
      })
        .to(`.${styles.cardV1}`, { rotate: "-6deg", scale: 1.05 }, 0)
        .to(`.${styles.cardV2}`, { rotate: "6deg", scale: 1.05, x: "5%" }, 0);
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={resumeSectionRef}
      className={`${styles.section} flex flex-col gap-6 pt-[110px]`}
      id="resume"
    >
      <Title>Resume</Title>
      <div ref={cardGroupRef} className={`${styles.cardGroup} flex`}>
        <div className={`${styles.card} ${styles.cardV1}`}>
          <div className={styles.cardInner}>
            <div className={styles.cardTitle}>YAJAT WASISHT</div>
            <div className={styles.cardDesc}>WEB Developer</div>
            <hr />
            <p>
              I am Yajat, A passionate and detail-oriented Web Developer with expertise in React.js, React Native, WordPress, and JavaScript. Experienced in building responsive, user-friendly websites and mobile apps. Strong problem-solving skills, collaborative team player, and continuous learner with a keen interest in emerging technologies like blockchain and AI/ML.
            </p>
          
            <hr />
            <div className={styles.cardSectionTitle}>WORK EXPERIENCE</div>
            <p>
            Website Developer at Prowhizz |
National Informatics Centre, Chandigarh (Internship) |
Crony Technovest, Jaipur (Internship)
            </p>
            <hr />
            <div className={styles.cardSectionTitle}>SKILLS</div>
            <p>
            Website Developer at Prowhizz |
National Informatics Centre, Chandigarh (Internship) |
Crony Technovest, Jaipur (Internship)
            </p>
            
          </div>
        </div>
        <div className={`${styles.card} ${styles.cardV2}`}>
          <div className={styles.cardInner}>
            <Image
              src="/code-snippet.svg"
              alt="Code Snippet"
              width={330}
              height={480}
            />
          </div>
        
      </div>
      
      </div>
        
      <div className={styles.downloadButtonContainer}>
        <a
           href={
            "https://drive.google.com/file/d/1RJJHrJEhZ__8lHtzWf-kMHTCYFbWLirU/view?usp=sharing"
          }  // Update with the correct path
          download="Yajat_Wasisht_Resume.pdf"
          className={styles.downloadButton}
        ><b>Download Resume</b>
          
        </a>
      </div>
    
    </section>
  );
}
