
"use client";
import React from 'react'
import { SparklesCore } from "./ui/sparkles";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { AnimatedTooltip } from './ui/animated-tooltip';
const words = `Hello I am Deepesh Rajdev
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
const HeroSection = () => {
  return (
    <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        
    
   
    
        
      <h1 className="text-3xl md:text-7xl lg:text-9xl font-bold text-center text-white relative z-20">
      <TextGenerateEffect words = {words}/>
      </h1>
      
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
      <div className="flex flex-row items-center justify-center mt-30 mb-10 w-full absolute bottom-10">
      <AnimatedTooltip items={people} />
    </div>
    </div>
  )
}

export default HeroSection
