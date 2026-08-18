import { MdHtml } from "react-icons/md";
import { FaCss3, FaGithub, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoMongodb } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import "./About.css";
import DotField from "./DotField";
import Strands from "./Strands";
import TextPressure from "./TextPressure";

const skills = [
  { name: "HTML", icon: MdHtml },
  { name: "CSS", icon: FaCss3 },
  { name: "Tailwind", icon: RiTailwindCssFill },
  { name: "JavaScript", icon: IoLogoJavascript },
  { name: "React", icon: FaReact },
  { name: "Node.js", icon: DiNodejs },
  { name: "Express", icon: SiExpress },
  { name: "MongoDB", icon: BiLogoMongodb },
  { name: "GitHub", icon: FaGithub },
];

function About() {
  return (
    <main className="about">
      <div className="about-background" aria-hidden="true">
        <DotField dotRadius={1.5} dotSpacing={14} bulgeStrength={67} glowRadius={160} sparkle={false} waveAmplitude={0} cursorRadius={500} cursorForce={0.1} bulgeOnly gradientFrom="#A855F7" gradientTo="#B497CF" glowColor="#120F17" />
      </div>
      <div className="about-strands" aria-hidden="true">
        <Strands colors={["#F97316", "#7C3AED", "#06B6D4"]} count={3} speed={0.5} amplitude={1} waviness={1} thickness={0.7} glow={2.6} taper={3} spread={1} intensity={0.6} saturation={2} opacity={1} scale={1.5} glass={false} refraction={1} dispersion={1} glassSize={1} hueShift={0} />
      </div>

      <section className="about-content" aria-labelledby="about-title">
        <p className="about-label">मेरे बारे में</p>
        <div className="about-title-effect" id="about-title">
          <TextPressure
            text="I’m Aasim Akhtar."
            flex
            alpha={false}
            stroke={false}
            width
            weight
            italic
            textColor="#111827"
            strokeColor="#5227FF"
            minFontSize={36}
          />
        </div>
        <p className="about-intro">
          A full-stack developer who enjoys shaping expressive interfaces and reliable systems behind them.
        </p>

        <div className="about-links mt-5" aria-label="Profile links">
          <a href="https://www.linkedin.com/in/aasim-akhtar-290b861a0/" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
          <a href="https://www.gniotgroup.edu.in/" target="_blank" rel="noreferrer">Graduate <span>↗</span></a>
          <a href="https://github.com/080Aasim" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
        </div>

        <div className="skills-section">
          <div className="skills-heading">
            <p>Toolkit</p>
            <h2>Skills I work with</h2>
          </div>
          <div className="skills-grid">
            {skills.map(({ name, icon: Icon }) => (
              <div className="skill-chip" key={name}>
                <Icon aria-hidden="true" />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
