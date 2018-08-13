import React, { Component, Fragment } from 'react';
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css';
import store from './store';
import { addItemAction, delItemAction } from './store/actionCreator';
import './TodoList.css';

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(this.handleStoreChange);
  }

  handleStoreChange = () => {
    this.setState(store.getState());
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
