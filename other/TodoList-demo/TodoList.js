import React, { Component } from 'react';
import { addItemAction, delItemAction, getListAction, updateInputValue } from './store/actionCreator';
import { connect } from 'react-redux';
import TodoListUI from './TodoListUI';
import 'antd/dist/antd.css';
import './TodoList.css';

// 容器组件 包裹 UI组件，容器组件处理逻辑
class TodoList extends Component {

  componentDidMount = () => {
    this.props.getList();
  }
  
  render() {
    const { handleChange, handleClick, deleteItem, inputValue, list } = this.props;

    return (
      <TodoListUI
        handleChange={handleChange}
        handleClick={handleClick}
        // 因为将方法放入了 react-redux 相关对象中，所以用 bind 绑定 this
        deleteItem={deleteItem.bind(this)}
        inputValue={inputValue}
        list={list}
      />
    )
  }
}

// state -> store.state
const mapStateToProps = (state) => ({
  inputValue: state.inputValue, // 和之前的 commit 不一样，inputValue 不再是组件数据，而是全局数据
  list: state.list
})

// dispatch -> store.dispatch
const mapDispatchToProps = (dispatch) => ({
  // input 值更新
  handleChange(e) {
    const action = updateInputValue(e.target.value);
    dispatch(action);
  },
  
  // 添加项
  handleClick() {
    const action = addItemAction();
    dispatch(action);
  },

  // 删除项
  deleteItem(index) {
    console.log(index)
    const action = delItemAction(index);
    dispatch(action);
  },

  // 初始获取数据
  getList() {
    const action = getListAction();
    dispatch(action);
  }
})

// TodoList 若是 无状态组件(只有 props)，那么经过 connect 后返回的其实是 容器组件，因为逻辑都在 mapDispatchToProps 中处理了
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
