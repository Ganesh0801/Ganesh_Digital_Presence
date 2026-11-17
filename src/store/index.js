import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import ui from "./uiSlice";
import contact from "./contactSlice";
import github from "./githubSlice";
import rootSaga from "./sagas";

const saga = createSagaMiddleware();
const store = configureStore({
  reducer: { ui, contact, github },
  middleware: (gdm) => gdm({ thunk: false }).concat(saga),
});
saga.run(rootSaga);
export default store;
