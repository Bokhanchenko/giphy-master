import axios from 'axios';
import { put, call, select, takeLatest } from 'redux-saga/effects';
import { PERFORM_SEARCH, searchSuccess, searchError} from "../actions/search";
import { SEARCH_LIMIT } from "../core/constants";

// https://developers.giphy.com/dashboard/   Api key -  yJVBLrTv6rWGDsd4AH0R5pctk2J1i3kV
const apiKey = 'yJVBLrTv6rWGDsd4AH0R5pctk2J1i3kV';
const selectSearchState = (state) => state.search;

function* doSearch() {
  const { currentOffset, searchTerm } = yield select(selectSearchState);

  try {
    const params = {
      apiKey,
      q: searchTerm,
      limit: SEARCH_LIMIT,
      offset: currentOffset,
    };
    let endpoint;

    if (!searchTerm) {
      endpoint = 'trending';
    } else {
      endpoint = 'search';
      params.q = searchTerm;
    }

    const query = `https://api.giphy.com/v1/gifs/${endpoint}`;

    const searchResult = yield call(
      axios.get,
      query,
      { params }
    );

    yield put(searchSuccess(searchResult.data.data));
  } catch (e) {
    yield put(searchError());
  }
}

export default function* () {
  yield takeLatest(PERFORM_SEARCH, doSearch);
}