"use client";
import { motion } from "framer-motion";
import { ImagesSlider } from "../../../components/ui/images-slider";
import Link from "next/link";
interface Course{
    id: number,
    title: string,
    go: string,
    description: string,
    image: string[],
    tech: string[],       
}
const courseData = {
    "courses": [
        {
          "id": 1,
          "title": "PIOR | E-commerce Website",
          "description": "MERN stack e-commerce website with features like filtering products, cart ,authentication and payment gateway.",
          "image": [ "/courses/e1.png", "/courses/e9.png", "/courses/e2.png", "/courses/e3.png", "/courses/e5.png", "/courses/e8.png", "/courses/e4.png", "/courses/e6.png", "/courses/e7.png", "/courses/e10.png"],
          "go":"https://github.com/DeepeshRajdev/e-commerce",
          "tech":[],
        },
        {
          "id": 2,
          "title": "AURA | Social Media Website",
          "description": "Full Stack social media website using React js and Appwrite where people can share, create, delete and upadate posts.",
          "image":["/courses/landing.png","/courses/signin.png","/courses/steve.png","/courses/albert.png", "/courses/post1.png", "/courses/post2.png", "/courses/virat.png"],
          "go":"https://github.com/DeepeshRajdev/blog",
          "tech":[],
        },
    ]
}
export function ImagesSliderDemo() {
    const images = [
      "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ];
    return (
      <ImagesSlider className="h-[40rem]" images={images}>
        <motion.div
          initial={{
            opacity: 0,
            y: -80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="z-50 flex flex-col justify-center items-center"
        >
          <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
            The hero section slideshow <br /> nobody asked for
          </motion.p>
          <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
            <span>Join now →</span>
            <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
          </button>
        </motion.div>
      </ImagesSlider>
    );
  }
const page = ({ params }: { params: { id: number } }) => {
    let [project, ...obj] = courseData.courses.filter((item) => item["id"] == params.id);
    if(!project) return null;
    console.log(project);
  return (
    <div className="h-screen  w-full rounded-md flex flex-col items-start justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <ImagesSlider  images={project.image}>
        <motion.div
          initial={{
            opacity: 0,
            y: -80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="z-50 flex flex-col justify-center items-center"
        >
          <motion.p className="font-bold text-xl md:text-4xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
           
          </motion.p>
          <button className=" px-4 py-2 place-self-end backdrop-blur-sm border bg-black-300/10 border-black-500/20 text-black mx-auto text-center rounded-full relative mt-20">
            <Link href={project.go}><span>Github</span></Link>
            <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
          </button>
        </motion.div>
      </ImagesSlider>
    </div>
  )
}

export default page
