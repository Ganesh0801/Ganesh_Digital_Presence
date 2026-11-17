import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closePalette, toggleTheme } from "../store/uiSlice";
import { profile } from "../data/profile";

const Palette = () => {
  const dispatch = useDispatch();
  const open = useSelector((s) => s.ui.palette);
  const [q, setQ] = useState("");
  const input = useRef(null);

  useEffect(() => {
    if (open) {
      setQ("");
      setTimeout(() => input.current?.focus(), 0);
    }
    const esc = (e) => e.key === "Escape" && dispatch(closePalette());
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [open, dispatch]);

  if (!open) return null;
  const go = (id) => () => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    dispatch(closePalette());
  };
  const commands = [
    ["Go to work", go("work")],
    ["Go to experience", go("experience")],
    ["Go to services", go("services")],
    ["Go to contact", go("contact")],
    [
      "Switch colour mode",
      () => {
        dispatch(toggleTheme());
        dispatch(closePalette());
      },
    ],
    [
      "Open GitHub",
      () => window.open(`https://github.com/${profile.github}`, "_blank"),
    ],
    ["Download resume", () => window.open(profile.resume, "_blank")],
    ["Open Upwork", () => window.open(profile.upwork, "_blank")],
    ["Open Fiverr", () => window.open(profile.fiverr, "_blank")],
    ["Open LinkedIn", () => window.open(profile.linkedin, "_blank")],
    [
      "Email Ganesh",
      () => {
        window.location.href = `mailto:${profile.email}`;
      },
    ],
  ].filter(([label]) => label.toLowerCase().includes(q.toLowerCase()));

  return (
    <div className="scrim" onClick={() => dispatch(closePalette())}>
      <div
        className="palette"
        role="dialog"
        aria-label="Command menu"
        onClick={(e) => e.stopPropagation()}
      >
        <input
          ref={input}
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Type a command"
          onKeyDown={(e) => e.key === "Enter" && commands[0]?.[1]()}
        />
        <ul>
          {commands.map(([label, run]) => (
            <li key={label}>
              <button onClick={run}>{label}</button>
            </li>
          ))}
        </ul>
        {!commands.length && (
          <p className="muted pad">
            No command matches. Try "work" or "email".
          </p>
        )}
      </div>
    </div>
  );
}
export default Palette;