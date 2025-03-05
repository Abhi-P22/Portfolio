import React from 'react'
import "../../Global.css";
import "./Education.css";
import Timeline from "../Timeline/Timeline";

function Education() {
  return (
    <div className="education">
      <h2>{"<Education />"}</h2>
        <Timeline events={[
            {
            date: "2020 - 2024",
            title: "B.Tech in ECE",
            description: "IIIT, Kancheepuram"
            },
            {
            date: "2018 - 2020",
            title: "Intermediate Education",
            description: "Narayana Jr. College"
            },
            // {
            // date: "2018",
            // title: "Scholar with Distinction",
            // description: "San Diego High School"
            // }
        ]} />
    </div>
  )
}

export default Education
