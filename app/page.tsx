"use client";

import { Suspense, useState } from "react";
import { ArrowDown, ArrowUpRight, Code2, Moon, Sun } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";
import { LuSparkles } from "react-icons/lu";
import { FaReact } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { RiNextjsLine } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";
import { SiC } from "react-icons/si";
import { FaFlutter } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaJava } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";
import { SiPostgresql } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { LuPanelsTopLeft } from "react-icons/lu";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import Image from "next/image";
import { Year } from "./component/year";

const skill = [
  {
    icon: <FaReact />,
    course: "React",
    end: "FRONTEND",
  },
  {
    icon: <TbBrandTypescript />,
    course: "TypeScript",
    end: "FRONTEND",
  },
  {
    icon: <IoLogoJavascript />,
    course: "JavaScript",
    end: "FRONTEND",
  },
  {
    icon: <RiNextjsLine />,
    course: "Next.js",
    end: "FRONTEND",
  },
  {
    icon: <TbBrandReactNative />,
    course: "React Native",
    end: "FRONTEND",
  },
  {
    icon: <SiC />,
    course: "C",
    end: "PROGRAMMING",
  },
  {
    icon: <FaFlutter />,
    course: "REST APIs",
    end: "BACKEND",
  },
  {
    icon: <RiTailwindCssFill />,
    course: "Tailwind CSS",
    end: "FRONTEND",
  },
  {
    icon: <FaJava />,
    course: "Java",
    end: "BACKEND",
  },
  {
    icon: <BiLogoSpringBoot />,
    course: "Spring Boot",
    end: "BACKEND",
  },
  {
    icon: <SiPostgresql />,
    course: "PostgreSQL",
    end: "DATABASE",
  },
  {
    icon: <IoLogoFigma />,
    course: "Figma",
    end: "DESIGN",
  },
  {
    icon: <FaGitAlt />,
    course: "Git",
    end: "TOOLS",
  },
  {
    icon: <FaGithub />,
    course: "GitHub",
    end: "TOOLS",
  },
  {
    icon: <LuPanelsTopLeft />,
    course: "UI/UX",
    end: "DESIGN",
  },
];

const project = [
  {
    num: 1,
    course: "Spring Boot",
    text: "EXPLORING",
  },
  {
    num: 2,
    course: "REST APIs",
    text: "BUILDING WITH",
  },
  {
    num: 3,
    course: "Next JS",
    text: "EXPLORING",
  },
  {
    num: 4,
    course: "React Native",
    text: "BUILDING WITH",
  },
];

const work = [
  {
    id: "01",
    name: "Fandom Verse",
    description:
      "An anime-focused entertainment platform with an immersive streaming-inspired interface, designed for discovering and exploring anime titles.",
    gitHublink: "https://github.com/Niella74/fandomverse",
    vercelLink: "https://fandomverse-orpin.vercel.app/",
    image: "/fandomversePics.jpeg",
    tech: "React",
    tech2: "TypeScript",
    tech3: "Tailwind css",
  },
  {
    id: "02",
    name: "Leera Fashion",
    description:
      "A modern ashion e-commerce frontend built with Next.js, TypeScript, and Tailwindcss CSS . Designed to showcase clothing collections with an elegant, responsive interface, intuitive navigation, and a smooth product-browsibg experience. ",
    gitHublink: "https://github.com/ItsLeera/leera-fashion-website",
    vercelLink: "#",
    image: "/leeraFashion.png",
    tech: "React",
    tech2: "TypeScript",
    tech3: "Tailwind css",
  },
  {
    id: "03",
    name: "Task Management System ",
    description:
      "A full-stack task management application built with Spring Boot and Next.js. It allows users to create, view, update, and delete tasks, while organizing them by status and priority. Features a responsive dashboard with task statistics, progress tracking, and an intuitive interface for managing daily tasks.",
    gitHublink: "https://github.com/ItsLeera/TaskManagementSystem-Frontend",
    vercelLink: "#",
    image: "/fandomversePics.jpeg",
    tech: "React",
    tech2: "TypeScript",
    tech3: "TypeScript",
    tech4: "SpringBoot",
  },
];

