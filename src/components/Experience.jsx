import { experience } from "../data/profile";

const Experience = () => {
  return (
    <section id="experience" className="sec">
      <h2>Where I have worked</h2>
      <ol className="timeline">
        {experience.map((e) => (
          <li key={e.role}>
            <time>{e.when}</time>
            <div>
              <h3>{e.role}</h3>
              <p className="kind">{e.org}</p>
              <p>{e.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default Experience;