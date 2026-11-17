import { createSlice } from "@reduxjs/toolkit";
const contact = createSlice({
  name: "contact",
  initialState: { status: "idle", error: null },
  reducers: {
    sendRequest: (s) => {
      s.status = "loading";
      s.error = null;
    },
    sendSuccess: (s) => {
      s.status = "success";
    },
    sendFailure: (s, a) => {
      s.status = "error";
      s.error = a.payload;
    },
    resetContact: (s) => {
      s.status = "idle";
      s.error = null;
    },
  },
});
export const { sendRequest, sendSuccess, sendFailure, resetContact } =
  contact.actions;
export default contact.reducer;
