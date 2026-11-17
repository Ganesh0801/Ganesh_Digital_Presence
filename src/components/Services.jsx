import { useDispatch } from "react-redux";
import { setTopic } from "../store/uiSlice";
import { services, profile } from "../data/profile";

const Services = () => {
  const dispatch = useDispatch();
  return (
    <section id="services" className="sec">
      <h2>Hire me for</h2>
      <div className="tracks">
        {services.map((s) => (
          <div key={s.title} className="track static">
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </div>
        ))}
      </div>
      <div className="cta spaced">
        <a
          className="btn primary"
          href={profile.upwork}
          target="_blank"
          rel="noreferrer"
        >
          Hire on Upwork
        </a>
        <a
          className="btn"
          href={profile.fiverr}
          target="_blank"
          rel="noreferrer"
        >
          Order on Fiverr
        </a>
        <a
          className="btn"
          href="#contact"
          onClick={() => dispatch(setTopic("Freelance project"))}
        >
          Message me directly
        </a>
      </div>
    </section>
  );
}
export default Services;