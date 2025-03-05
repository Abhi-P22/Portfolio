import React from 'react'
import '../../Global.css'
import './Projects.css'
import ProjectContainer from './ProjectContainer'
function Projects(
    {
        projects = [
        {
            title: "CineMate",
            description: "Built a full-stack movie recommendation app with secure JWT authentication, RBAC, an AI-powered chatbot, a wishlist feature, and a RESTful API for efficient data management.",
            technologies: ["JavaScript", "React", "Node.js", "Express", "MongoDB"],
            img:"https://res.cloudinary.com/dix852ojt/image/upload/v1741188583/Screenshot_2025-03-05_200847_tnjs9i.png",
            link: "https://cine-mate-ten.vercel.app/"
        },
        {
            title: "EventSync",
            description: "Built a full-stack MERN event management app with real-time updates via Socket.IO, JWT authentication with RBAC, dynamic event filtering, Cloudinary integration for image uploads, and a fully responsive design.",
            technologies: ["JavaScript", "React", "Node.js", "Express", "MongoDB","Socket.IO"],
            img:"https://res.cloudinary.com/dix852ojt/image/upload/v1741188586/Screenshot_2025-03-05_200237_bkwl8x.png",
            link: "https://eventsync-five.vercel.app/"
        },
        {
            title: "AI Python Tutor",
            description: "AI Python Tutor is an interactive, AI-powered platform for kids to learn Python, featuring customizable tutors, interactive lessons, API key support, and a responsive design.",
            technologies: ["HTML","Tailwind CSS","JavaScript", "React",],
            img:"https://res.cloudinary.com/dix852ojt/image/upload/v1741188583/Screenshot_2025-03-05_205826_q3ysjf.png",
            link: "https://skc-abhishekpunuri-ai-python-tutor-github-io.vercel.app/"
        }
        ]
    }){
  return (
    <div className="projects">
      <h1 className='heading'>{"< Projects />"}</h1>
        <div className="projects-description">
            {projects.map((project, index) => (
            <ProjectContainer key={index} project={project} />
            ))}
        </div>
    </div>
  )
}

export default Projects
