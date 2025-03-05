import "../../Global.css";
import Avatar from "../../Assets/profile.png";
import "./Hero.css";
import Pill from "../Pill/Pill";

function Hero({
  name = "Abhishek Punuri",
  role = "Full Stack Developer",
  description = "I am a Full Stack Developer proficient in the MERN stack, focused on secure, scalable applications and user-friendly design.",
  email = "abhishekpunuri22@gmail.com",
  mobile = "+91 6304825735",
  linkedin = "https://www.linkedin.com/in/abhishekpunuri/",
  github = "https://github.com/Abhi-P22",
  resume = "https://drive.google.com/drive/folders/1pLca5Ocdf9NgDKStg7pJnCRbazd74pmQ?usp=sharing",
}) {

  return (
    <div className="hero">
      <div className="image">
        <div className="avatar">
          <img src={Avatar} alt="Avatar" />
        </div>
        <a href={resume} target="_blank" rel="noreferrer">
        <Pill content="View Résumé" color="invert" />
        </a>
      </div>

      <div className="hero-content">
        <div className="role">
          <Pill content={role} />
        </div>
        <div className="description">
          <h1>Hi, I'm {name}</h1>
          <span>{description}</span>
        </div>
        <div className="links">
          <a target="_blank" rel="noreferrer" href={`mailto:${email}`}><Pill content={email} /></a>
          <a target="_blank" rel="noreferrer" href={`tel:${mobile}`}><Pill content={mobile} /></a>
          <a target="_blank" rel="noreferrer" href={linkedin}><Pill content="LinkedIn" /></a>
          <a target="_blank" rel="noreferrer" href={github}><Pill content="GitHub" /></a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
