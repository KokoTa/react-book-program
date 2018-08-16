import { takeEvery, put } from 'redux-saga/effects';
import { GET_LIST } from './actionTypes';
import { setInitListData } from './actionCreators';
import axios from 'axios';

// 可以获得 GET_LIST 的 action 作为参数
function* fetchList(prevAction) {
  try {
    const res = yield axios.get('http://localhost:3000/api/getList');
    const action = setInitListData(res.data);
    yield put(action);
  } catch(e) {
    console.log(e);
  }
}

// 监听 action 类型
function* mySaga() {
  yield takeEvery(GET_LIST, fetchList);
}

export default mySaga;