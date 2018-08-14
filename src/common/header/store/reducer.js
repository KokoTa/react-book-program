import { GET_VAL } from './actionTypes';
import { fromJS } from 'immutable';

// fromJS 将一个可变对象转换为不可变
const defaultValue = fromJS({
  inputValue: '123'
})

function reducer(state = defaultValue, action) {
  if (action.type === GET_VAL) {
    // set 方法返回一个新对象
    return state.set('inputValue', action.val);
  }
  
  return state;
}

export default reducer;