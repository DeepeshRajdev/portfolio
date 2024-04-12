'use client';
import React from 'react'
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from 'next/link';
interface Course{
    id: number,
    title: string,
    go: string,
    description: string,
    image: string
        
}
const courseData = {
    "courses": [
        {
          "id": 1,
          "title": "PIOR | E-commerce Website",
          "description": "MERN stack e-commerce website with features like filtering products, cart ,authentication and payment gateway.",
          "image": "/courses/ecommerce.jpg",
          "go":"https://github.com/DeepeshRajdev/e-commerce",
        },
        {
          "id": 2,
          "title": "AURA | Social Media Website",
          "description": "Full Stack social media website using React js and Appwrite where people can share, create, delete and upadate posts.",
          "image": "/courses/socialmedia.jpg" ,
          "go":"https://github.com/DeepeshRajdev/blog",
        },
    ]
}
const page = () => {
  return (
    <div>
       <div className="min-h-screen bg-black py-12 pt-15">
        {/* <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">All courses</h1>   */}
        <div className="flex flex-wrap justify-center">
            {courseData.courses.map((course : Course) => (
                <CardContainer className="inter-var m-4">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    {course.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    {course.description}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src={course.image}
                      height="1000"
                      width="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt={course.title}
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-20">
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white border-2 border-zinc-200 border-solid"
                    >
                      KNOW MORE →
                    </CardItem>
                    <Link href={course.go}>
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      Github
                    </CardItem>
                    </Link>
                  </div>
                </CardBody>
              </CardContainer>
            ))}
        </div>  
    </div>
    </div>
  )
}

export default page
