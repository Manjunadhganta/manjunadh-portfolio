import React from 'react';
import { BsArrowUpRightCircle } from "react-icons/bs";
import { LuDot } from "react-icons/lu";
import { LinkPreview } from "@/components/ui/link-preview"; // Update path as needed

const projectData = [
  {
    title: "ResumeIQ",
    imageSrc: "/resumeiq.png",
    githubUrl: "https://github.com/Manjunadhganta/resumeiq"
  },
  {
    title: "Servora",
    imageSrc: "/saas-servora.png",
    githubUrl: "https://github.com/Manjunadhganta/saas-lander-fun-project"
  },
  {
    title: "EchoAI",
    imageSrc: "/echoai.png",
    githubUrl: "https://github.com/Manjunadhganta/AI_saas"
  },
  {
    title: "Amazon Clone",
    imageSrc: "/amazon.png",
    githubUrl: "https://github.com/Manjunadhganta/amazon-clone"
  },
  {
    title: "Travel App Landing Site",
    imageSrc: "/travel-app.png",
    githubUrl: "https://github.com/Manjunadhganta/travel-app"
  },
  {
    title: "Nike Redesign",
    imageSrc: "/nike.png",
    githubUrl: "https://github.com/Manjunadhganta/nike-redesign"
  },
  {
    title: "3D-Lander",
    imageSrc: "/3d-app.png",
    githubUrl: "https://github.com/Manjunadhganta/3d-site"
  },
  {
    title: "Tic-Tac-Toe",
    imageSrc: "/tictactoe.png",
    githubUrl: ""
  },
  {
    title: "Stop Watch",
    imageSrc: "/Stopwatch.png",
    githubUrl: ""
  },
  {
    title: "Weather App",
    imageSrc: "/weatherapp.png",
    githubUrl: ""
  },
  {
    title: "To-Do App",
    imageSrc: "/todo-board.png",
    githubUrl: ""
  },
];

const Project = () => {
  return (
    <section id='projects' className='scroll-mt-16 md:scroll-mt-24'>

      <div className='mx-auto px-6 pt-10 max-w-7xl'>
        <h1 className='text-5xl md:text-7xl font-bold mb-12'>Projects</h1>

        {projectData.map((project, index) => (
  <div key={index} className='mb-6'>
    <div className='flex items-center justify-between'>
      <LinkPreview
        url={project.githubUrl}
        isStatic={true}
        imageSrc={project.imageSrc}
      >
        <h2 className='text-2xl md:text-4xl font-medium flex items-center'>
          <LuDot /> {project.title}
        </h2>
      </LinkPreview>

      {project.githubUrl ? (
        <LinkPreview
          url={project.githubUrl}
          isStatic={true}
          imageSrc={project.imageSrc}
        >
          <span className='text-3xl md:text-5xl hover:text-blue-400 transition'>
            <BsArrowUpRightCircle />
          </span>
        </LinkPreview>
        ) : (
          <span className='text-gray-500 text-3xl md:text-5xl'>
            <BsArrowUpRightCircle />
          </span>
        )}
          </div>

        <div className='border-white border-t-2 mt-4 w-full'></div>
      </div>
    ))}

      </div>
    </section>
  );
};

export default Project;
