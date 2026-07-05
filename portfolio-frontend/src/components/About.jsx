import { MdHtml } from "react-icons/md";
import { FaCss3 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoMongodb } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { FaGithub } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import "./About.css";
import { Link } from "react-router-dom";
import DotField from "./DotField";
import Strands from "./Strands";

function About() {
  return (
    <div className="about">
      <div
        style={{
          width: "100%",
          height: "100vh",
          position: "relative",
          zIndex: 0,
        }}
      >
        <DotField
          dotRadius={1.5}
          dotSpacing={14}
          bulgeStrength={67}
          glowRadius={160}
          sparkle={false}
          waveAmplitude={0}
          cursorRadius={500}
          cursorForce={0.1}
          bulgeOnly
          gradientFrom="#A855F7"
          gradientTo="#B497CF"
          glowColor="#120F17"
        />
      </div>
      <div className="ab absolute z-10">
        <div className="me flex gap-4 items-center justify-center">
          <Link
            to="https://www.linkedin.com/in/aasim-akhtar-290b861a0/"
            className="Link"
            target="_blank"
          >
            <h2>Aasim Akhtar</h2>
          </Link>
          <Link
            to="https://www.gniotgroup.edu.in/"
            className="Link"
            target="_blank"
          >
            <h2>Graduated</h2>
          </Link>
          <Link
            to="https://github.com/080Aasim"
            className="Link"
            target="_blank"
          >
            <h2>Coding Is Love</h2>
          </Link>
        </div>
        <div id="sk flex">
          <h2>Skills → </h2>
          <p className="skills flex items-center justify-center gap-3">
            Html
            <MdHtml style={{ marginRight: "4px", fontSize: "40px" }} />
            Css
            <FaCss3 style={{ marginRight: "4px", fontSize: "40px" }} />
            Tailwind
            <RiTailwindCssFill
              style={{ marginRight: "4px", fontSize: "40px" }}
            />
            Javascript
            <IoLogoJavascript
              style={{ marginRight: "4px", fontSize: "40px" }}
            />
            React
            <FaReact style={{ marginRight: "4px", fontSize: "40px" }} />
            NodeJs
            <DiNodejs style={{ marginRight: "4px", fontSize: "40px" }} />
            ExpressJS
            <SiExpress style={{ marginRight: "4px", fontSize: "40px" }} />
            MongoDB
            <BiLogoMongodb style={{ marginRight: "6px", fontSize: "40px" }} />
            Git/Github
            <FaGithub style={{ marginRight: "4px", fontSize: "40px" }} />
          </p>
        </div>
      </div>

      <div style={{ width: "100%", height: "600px", position: "absolute", zIndex: 100, top: 100 }}>
        <Strands
          colors={["#F97316", "#7C3AED", "#06B6D4"]}
          count={3}
          speed={0.5}
          amplitude={1}
          waviness={1}
          thickness={0.7}
          glow={2.6}
          taper={3}
          spread={1}
          intensity={0.6}
          saturation={2}
          opacity={1}
          scale={1.5}
          glass={false}
          refraction={1}
          dispersion={1}
          glassSize={1}
          hueShift={0}
        />
      </div>
    </div>
  );
}

export default About;
