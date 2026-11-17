import { all, call, put, takeLatest } from "redux-saga/effects";
import { sendRequest, sendSuccess, sendFailure } from "./contactSlice";
import { fetchRepos, fetchSuccess, fetchFailure } from "./githubSlice";
import { profile } from "../data/profile";

function* sendContact({ payload }) {
  try {
    const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT;
    if (!endpoint) {
      const body = encodeURIComponent(
        `${payload.message}\n\n${payload.name} (${payload.email})`,
      );
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(payload.topic)}&body=${body}`;
      yield put(sendSuccess());
      return;
    }
    const res = yield call(fetch, endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });
    if (!res.ok)
      throw new Error(
        "The message was not delivered. Try again or email me directly.",
      );
    yield put(sendSuccess());
  } catch (e) {
    yield put(sendFailure(e.message));
  }
}

function* loadRepos() {
  try {
    const res = yield call(
      fetch,
      `https://api.github.com/users/${profile.github}/repos?sort=pushed&per_page=8`,
    );
    if (!res.ok) throw new Error("github");
    const data = yield call([res, res.json]);
    yield put(fetchSuccess(data.filter((r) => !r.fork).slice(0, 6)));
  } catch {
    yield put(fetchFailure());
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(sendRequest.type, sendContact),
    takeLatest(fetchRepos.type, loadRepos),
  ]);
}
