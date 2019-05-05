import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { GET_RANDOM_GIPHY, getRandomGiphySuccess, getRandomGiphyError } from "../actions/random";

const apiKey = 'yJVBLrTv6rWGDsd4AH0R5pctk2J1i3kV';

function* getRandomGiphy() {
  try {
    const randomGiphyResults = yield call(
      axios.get,
      'https://api.giphy.com/v1/gifs/random',
      { params: { apiKey } }
    );

    yield put(getRandomGiphySuccess(randomGiphyResults.data.data));
  } catch (_) {
    yield put(getRandomGiphyError());
  }



}

export default function* () {
  yield takeLatest(GET_RANDOM_GIPHY, getRandomGiphy);
}