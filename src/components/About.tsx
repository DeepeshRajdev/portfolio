"use client";
import React from 'react'
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
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
      name: "Charles Dickens",
      title: "C++",
     
    },
    {
      image: "https://brandeps.com/logo-download/J/JavaScript-logo-vector-01.svg",
      quote:
        "",
      name: "Charles Dickens",
      title: "Javascript",
     
    }
    ,
    {
      image: "https://brandeps.com/logo-download/R/React-logo-vector-01.svg",
      quote:
        "",
      name: "Charles Dickens",
      title: "ReactJs",
     
    },
    {
      image: "https://brandeps.com/logo-download/N/Node-JS-logo-vector-01.svg",
      quote:
        "",
      name: "Charles Dickens",
      title: "NodeJs",
     
    }
    ,
    {
      image: "https://brandeps.com/icon-download/E/Express-icon-vector-01.svg",
      quote:
        "",
      name: "Charles Dickens",
      title: "ExpressJs",
     
    }
    ,
    {
      image: "https://brandeps.com/logo-download/M/MongoDB-logo-vector-01.svg",
      quote:
        "",
      name: "Charles Dickens",
      title: "MongoDB",
     
    }
    ,
    {
      image:"https://brandeps.com/logo-download/G/Git-logo-vector-01.svg",
      quote:
        "",
      name: "Charles Dickens",
      title: "Git",

    }
    ,
    {
      image: "https://brandeps.com/logo-download/M/MySQL-logo-vector-01.svg",
      quote:
        "",
      name: "Charles Dickens",
      title: "SQL",
     
    },
    {
      image: "https://brandeps.com/logo-download/H/HTML-5-logo-vector-01.svg",
      quote:
        "",
      name: "Charles Dickens",
      title: "HTML",

    },
    {
      image: "https://brandeps.com/logo-download/C/CSS-3-logo-vector-01.svg",
      quote:
        "",
      name: "Charles Dickens",
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
    name: "John Doe",
   
    image:"https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    
      image:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
   
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    
    image:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  
];
const About = () => {
  return (
  
     <div >
     
     
      <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <h2 className="text-3xl font-bold text-center mt-30 mb-8 z-10"> <TypewriterEffectSmooth words={words} /> </h2>
      <h1 className=" font-bold text-center text-white relative z-20">
        {/*md:text-3xl text-xl lg:text-4xl*/}
      <TextGenerateEffect words = {word}/>
      </h1>
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="normal"
        />
      </div>
    </div>
  
  )
}

export default About








