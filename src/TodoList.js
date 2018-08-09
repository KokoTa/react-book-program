import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: []
    };
  }
  
  // 输入时触发
  handleChange = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }

  // 点击时触发
  handleClick = () => {
    // 如果需要用到之前的状态，务必使用函数写法
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }));
  }

  // 删除项
  deleteItem = (index) => {
    this.setState((prevState) => {
      const list = [...prevState.list];
      list.splice(index, 1);
      return { list };
    });
  }

  // 输出项
  getItems = () => {
    return this.state.list.map((item, index) => {
      // 传递方法时记得绑定 this，否则 this 指向子组件
      return <TodoItem item={item} deleteItem={this.deleteItem} index={index} key={index}></TodoItem>
    });
  }
  
  render() {
    return (
      <Fragment>
        <div className='wrap'>
          <label htmlFor='insert'>输入事项：</label>
          <input type='text' id='insert' className='input' value={this.state.inputValue} onChange={this.handleChange}/>
          <button className='btn' onClick={this.handleClick}>提交</button>
        </div>
        <ul>
          {this.getItems()}
        </ul>
      </Fragment>
    )
  }
}

export default TodoList;
