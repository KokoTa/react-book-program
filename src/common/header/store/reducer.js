import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

// fromJS 将一个可变对象转换为不可变
const defaultValue = fromJS({
  inputValue: '123',
  focused: false,
  mouseIn: false,
  hot_keys: [],
  page: 0,
  totalPage: 0
})

function reducer(state = defaultValue, action) {

  switch (action.type) {

    case actionTypes.GET_VAL:
      // set 方法返回一个新对象
      return state.set('inputValue', action.val);

    case actionTypes.FOCUS_INPUT:
      return state.set('focused', true);

    case actionTypes.BLUR_INPUT:
      return state.set('focused', false);

    case actionTypes.CHANGE_KEYS:
      // action.keys 不是一个 immutable 类型的数组，因此需要转换，保持数据类型的统一
      return state.merge({
        hot_keys: fromJS(action.keys),
        totalPage: action.totalPage
      });

    case actionTypes.MOUSE_ENTER:
      return state.set('mouseIn', true);

    case actionTypes.MOUSE_LEAVE:
      return state.set('mouseIn', false);

    case actionTypes.PAGE_CHANGE:
      return state.set('page', action.page);

    default:
      return state;
  }

}

export default reducer;