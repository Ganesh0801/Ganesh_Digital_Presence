import { createSlice } from "@reduxjs/toolkit";
const ui = createSlice({
  name: "ui",
  initialState: { palette: false, theme: "paper", topic: "Job opportunity" },
  reducers: {
    togglePalette: (s) => {
      s.palette = !s.palette;
    },
    closePalette: (s) => {
      s.palette = false;
    },
    toggleTheme: (s) => {
      s.theme = s.theme === "paper" ? "midnight" : "paper";
    },
    setTopic: (s, a) => {
      s.topic = a.payload;
    },
  },
});
export const { togglePalette, closePalette, toggleTheme, setTopic } =
  ui.actions;
export default ui.reducer;
