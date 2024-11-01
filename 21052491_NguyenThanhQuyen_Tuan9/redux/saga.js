import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchTodos } from './apiSlice';

// Saga function to fetch todos
function* fetchTodosSaga() {
  try {
    const response = yield call(fetch, 'https://671a3dbbacf9aa94f6a9ccd8.mockapi.io/job'); // Cập nhật URL tại đây
    const data = yield response.json();
    yield put(fetchTodos.fulfilled(data)); // Dispatch action với dữ liệu đã fetch
  } catch (error) {
    console.error('Failed to fetch todos:', error);
  }
}

// Watcher saga
function* watchFetchTodos() {
  yield takeEvery(fetchTodos.pending, fetchTodosSaga);
}

// Root saga
export default function* rootSaga() {
  yield watchFetchTodos();
}
