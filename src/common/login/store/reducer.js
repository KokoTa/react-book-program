import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
  loginStatus: false
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    
    case actionTypes.SET_LOGIN:
      return state.set('loginStatus', action.status)

    case actionTypes.LOG_OUT:
      return state.set('loginStatus', action.status)
      
    default:
      return state;
  }
}

export default reducer;