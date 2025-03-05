import React from "react";
import "../../Global.css";
import "./Skills.css";
import SkillContainer from "./SkillContainer";

function Skills({
  programming_languages = [ "C++", "JavaScript", "Python","TypeScript"],
  databases = [ "MongoDB","MySQL", "Firebase",],
  web_technologies = ["HTML", "CSS", "React", "Node.js", "Express"],
  frameworks = ["Tailwind CSS",  "Redux", "Socket.io", 'Sequelize'],
  tools = ["Git", "VS Code", "Postman",],
  // cloud = ["AWS", "Google Cloud", "Azure", "Netlify"]
}) {
  return (
    <div className="skills">
      <h1 className='heading'>{`<Skills />`}</h1>
      <div className="skills-description">
      <SkillContainer
        title="Programming Languages"
        skills={programming_languages}
      />
        <SkillContainer title="Databases" skills={databases} />
        <SkillContainer title="Web Technologies" skills={web_technologies} />
        <SkillContainer title="Libraries/Frameworks" skills={frameworks} />
        <SkillContainer title="Tools" skills={tools} />
        {/* <SkillContainer title="Cloud" skills={cloud} /> */}
    </div>
    </div>
  );
}

export default Skills;
