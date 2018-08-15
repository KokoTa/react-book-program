import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

// 如果不进行交互，可以不用 immutable
const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  writerList: []
});

function reducer(state = defaultState, action) {
  switch (action.type) {

    case actionTypes.GET_TOPIC:
      return state.set('topicList', fromJS(action.topicList));

    case actionTypes.GET_ARTICLE:
      return state.set('articleList', fromJS(action.articleList));

    case actionTypes.GET_RECOM:
      return state.set('recommendList', fromJS(action.recommendList));

    case actionTypes.GET_WRITER:
      return state.set('writerList', fromJS(action.writerList));

    case actionTypes.LOAD_MORE:
      return state.set('articleList', state.get('articleList').concat(fromJS(action.loadedList)));

    default:
      return state;

  }
}

export default reducer;