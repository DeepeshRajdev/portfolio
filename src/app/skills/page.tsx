"use client";
import React from 'react'
import { motion } from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import  { useEffect, useState } from "react";
export function InfiniteMovingCardsDemo() {
    return (
      <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="fast"
        />
      </div>
    );
  }
  const testimonials = [
    {
      image: "https://brandeps.com/logo-download/C/C++-logo-vector-01.svg",
      quote:
        "",
      name: "Chqarles Dickens",
      title: "C++",
     
    },
    {
      image: "https://brandeps.com/logo-download/J/JavaScript-logo-vector-01.svg",
      quote:
        "",
      name: "Charlers Dickens",
      title: "Javascript",
     
    }
    ,
    {
      image: "https://brandeps.com/logo-download/R/React-logo-vector-01.svg",
      quote:
        "",
      name: "Cha Dickens",
      title: "ReactJs",
     
    },
    {
      image: "https://brandeps.com/logo-download/N/Node-JS-logo-vector-01.svg",
      quote:
        "",
      name: "Cwens",
      title: "NodeJs",
     
    }
    ,
    {
      image: "https://brandeps.com/icon-download/E/Express-icon-vector-01.svg",
      quote:
        "",
      name: "Charlkens",
      title: "ExpressJs",
     
    }
    ,
    {
      image: "https://brandeps.com/logo-download/M/MongoDB-logo-vector-01.svg",
      quote:
        "",
      name: "Rajdev",
      title: "MongoDB",
     
    }
    ,
    {
      image:"https://brandeps.com/logo-download/G/Git-logo-vector-01.svg",
      quote:
        "",
      name: "Charl",
      title: "Git",

    }
    ,
    {
      image: "https://brandeps.com/logo-download/M/MySQL-logo-vector-01.svg",
      quote:
        "",
      name: "Charles Dick",
      title: "SQL",
     
    },
    {
      image: "https://brandeps.com/logo-download/H/HTML-5-logo-vector-01.svg",
      quote:
        "",
      name: "Charles Dicke",
      title: "HTML",

    },
    {
      image: "https://brandeps.com/logo-download/C/CSS-3-logo-vector-01.svg",
      quote:
        "",
      name: "Charles ",
      title: "Tailwind CSS",
     
    },
  ];
const words = [
    
    {
      text: "About",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Me.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  const word = `I am a MERN Stack developer and Pre-final year undergraduate Computer Science student at MANIT, Bhopal (India).
  I am deeply interested in Competitive Programming having strong fundamentals of C++ and Javascript.
`;
const people = [
  {
    id: 1,
    name: "Leetcode",
    go:"https://leetcode.com/rajdev007/",
    image:"/courses/leetcode.png",
  },
  {
    id: 2,
    name: "LinkedIn",
    go:"https://www.linkedin.com/in/deepesh-rajdev-1071a8223/", 
      image:"/courses/linkedin.png",
  },
  {
    id: 3,
    name: "Codeforces",
    go:"https://codeforces.com/profile/DeepeshRajdev",
    image: "/courses/codeforces.png",
  },
  {
    id: 4,
    name: "Github",
    go:"https://github.com/DeepeshRajdev",
    image:"/courses/github.png",
  },
  
];
const page = () => {
  return (
  
     <div>     
      <div className="w-screen h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <h2 className="z-50 text-3xl lg:text-4xl font-bold text-center mt-30 mb-4 md:z-10"> <TypewriterEffectSmooth words={words} /> </h2>    
      <h1 className="font-bold text-center text-white relative z-20">
        {/*md:text-3xl text-xl lg:text-4xl*/}
        <TextGenerateEffect words = {word}/>     
      </h1>
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="normal"
        />
         <div className="bottom-0 flex flex-row items-center justify-center mt-20 mb-5 w-full absolute md:bottom-5">
      <AnimatedTooltip items={people} />
    </div>
      </div>
    </div>
  
  )
}

export default page








