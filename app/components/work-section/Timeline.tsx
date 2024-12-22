"use client";
import { Syne } from "next/font/google";
import Title from "../ui/Title";
import TimelineItem from "./TimelineItem";

const syne = Syne({ subsets: ["latin"] });

const TimelineData = [
  {
    companyImg: "/prowhizz_logo.png",
    jobTitle: "Website Developer",
    company: "Prowhizz: A unit of Crossbar",
    jobType: "Full Time",
    duration: "Aug 2024 - Present",
    stuffIDid: [
      "Full-Stack Developer with expertise in WordPress, JavaScript, ReactJS, and UI/UX design,",
"Proficient in ReactJS, CSS, and popular front-end frameworks, delivering responsive and visually appealing interfaces,",
"Skilled in developing user-friendly templates that enhance website functionality and user experience,",
"Experienced in integrating RESTful APIs and handling backend operations with Node.js,",
"Specializing in creating seamless and user-friendly web experiences with a strong focus on UI/UX principles,",
"Proactively managing technical operations, debugging, and website optimization to ensure peak performance,",

    ],
  },
  {
    companyImg: "/national_informatics_center_logo.jpg",
    jobTitle: "SQL Developer",
    company: "NATIONAL INFORMATICS CENTRE",
    jobType: "Internship",
    duration: "July 2023 - Aug 2023",
    stuffIDid: [
      "Completed an internship at the National Informatics Centre, focusing on database management,",
"Reviewed and analyzed data using MS SQL and PostgreSQL,",
"Optimized queries to improve data retrieval efficiency,",
"Collaborated with a team to ensure data integrity and accuracy,",
    ],
  },
  {
    companyImg: "/cronytechnovest_logo.jpg",
    jobTitle: "Python Developer",
    company: "CRONY TECHNOVEST",
    jobType: "Internship",
    duration: "June 2022 - July 2022",
    stuffIDid: [
      "Reviewed and processed large datasets to extract meaningful insights,",
"Developed and optimized Python scripts for data manipulation and analysis,",
"Successfully performed work-from-home tasks, maintaining high productivity and quality,",
"Collaborated with cross-functional teams to ensure data-driven decision making,",
"Automated repetitive tasks to enhance efficiency and reduce manual workload,",

    ],
  },
];


export default function Timeline() {
  return (
    <div className="mt-10 md:mt-[110px]">
      <Title> Work experience</Title>

      {/* THE THING, AFTER WHICH I WOULD DETERMINE THE HEIGHT */}
      <div className="flex mt-6 gap-4 pl-3">
        <div className="w-3 h-auto bg-gradient-to-b from-white to-transparent" />

        <div className="flex flex-col gap-10">
          {TimelineData.map((item, index) => (
            <TimelineItem
              key={index}
              companyImg={item.companyImg}
              jobTitle={item.jobTitle}
              company={item.company}
              jobType={item.jobType}
              duration={item.duration}
              stuffIDid={item.stuffIDid}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
