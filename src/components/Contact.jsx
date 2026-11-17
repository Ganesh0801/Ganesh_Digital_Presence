import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendRequest, resetContact } from "../store/contactSlice";
import { setTopic } from "../store/uiSlice";
import { profile } from "../data/profile";
import Socials from "./Socials";

const topics = [
  "Job opportunity",
  "Freelance project",
  "Collaboration",
  "Just saying hi",
];

const Contact = () => {
  const dispatch = useDispatch();
  const { status, error } = useSelector((s) => s.contact);
  const topic = useSelector((s) => s.ui.topic);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  useEffect(
    () => () => {
      dispatch(resetContact());
    },
    [dispatch],
  );

  const change = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  const submit = (e) => {
    e.preventDefault();
    dispatch(sendRequest({ ...form, topic }));
  };

  return (
    <section id="contact" className="sec contact">
      <div>
        <h2>Let's talk</h2>
        <p className="lead">
          Hiring for a MERN role or have a project in mind? Tell me what you
          need. I reply personally.
        </p>
        <p className="muted">
          {profile.email}
          <br />
          {profile.phone}
          <br />
          {profile.location}
        </p>
        <Socials />
      </div>
      {status === "success" ? (
        <div className="sent" role="status">
          <h3>Message sent</h3>
          <p>Thanks, {form.name || "friend"}. I will get back to you soon.</p>
          <button className="btn" onClick={() => dispatch(resetContact())}>
            Send another
          </button>
        </div>
      ) : (
        <form onSubmit={submit}>
          <label>
            Name
            <input name="name" value={form.name} onChange={change} required />
          </label>
          <label>
            Email
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={change}
              required
            />
          </label>
          <label>
            Topic
            <select
              value={topic}
              onChange={(e) => dispatch(setTopic(e.target.value))}
            >
              {topics.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </label>
          <label>
            Message
            <textarea
              name="message"
              rows="5"
              value={form.message}
              onChange={change}
              required
            />
          </label>
          {status === "error" && (
            <p className="error" role="alert">
              {error}
            </p>
          )}
          <button className="btn primary" disabled={status === "loading"}>
            {status === "loading" ? "Sending…" : "Send message"}
          </button>
        </form>
      )}
    </section>
  );
};

export default Contact;
