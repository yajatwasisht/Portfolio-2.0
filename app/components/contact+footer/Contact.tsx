"use client";
import React, { useEffect, useRef, useState } from "react";
import { Syne } from "next/font/google";
import { useView } from "@/contexts/ViewContext";

// @ts-ignore
import "intersection-observer";
import { useInView } from "react-intersection-observer";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedTitle from "../ui/AnimatedTitle";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const syne = Syne({ subsets: ["latin"] });

export default function Contact() {
  const { setSectionInView } = useView();
  const [viewCount, setViewCount] = useState<number>(0);
  const [formDisplay, setFormDisplay] = useState<boolean>(false);

  const { ref, inView } = useInView({
    threshold: 0.25,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("contact");
  }, [inView, setSectionInView]);

  useEffect(() => {
    if (inView) {
      setViewCount((c) => c + 1);
    }
  }, [inView, setSectionInView]);

  const { formState, register, handleSubmit, reset } = useForm();
  const { errors } = formState;

  // For email.js
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = (data: any) => {
    emailjs
      .send(
        "service_yajat", // Replace with your Service ID
        "template_1486hn6", // Replace with your Template ID
        {
          userName: data.userName,
          userEmail: data.userEmail,
          userMessage: data.userMessage,
        },
        "ZKqNrNttXT1vz6zgI" // Replace with your Public Key
      )
      .then(() => {
        alert("Message sent successfully!");
        reset();
      })
      .catch((error) => {
        console.error("Error sending message:", error);
        alert("Failed to send the message. Try again.");
      });
  };

  return (
    <>
      <section
        ref={ref}
        id="contact"
        style={{
          transform: `${
            formDisplay
              ? "perspective(300px) rotateY(-180deg)"
              : "perspective(300px) rotateY(-360deg)"
          }`,
        }}
        className={`overflow-y-hidden card mt-12 sm:mt-16 md:mt-[100px] px-6 py-4 md:py-10 lg:py-12 flex flex-col lg:items-center lg:flex-row justify-between rounded-2xl bg-gradient-to-r from-[#d9d9d91f] to-[#7373731f]`}
      >
        {!formDisplay ? (
          <div
            className={` ${
              syne.className
            } flex justify-between items-center w-full duration-1000 ${
              formDisplay && "opacity-0"
            }`}
          >
            <div className="inline w-full">
            <div
                className="text-xl sm:text-2xl md:text-[32px] lg:text-[40px] font-bold text-white"
                style={{
                  opacity:1, // Control opacity based on state
                }}
              >
                GOT A PROJECT IN MIND?
              </div>
              <Link href="#footer" data-no-blobity>
                <span
                  data-blobity
                  onClick={() => {
                    setFormDisplay(!formDisplay);
                  }}
                  className="sm:mt-0 text-xl sm:text-2xl md:text-[32px] w-fit underline lg:text-[40px] font-bold leading-tight hidden sm:block lg:hidden"
                >
                  CONTACT ME
                </span>
              </Link>
            </div>
            <Link href="#footer">
              <button
                className={`text-base ml-auto mt-6 lg:mt-0 lg:ml-0 block sm:hidden lg:block lg:text-2xl font-semibold px-4 py-2 md:px-3 lg:py-4 rounded-xl border-2 border-white leading-none text-white ${
                  viewCount <= 1 && "duration-500 delay-[1500ms]"
                } ${
                  inView
                    ? " opacity-100 translate-y-0"
                    : "opacity-0 translate-y-16"
                }`}
                data-blobity-radius="12"
                onClick={() => {
                  setFormDisplay(!formDisplay);
                }}
              >
                CONTACT&nbsp;ME
              </button>
            </Link>
          </div>
        ) : (
          <div
          style={{
            width: "100%",
            color: "white",
            transform: `${
              formDisplay
                ? "perspective(300px) rotateY(-180deg)"
                : "perspective(300px) rotateY(0deg)"
            }`,
          }}
        >
           <div className="ml-auto float-right md:absolute right-0 -top-5 text-2xl opacity-50">
                <Icon
                  icon="gg:close"
                  data-blobity
                  onClick={() => {
                    setFormDisplay(false);
                    reset();
                  }}
                />
              </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              width: "100%",
              height: "100%",
            }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit(onSubmit)}
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <label
                  htmlFor="userName"
                  style={{ fontSize: "1.2rem", color: "white", opacity: 0.7 }}
                >
                  <b>Name</b>
                </label>
                <input
                  type="text"
                  id="userName"
                  {...register("userName", {
                    required: "I need to know your name",
                    pattern: {
                      value: /^[a-zA-Z][a-zA-Z0-9]{2,}/,
                      message: "Please enter a valid name.",
                    },
                  })}
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid white",
                    borderRadius: "0.25rem",
                    outline: "none",
                    padding: "0.5rem",
                    color: "white",
                  }}
                />
                {errors?.userName && (
                  <span style={{ color: "red", fontSize: "0.75rem" }}>
                    {errors?.userName?.message as string}
                  </span>
                )}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <label
                  htmlFor="userEmail"
                  style={{ fontSize: "1.2rem", color: "white", opacity: 0.7 }}
                >
                  <b>Email</b>
                </label>
                <input
                  id="userEmail"
                  type="email"
                  {...register("userEmail", {
                    required: "Enter a correct email address",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Please provide a valid email address",
                    },
                  })}
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid white",
                    borderRadius: "0.25rem",
                    outline: "none",
                    padding: "0.5rem",
                    color: "white",
                  }}
                />
                {errors?.userEmail && (
                  <span style={{ color: "red", fontSize: "0.75rem" }}>
                    {errors?.userEmail?.message as string}
                  </span>
                )}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <label
                  htmlFor="userMessage"
                  style={{ fontSize: "1.2rem", color: "white", opacity: 0.7 }}
                >
                  <b>Message</b>
                </label>
                <textarea
                  id="userMessage"
                  {...register("userMessage", {
                    required: "I'll appreciate what you have to say.",
                  })}
                  rows={4}
                  cols={50}
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid white",
                    borderRadius: "0.25rem",
                    outline: "none",
                    padding: "0.5rem",
                    color: "white",
                  }}
                />
                {errors?.userMessage && (
                  <span style={{ color: "red", fontSize: "0.75rem" }}>
                    {errors?.userMessage?.message as string}
                  </span>
                )}
              </div>
              <button
                style={{
                  background: "linear-gradient(to right, #ffffff1f, #ffffff1f)",
                  borderRadius: "0.25rem",
                  padding: "0.75rem 1rem",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Send
              </button>
            </form>
          </div>
        </div>
        
        )}
      </section>
      <ToastContainer />
    </>
  );
}
