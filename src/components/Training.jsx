import { training } from "../data/profile";

const Training = () => {
  return (
    <section id="training" className="sec">
      <h2>Training and education</h2>
      <ul className="train">
        {training.map((t) => (
          <li key={t.title}>
            <h3>{t.title}</h3>
            <p className="muted">{t.note}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
export default Training;