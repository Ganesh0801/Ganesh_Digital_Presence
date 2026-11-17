import { createSlice } from "@reduxjs/toolkit";
const github = createSlice({
  name: "github",
  initialState: { repos: [], status: "idle" },
  reducers: {
    fetchRepos: (s) => {
      s.status = "loading";
    },
    fetchSuccess: (s, a) => {
      s.status = "ready";
      s.repos = a.payload;
    },
    fetchFailure: (s) => {
      s.status = "error";
    },
  },
});
export const { fetchRepos, fetchSuccess, fetchFailure } = github.actions;
export default github.reducer;
