import { FaArrowTrendDown } from "react-icons/fa6";
import DotField from "./DotField";
import { NavLink } from "react-router-dom";
import "./Projects.css";
import ShinyText from "./ShinyText";

function Projects() {
  return (
    <div id="p">
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
      <div className="con absolute z-10 top-20 flex items-center justify-center flex-col w-full text-2xl">
        <h1 id="pro">
          Project List{" "}
          <FaArrowTrendDown
            style={{
              fontSize: "40px",
              position: "absolute",
              top: "10",
              right: "-45",
            }}
          />
        </h1>
        <div id="projects">
          <div className="project">
            <div id="img1" className="image"></div>
            <div className="About">
              <h2>Guest House</h2>
              <NavLink
                className="pLinks"
                to="https://080aasim.github.io/guestHouse/"
                target="_blank"
              >
                <ShinyText
                  text="Click to visit"
                  className=" text-2xl"
                  speed={2}
                  delay={0}
                  color="#b5b5b5"
                  shineColor="#000000"
                  spread={120}
                  direction="left"
                  yoyo={false}
                  pauseOnHover={false}
                  disabled={false}
                />
              </NavLink>
            </div>
          </div>
          <div className="project">
            <div id="img2" className="image"></div>
            <div className="About">
              <h2>Cat Fact Generator</h2>
              <NavLink
                className="pLinks"
                to="https://080aasim.github.io/catFact/"
                target="_blank"
              >
                <ShinyText
                  text="Click to visit"
                  className=" text-2xl"
                  speed={2}
                  delay={0}
                  color="#b5b5b5"
                  shineColor="#000000"
                  spread={120}
                  direction="left"
                  yoyo={false}
                  pauseOnHover={false}
                  disabled={false}
                />
              </NavLink>
            </div>
          </div>
          <div className="project">
            <div id="img3" className="image"></div>
            <div className="About">
              <h2>Shopping Cart Demo</h2>
              <NavLink
                className="pLinks"
                to="https://080aasim.github.io/shoppingCart/"
                target="_blank"
              >
                <ShinyText
                  text="Click to visit"
                  className=" text-2xl"
                  speed={2}
                  delay={0}
                  color="#b5b5b5"
                  shineColor="#000000"
                  spread={120}
                  direction="left"
                  yoyo={false}
                  pauseOnHover={false}
                  disabled={false}
                />
              </NavLink>
            </div>
          </div>
          <div className="project">
            <div id="img4" className="image"></div>
            <div className="About">
              <h2>Ecommerce</h2>
              <NavLink
                className="pLinks"
                to="https://fullstack-frontend-sable-three.vercel.app/"
                target="_blank"
              >
                <ShinyText
                  text="Click to visit"
                  className=" text-2xl"
                  speed={2}
                  delay={0}
                  color="#b5b5b5"
                  shineColor="#000000"
                  spread={120}
                  direction="left"
                  yoyo={false}
                  pauseOnHover={false}
                  disabled={false}
                />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
