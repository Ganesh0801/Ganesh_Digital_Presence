import { skills } from "../data/profile";

const Skills = () => {
  return (
    <section className="sec">
      <h2>Tools I reach for</h2>
      <div className="skills">
        {Object.entries(skills).map(([group, items]) => (
          <div key={group}>
            <h3>{group}</h3>
            <ul className="tags">
              {items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Skills;