const progress = [
  {
    id: "01",
    name: "Software Development",
    title: "Aptech Port Harcourt",
    decription: "The foundation: learning how ideas become working software.",
  },
  {
    id: "02",
    name: "Frontend Development",
    title: "React · TypeScript · Tailwind CSS",
    decription: "Interfaces with intention, rhythm, and a little bit of magic.",
  },
  {
    id: "03",
    name: "Backend Development",
    title: "Java · Spring Boot",
    decription: "Understanding the systems behind the screens.",
  },
  {
    id: "04",
    name: "Database",
    title: "SQL",
    decription: "Designing structure for information that matters.",
  },
  {
    id: "05",
    name: "Projects",
    title: "Building real applications",
    decription: "The best lessons are the ones that ship.",
  },
];

export default function Home() {
  const [lightMode, setLightMode] = useState(false);

  const skills = ["JAVA", "FIGMA", "REACT", "SQL", "NEXT_JS", "UI/UX"];

  return (
    <main
      className={`min-h-screen overflow-hidden transition-colors duration-300 ${
        lightMode
          ? "bg-[#f4f1ed] text-[#17171a]"
          : "bg-[#111113] text-[#f8f6f1] bg-[radial-gradient(ellipse_at_45%_45%,_#34303f_0%,_#24234e_55%,_#1c1b24_100%"
      }`}
    >
      {/* Navbar */}
      <nav
        className={`mx-auto mt-5 flex max-w-[1500px] fixed w-full items-center justify-between rounded-full border px-5 py-4 backdrop-blur-xl sm:px-8 ${
          lightMode
            ? "border-black/10 bg-white/70"
            : "border-white/15 bg-white/[0.03]"
        }`}
      >
        <a
          href="#home"
          className="text-2xl font-extrabold tracking-[-2px] sm:text-3xl"
        >
          Leera
          <span className="text-[#b9a7f8]">.</span>
        </a>

        <div className="hidden items-center gap-5 text-sm font-medium text-current/80 lg:flex xl:gap-8">
          <a href="#home" className="transition hover:text-[#c5b5e8]">
            Home
          </a>
          <a href="#about" className="transition hover:text-[#c5b5e8]">
            About
          </a>
          <a href="#skills" className="transition hover:text-[#c5b5e8]">
            Skills
          </a>
          <a href="#projects" className="transition hover:text-[#c5b5e8]">
            Projects
          </a>
          <a href="#journey" className="transition hover:text-[#c5b5e8]">
            Journey
          </a>
          <a href="#contact" className="transition hover:text-[#c5b5e8]">
            Contact
          </a>
        </div>

        <div className="flex items-center gap-3 sm:gap-5">
          <button
            type="button"
            onClick={() => setLightMode(!lightMode)}
            aria-label="Toggle light and dark mode"
            className="rounded-full p-2 transition hover:bg-current/10"
          >
            {lightMode ? <Moon size={19} /> : <Sun size={19} />}
          </button>

          <a
            href="#contact"
            className="flex items-center gap-2 rounded-full border border-current/20 px-4 py-3 text-xs font-medium transition hover:text-[#b9a7f8] hover:bg-[#0b0b0e] sm:text-sm"
          >
            Let`s talk <ArrowUpRight size={16} />
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="mt-10 mx-auto grid max-w-[1400px] items-center gap-8 px-5 pb-16 pt-20 sm:px-8 sm:pt-20 lg:min-h-[calc(100vh-100px)] lg:grid-cols-2 lg:gap-12 lg:pt-10"
      >
        {/* Left side */}
        <div className="relative z-10 pt-20">
          <p className="mb-8 flex flex-wrap items-center gap-3 text-[10px] font-bold tracking-[2px] text-current/70 sm:text-xs">
            <span className="h-2 w-2 rounded-full bg-[#b9a7f8] shadow-[0_0_12px_#b9a7f8]" />
            SOFTWARE ENGINEER <span>·</span> BUILDER <span>·</span> CURIOUS MIND
          </p>

          <h1 className="text-[clamp(2rem,7.1vw,5.5rem)] font-semibold leading-[0.96] tracking-[-0.075em]">
            <span className="block">I build digital</span>

            <span className="block font-serif text-[#b9a7f8] italic">
              experiences
            </span>

            <span className="mt-1 block">with code &</span>

            <span className="block">curiosity.</span>
          </h1>

          <p className="mt-7 max-w-xl text-sm leading-8 text-current/65 sm:text-base">
            Hi, I`m Leera — a student software engineer exploring frontend,
            backend, databases, and UI/UX while turning ideas into real
            projects.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className={`flex items-center gap-2 rounded-full px-6 py-4 text-sm font-semibold transition hover:-translate-y-1 ${
                lightMode
                  ? "bg-[#17171a] text-white"
                  : "bg-[#b9a7f8] text-[#111114]"
              }`}
            >
              Explore my work <ArrowUpRight size={17} />
            </a>

            <a
              href="#about"
              className="rounded-full border border-current/20 px-6 py-4 text-sm transition hover:bg-current/5"
            >
              More about me
            </a>
          </div>

          <p className="mt-10 flex flex-wrap items-center gap-3 text-[9px] font-semibold tracking-[1.5px] text-current/55 sm:text-[10px]">
            <span className="h-2 w-2 rounded-full bg-[#dce8b2]" />
            LEARNING, BUILDING & GETTING BETTER EVERY DAY
          </p>
          <div className="flex gap-4 pt-15 ">
            <a
              href="https://www.https://github.com/ItsLeera"
              className="flex items-center gap-2 text-white/70"
            >
              <span>
                <FiGithub />
              </span>
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/leerabari-kogbara-2a1258391"
              className="flex items-center gap-2 text-white/70"
            >
              <span>
                <CiLinkedin />
              </span>
              LinkedIn
            </a>
            <a
              href="mailto:leerabarikogbara@gmail.com"
              className="flex items-center gap-2 text-white/70"
            >
              <span>
                <MdOutlineMailOutline />
              </span>
              Email
            </a>
          </div>
        </div>

        {/* Right side: code card illustration */}
        <div className="relative mx-auto flex min-h-[390px] w-full max-w-[650px] items-center justify-center sm:min-h-[500px]">
          {/* Decorative circles */}
          <div className="absolute h-[300px] w-[300px] rounded-full border border-[#c8b8e7]/25 sm:h-[440px] sm:w-[440px]" />

          <div className="absolute h-[250px] w-[330px] rotate-[-25deg] rounded-[50%] border border-[#c8b8e7]/15 sm:h-[330px] sm:w-[440px]" />

          {/* Code editor */}
          <div className="relative z-10 w-[94%] max-w-[570px] rotate-[2deg] overflow-hidden rounded-2xl border border-[#c9c2ac]/30 bg-[#151619a8] text-[#f5f2eb] shadow-2xl shadow-black/30 transition duration-500 hover:rotate-0">
            {/* Editor header */}
            <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-5 sm:px-6">
              <div className="flex shrink-0 gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[#e7dfc9]" />
                <span className="h-2 w-2 rounded-full bg-[#e7dfc9]" />
                <span className="h-2 w-2 rounded-full bg-[#e7dfc9]" />
              </div>

              <span className="font-mono text-[10px] text-white/65 sm:text-xs">
                leera.config.ts
              </span>

              <span className="font-mono text-[9px] text-white/40 sm:text-[10px]">
                TS / 04
              </span>
            </div>

            {/* Code */}
            <div className="overflow-x-auto px-4 py-7 font-mono text-[10px] leading-[2.3] sm:px-8 sm:py-9 sm:text-sm">
              <p className="mb-3 text-white/45">/ / hello, world</p>

              <p>
                <span className="text-[#d5a8ff]">const</span>{" "}
                <span className="text-[#edcf86]">leera</span> = {"{"}
              </p>

              <p className="pl-4 sm:pl-6">
                <span className="text-[#edcf86]">role</span>:{" "}
                <span className="text-[#b8d6ad]">`Software Engineer`,</span>
              </p>

              <p className="pl-4 sm:pl-6">
                <span className="text-[#edcf86]">currently</span>:{" "}
                <span className="text-[#b8d6ad]">`learning + building`,</span>
              </p>

              <p className="pl-4 sm:pl-6">
                <span className="text-[#edcf86]">stack</span>: [
              </p>

              <p className="pl-8 sm:pl-12">
                <span className="text-[#b8d6ad]">`React`, `TypeScript`,</span>
              </p>

              <p className="pl-8 sm:pl-12">
                <span className="text-[#b8d6ad]">`Java`, `Spring Boot`</span>
              </p>

              <p className="pl-4 sm:pl-6">],</p>
              <p>{"}"}</p>
            </div>

            <div className="flex items-center justify-between gap-2 border-t border-white/10 px-4 py-4 text-[8px] text-[#b9c6a4] sm:px-6 sm:text-[10px]">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#b9c6a4]" />
                Learning and building
              </span>
              <span>01 — 04</span>
            </div>
          </div>

          {/* Floating tech tags */}
          <span className="absolute left-0 top-[19%] z-20 rounded-lg border border-[#d9d0b5]/30 bg-[#252624] px-4 py-3 text-xs font-semibold text-white shadow-lg sm:left-1 sm:top-[17%]">
            React
          </span>

          <span className="absolute right-1 top-[18%] z-20 rounded-lg border border-[#d9d0b5]/30 bg-[#252a21] px-4 py-3 text-xs font-semibold text-[#d5edb1] shadow-lg sm:right-3">
            SQL
          </span>

          <span className="absolute right-0 top-[47%] z-20 rounded-lg border border-[#d9d0b5]/30 bg-[#252624] px-3 py-3 text-xs font-semibold text-white shadow-lg sm:right-[-5px]">
            TypeScript
          </span>

          <span className="absolute bottom-[8%] left-[10%] z-20 flex items-center gap-2 rounded-full border border-current/10 bg-[#202023] px-3 py-2 text-[10px] text-white/75 shadow-lg sm:bottom-[5%] sm:left-[13%]">
            <Code2 size={13} /> Building ideas
          </span>
        </div>
      </section>

      <div className="overflow-hidden border-y border-[#ffffff1f] py-5">
        <div className="flex w-max animate-[move_30s_linear_infinite]">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="flex shrink-0 items-center gap-8 pr-8 text-[11px] tracking-wider text-[#77757d]"
            >
              {skills.map((skill) => (
                <div key={skill} className="flex shrink-0 items-center gap-8">
                  <p>{skill}</p>
                  <span className="text-[#b9a7f8]">✦</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Simple next-section preview */}
      <section
        id="about"
        className="flex flex-col  mx-auto max-w-[1400px] bordr-t border-current/10 px-5 py-14 sm:px-8"
      >
        <div className="w-full h-screen flex justify-between ">
          <div className="w-[45%] flex flex-col justify-between  ">
            <p className="text-[#b9a7f8] text-[13px] tracking-wider flex gap-2 ">
              01 /<span className="text-[#929198]">ABOUT</span>
            </p>
            <h2 className="text-[75px] leading-none font-[500] font-sans -tracking-wider scale-y-110 ">
              I`m still learning. <br />
              <span className="text-[#b9a7f8] ">But i`m already building </span>
            </h2>
            <p className="text-[#929198] text-[15px]">
              I`m a student software engineer with a soft spot for <br />{" "}
              thoughtful interfaces and the systems that make them <br />{" "}
              possible. My work sits at the intersection of visual design,{" "}
              <br /> practical engineering, and an endless curiosity for how{" "}
              <br /> things work.
            </p>

            <a href="#contact" className="flex gap-1 items-center">
              More about me
              <span>
                <GoArrowUpRight />
              </span>
            </a>
          </div>
          <div className="w-[40%] pt-50 ">
            <div className="flex  border-t border-t-[#929198]/30 py-5 ">
              <p className="text-[#929198] text-[10px]">quick context</p>
            </div>
            <div className="flex justify-between border-t border-t-[#929198]/30 py-5">
              <p className="text-[#929198] text-[10px]">Currently</p>
              <h1 className="text-[13px]">Software Engineer</h1>
            </div>
            <div className="flex justify-between border-t border-t-[#929198]/30 py-5">
              <p className="text-[#929198] text-[10px]">Focus</p>
              <h1 className="text-[13px]">
                Software Development + Emerging Technologies
              </h1>
            </div>
            <div className="flex justify-between border-t border-t-[#929198]/30 py-5">
              <p className="text-[#929198] text-[10px]">Based</p>
              <h1 className="text-[13px]">Nigeria</h1>
            </div>
            <div className="flex justify-between border-t border-t-[#929198]/30 py-5">
              <p className="text-[#929198] text-[10px]">Learning</p>
              <h1 className="text-[13px]">
                Full Stack Development, Data Analytics , Machine Learning & AI
              </h1>
            </div>
            <div className="flex justify-between border-t border-t-[#929198]/30 py-3">
              <p className="text-[#929198] text-[10px]">Open to </p>
              <h1 className="text-[13px]">
                Internship · Collaborations · Open-Source · Projects
              </h1>
            </div>
          </div>
        </div>
        <div className="w-full my-20 mt-10 px-20 h-32 bg-[linear-gradient(90deg,rgba(169,152,255,0.07),rgba(0,0,0,0))] border border-[#ffffff1f]/70 rounded flex justify-between items-center">
          <span className="text-[13px] text-[#929198] tracking-wider ">
            BEYOND THE CODE
          </span>
          <p className="text-[25px]">
            When I`m not building, I`m exploring visual design, learning <br />
            something new, or finding better ways to solve a problem.
          </p>
          <span className="text-[#b9a7f8]">
            <LuSparkles size={30} />
          </span>
        </div>
      </section>

      {/* Placeholder sections for navigation */}
      <section
        id="skills"
        className="flex flex-col gap-5 mx-auto max-w-[1400px] bordr-t border-current/10 px-5 py-12 sm:px-8 group bg-[#141418] "
      >
        <p className="text-[#b9a7f8] text-[13px] tracking-wider flex gap-2 ">
          02 /<span className=" text-[#929198]">TECHNOLOGY</span>
        </p>
        <div className="flex justify-between items-center">
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
            My Current <br />
            <span className="text-[#b9a7f8]"> toolkit. </span>
          </h2>
          <p className="text-[13px] text-[#929198]">
            A growing collections of tools i use to turn curious ideas into{" "}
            <br /> tangible experiences
          </p>
        </div>
        <div className="mt-6 grid grid-cols-5 gap-3 rounded">
          {skill.map((skills) => (
            <div
              key={skills.course}
              className="flex flex-col gap-4 border border-[#ffffff1f] bg-[#ffffff04] p-5 "
            >
              <span className="text-[#b9a7f8] text-2xl"> {skills.icon} </span>
              <p className="text-[15px] "> {skills.course} </p>
              <span className="text-[11px] text-[#929198]  ">
                {" "}
                {skills.end}{" "}
              </span>
            </div>
          ))}
        </div>
        <div className="flex justify-between border-t border-t-[#ffffff1f] pt-10 mt-20 ">
          <div className="flex flex-col gap-6">
            <p className="flex gap-2 items-center">
              CURRENTLY LEARNING{" "}
              <span>
                {" "}
                <MdOutlineArrowRightAlt />{" "}
              </span>{" "}
            </p>
            <h2 className="text-5xl tracking-tight mt-5 ">
              Always one more <br />{" "}
              <span className="text-[#b9a7f8]"> thing to discover. </span>{" "}
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {project.map((pro) => (
              <div
                key={pro.num}
                className=" w-70 flex flex-col gap-3 border border-[#ffffff1f] bg-[#ffffff04] p-5 "
              >
                <span className="text-xs text-[#b9a7f8]  "> 0{pro.num} </span>
                <p className="text-[20px] "> {pro.course} </p>
                <span className="text-[13px] text-[#929198] ">
                  {" "}
                  {pro.text}{" "}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="mx-auto max-w-[1400px] bordr-t border-current/10 px-5 py-12 sm:px-8"
      >
        <p className="text-[#b9a7f8] text-[13px] tracking-wider flex gap-2 items-center ">
          03 /<span className=" text-[#929198]  "> SELECTED WORK </span>
        </p>
        <div className="flex items-end justify-between">
          <h2 className="mt-3 font-serif text-7xl sm:text-7xl">
            Things I`ve <br />
            <span className="text-[#b9a7f8] "> built. </span>
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-7 text-current/60">
            A collection of projects where I turn ideas into practical digital
            experiences. Add your project cards here.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 mt-10">
          {work.map((pro) => (
            <div
              key={pro.id}
              className=" group rounded-2xl border border-white/20 bg-white/[0.03] p-5 md:p-7 transition-all duration-500 hover:border-purple-300/50"
            >
              {/* Project number */}
              <span className="text-sm text-gray-400">{pro.id}</span>

              {/* Project preview */}
              <div className="mt-5 rounded-xl border border-white/20 bg-[#25252b] p-4">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={pro.image}
                    alt={pro.name}
                    className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="mt-4 flex justify-end">
                  <a
                    href={pro.gitHublink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium transition-colors hover:text-purple-300"
                  >
                    View project ↗
                  </a>
                </div>
              </div>

              {/* Project details */}
              <div className="mt-7 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div className="max-w-xl">
                  <h3 className="text-2xl font-semibold">{pro.name}</h3>

                  <p className="mt-3 text-sm leading-7 text-gray-400">
                    {pro.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 md:max-w-xs md:justify-end">
                  <span className="rounded-full border border-white/20 px-4 py-2 text-xs text-gray-300">
                    {pro.tech}
                  </span>
                  <span className="rounded-full border border-white/20 px-4 py-2 text-xs text-gray-300">
                    {pro.tech2}
                  </span>
                  <span className="rounded-full border border-white/20 px-4 py-2 text-xs text-gray-300">
                    {pro.tech3}
                  </span>
                  <span className="rounded-full border border-white/20 px-4 py-2 text-xs text-gray-300">
                    {pro.tech4}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between border-t border-t-[#ffffff1f] pt-10 mt-20 ">
          <div className="flex items-center gap-2">
            <p className="font-[400] text-5xl flex gap-1 ">
              04 <span className="text-[#b9a7f8] "> + </span>
            </p>
            <span className="text-xs text-[#7b7b82] mt-6 ">
              {" "}
              Projects built{" "}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <p className="font-[400] text-5xl  flex gap-1">
              15 <span className="text-[#b9a7f8] "> + </span>
            </p>
            <span className="text-xs text-[#7b7b82] mt-6 ">
              {" "}
              Technologies explored{" "}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <p className="font-[400] text-6xl "> ∞ </p>
            <span className="text-xs text-[#7b7b82] mt-6 ">
              {" "}
              Things to learn{" "}
            </span>
          </div>
        </div>
      </section>

      <section
        id="journey"
        className="mx-auto bg-[#151518] mt-10 pt-30 flex flex-col gap-5 max-w-[1400px] bordr-t bordr-current/10 px-5 py-12 sm:px-8"
      >
        <p className="text-xs tracking-[3px] text-[#b9a7f8]">
          04 /<span className="text-[#929198]"> JOURNEY </span>
        </p>
        <div className="flex justify-between items-center">
          <h2 className="mt-3 font-serif text-7xl sm:text-7xl font-[500] tracking-tighter ">
            Learning my way <br />{" "}
            <span className="text-[#b9a7f8]"> into software. </span>
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-7 text-[#929198] ">
            There`s no finish line — just a trail of questions, projects, <br />{" "}
            and small breakthroughs.
          </p>
        </div>
        <div className="grid gap-0 mt-10 ml-30 relative">
          {progress.map((prog) => (
            <div className="" key={prog.id}>
              <div className="absolute left-5 top-5 bottom-5 w-px bg-[#25252b] pb-5" />
              <div className="relative flex gap-8 pb-10 ">
                <div className="z-10 flex items-center justify-center h-10 w-10 shrink-0 rounded-full border border-[#b9a7f8] text-[#b9a7f8] text-xs bg-[#17171d]">
                  {prog.id}
                </div>
                <div className="flex flex-col  gap-5 ">
                  <h3 className="text-2xl"> {prog.name} </h3>
                  <p className="text-xs text-[#b9a7f8] "> {prog.title} </p>
                  <h4 className="text-[15px] text-[#929198] w-70">
                    {" "}
                    {prog.decription}{" "}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-5">
        <span></span>
        <h2>
          {/* From writing my first programs to building{" "} */}
          {/* <span> complete application </span> */}
        </h2>
        <p></p>
      </section>
      <section
        id="contact"
        className=" flex flex-col items-center gap-5 mx-auto max-w-[1400px] bordr-t border-current/10 px-5 py-16 sm:px-8"
      >
        <div className="flex gap-1 items-center">
          <span className="text-[#b9a7f8] ">05</span>
          <div className="bg-[#25252b] w-7 h-[1px] "></div>
          <p className="text-xs tracking-[3px] text-current/50">GET IN TOUCH</p>
        </div>
        <h2 className="mt-3 max-w-3xl font-serif text-4xl sm:text-6xl">
          Let`s build something <br />
          <span className="text-[#a998ff] ">worth remembering.</span>
        </h2>
        <p className="text-[#929198] mt-5">
          Whether it`s an opportunity, collaboration, project, or simply a
          conversation about technology — I`d love to connect.
        </p>
        <a
          href="mailto:leerabarikogbara@gmail.com"
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#a998ff] px-6 py-4 text-sm font-semibold text-[#17131d] transition hover:-translate-y-1"
        >
          Contact me <ArrowUpRight size={17} />
        </a>
      </section>
      <footer className="flex justify-between items-center mb-5 border-t border-current/10 px-5 py-6 text-center text-xs text-current/45">
        <div className="flex">
          <a href="#home">Leera.</a>
          <p>Software Engineer · Builder · Learner</p>
        </div>
        <div className="flex gap-5">
          <div className="flex gap-3">
            <a href="https://github.com/ItsLeera" className="">
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/leerabari-kogbara-2a1258391"
              className=""
            >
              LinkedIn
            </a>
            <a href="mailto:leerabarikogbara@gmail.com" className="">
              Email
            </a>
          </div>
          <div className="flex gap-2">
            <p>
              ©{" "}
              <Suspense fallback={null}>
                <Year />
              </Suspense>
            </p>
            <p>Leerabari Kogbara</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
