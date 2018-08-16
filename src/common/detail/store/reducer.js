import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  article: {
    title: '',
    content: ''
  },
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.SET_DETAIL:
      return state.set('article', fromJS(action.detail));
    default:
      return state;
  }
}

export default reducer;