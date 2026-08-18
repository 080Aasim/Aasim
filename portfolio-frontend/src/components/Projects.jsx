import { FaArrowTrendDown } from "react-icons/fa6";
import DotField from "./DotField";
import "./Projects.css";
import ShinyText from "./ShinyText";
import guestHouseImage from "../assets/project1.png";
import catFactImage from "../assets/project2.png";
import shoppingCartImage from "../assets/project3.png";
import ecommerceImage from "../assets/ecommerce.png";
import ledgerApiImage from "../assets/project4.png";
import leaderboardApiImage from "../assets/project5.png";

const projects = [
  { title: "Ledger API", image: leaderboardApiImage, url: "https://backend-ledger-1-g1yk.onrender.com/" },
  { title: "Leaderboard API", image: ledgerApiImage, url: "https://real-time-leaderboard-1.onrender.com/" },
  { title: "Ecommerce", image: ecommerceImage, url: "https://fullstack-frontend-sable-three.vercel.app/" },
  { title: "Guest House", image: guestHouseImage, url: "https://080aasim.github.io/guestHouse/" },
  { title: "Shopping Cart Demo", image: shoppingCartImage, url: "https://080aasim.github.io/shoppingCart/" },
  { title: "Cat Fact Generator", image: catFactImage, url: "https://080aasim.github.io/catFact/" },
];

function Projects() {
  return (
    <main id="p">
      <div className="projects-background" aria-hidden="true">
        <DotField dotRadius={1.5} dotSpacing={14} bulgeStrength={67} glowRadius={160} sparkle={false} waveAmplitude={0} cursorRadius={500} cursorForce={0.1} bulgeOnly gradientFrom="#A855F7" gradientTo="#B497CF" glowColor="#120F17" />
      </div>

      <section className="projects-section" aria-labelledby="pro">
        <header className="projects-heading">
          <div>
            <p className="projects-eyebrow">चयनित कार्य</p>
            <h1 id="pro">Project List <FaArrowTrendDown aria-hidden="true" /></h1>
          </div>
        </header>

        <div id="projects">
          {projects.map((project) => (
            <article className="project" key={project.title}>
              <img className="project-image" src={project.image} alt={`${project.title} preview`} />
              <div className="About">
                <h2>{project.title}</h2>
                {project.url ? (
                  <a className="pLinks" href={project.url} target="_blank" rel="noreferrer">
                    <ShinyText text="Click to visit" className="text-lg" speed={2} delay={0} color="#6b7280" shineColor="#000000" spread={120} direction="left" yoyo={false} pauseOnHover={false} disabled={false} />
                  </a>
                ) : (
                  <span className="pLinks unavailable">Link coming soon</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Projects;
