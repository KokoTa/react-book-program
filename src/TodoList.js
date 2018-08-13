import React, { Component } from 'react';
import 'antd/dist/antd.css';
import store from './store';
import { addItemAction, delItemAction, getListAction } from './store/actionCreator';
import TodoListUI from './TodoListUI';
import './TodoList.css';

// 容器组件 包裹 UI组件，容器组件处理逻辑
class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(this.handleStoreChange);
  }

  handleStoreChange = () => {
    this.setState(store.getState());
  }

  componentDidMount = () => {
    const action = getListAction();
    store.dispatch(action);
  }
  
  // 输入时触发
  handleChange = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }

  // 添加项
  handleClick = () => {
    const action = addItemAction(this.state.inputValue, '');
    store.dispatch(action);
  }

  // 删除项
  deleteItem = (index) => {
    const action = delItemAction(index);
    store.dispatch(action);
  }
  
  render() {
    return (
      <TodoListUI
        handleChange={this.handleChange}
        handleClick={this.handleClick}
        deleteItem={this.deleteItem}
        inputValue={this.state.inputValue}
        list={this.state.list}
      />
    )
  }
}

export default TodoList;
