import { useDispatch } from "react-redux";
import { setTopic } from "../store/uiSlice";
import { profile } from "../data/profile";
import portrait from "../assets/ganesh.webp";
import Socials from "./Socials";

const diff = [
  [" ", "ganesh.js"],
  ["+", 'role: "MERN stack developer"'],
  [
    "+",
    'stack: ["React", "Redux Toolkit", "Redux Saga", "Node", "Express", "MongoDB"]',
  ],
  ["+", 'ships: "full stack apps with auth, RBAC and real APIs"'],
  ["+", 'open: "MERN developer roles and freelance work"'],
];

const Hero = () => {
  const dispatch = useDispatch();
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="avail">
          <i aria-hidden="true" />
          Open to MERN developer roles and freelance work
        </p>
        <h1>I build full stack apps with the MERN stack.</h1>
        <p>
          Ganesh B, full stack developer in Chennai. Trained at Crio.Do, shipped
          through two developer internships, and now mentoring MERN at Kalvium.
          I turn Figma into React, connect it to secure APIs, and keep the code
          clean.
        </p>
        <div className="cta">
          <a
            className="btn primary"
            href="#contact"
            onClick={() => dispatch(setTopic("Job opportunity"))}
          >
            Hire me
          </a>
          <a className="btn" href={profile.resume} download>
            Download resume
          </a>
          <a className="btn" href="#work">
            See the work
          </a>
        </div>
        <Socials />
      </div>
      <div className="hero-visual">
        <div className="glass profile-card">
          <img
            className="portrait"
            src={portrait}
            width="640"
            height="640"
            alt="Ganesh B, smiling, in a light blue shirt"
          />
          <div className="pc-meta">
            <strong>Ganesh B</strong>
            <span>MERN Stack Developer</span>
            <small>Chennai, Tamil Nadu</small>
          </div>
        </div>
        <figure
          className="glass diff"
          aria-label="A code diff describing Ganesh's current status"
        >
          {diff.map(([sign, text], i) => (
            <div
              key={i}
              className={`line ${sign === "+" ? "add" : sign === "-" ? "del" : ""}`}
              style={{ "--d": `${0.4 + i * 0.45}s` }}
            >
              <span className="sign">{sign}</span>
              <code>{text}</code>
            </div>
          ))}
        </figure>
      </div>
    </section>
  );
};

export default Hero;