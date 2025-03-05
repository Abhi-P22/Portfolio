import React from "react";
import "../../Global.css";
import "./About.css";
import Education from "./Education";
// import Interests from "./Interests";
import Hobbies from "./Hobbies";

function About() {
  return (
    <div className="about">
      <h1 className='heading'>{"<About />"}</h1>
      <div className="about-description">
        <Education />
        {/* <Interests interests={["Web Development", "Machine Learning", "Data Science", "Cybersecurity"
        , "Mobile Development", "Artificial Intelligence", "Blockchain", "Quantum Computing", "Internet of Things", "Cloud Computing"]} /> */}
        <Hobbies hobbies={[" Badminton", "Football/Cricket Content Writer","Aquarium hobbyist","Movie Reviews", "Volunteering & Community Work","UI/UX Enthusiast"]} />
      </div>
    </div>
  );
}

export default About;
