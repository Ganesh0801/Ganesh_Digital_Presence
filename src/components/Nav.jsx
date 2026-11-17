import { useDispatch, useSelector } from "react-redux";
import { togglePalette, toggleTheme } from "../store/uiSlice";

const links = [
  ["work", "Work"],
  ["experience", "Experience"],
  ["services", "Services"],
  ["training", "Training"],
  ["contact", "Contact"],
];

const Nav = () => {
  const dispatch = useDispatch();
  const theme = useSelector((s) => s.ui.theme);
  return (
    <header className="nav">
      <a href="#top" className="logo">
        ganesh<span>.dev</span>
      </a>
      <nav aria-label="Sections">
        {links.map(([id, label]) => (
          <a key={id} href={`#${id}`}>
            {label}
          </a>
        ))}
      </nav>
      <div className="nav-tools">
        <button
          onClick={() => dispatch(toggleTheme())}
          aria-label="Switch colour mode"
        >
          {theme === "paper" ? "Dark" : "Light"}
        </button>
        <button
          onClick={() => dispatch(togglePalette())}
          className="kbd"
          aria-label="Open command menu"
        >
          Ctrl K
        </button>
      </div>
    </header>
  );
}
export default Nav;