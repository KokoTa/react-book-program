import React, { Component, Fragment } from 'react';
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css';
import './TodoList.css';

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: ['a', 'b', 'c', 'd', 'e', 'f']
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
    }, () => console.log('删除完毕'));
  }
  
  render() {
    return (
      <Fragment>
        <div className='wrap'>
          <label htmlFor='insert'>输入事项：</label>
          <Input
            className='input'
            id='insert'
            value={this.state.inputValue}
            placeholder='Insert todo info'
            onChange={this.handleChange}
            ref={(input) => this.input = input}/>
          <Button
            className='button'
            type='primary'
            onClick={this.handleClick}>
            提交
          </Button>
        </div>
        <List
          className='list'
          header={<div>Header</div>}
          footer={<div>Footer</div>}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (<List.Item onClick={() => this.deleteItem(index)}>{item}</List.Item>)}
        />
      </Fragment>
    )
  }
}

export default TodoList;
