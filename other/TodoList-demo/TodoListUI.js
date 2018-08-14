import React, { Fragment } from 'react';
import { Input, Button, List } from 'antd';

// UI 组件只负责渲染
function TodoListUI(props) {
  return (
    <Fragment>
      <div className='wrap'>
        <label htmlFor='insert'>输入事项：</label>
        <Input
          className='input'
          id='insert'
          value={props.inputValue}
          placeholder='Insert todo info'
          onChange={props.handleChange}/>
        <Button
          className='button'
          type='primary'
          onClick={props.handleClick}>
          提交
        </Button>
      </div>
      <List
        className='list'
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (
          <List.Item onClick={() => props.deleteItem(index)}>{item}</List.Item>
        )}
      />
    </Fragment>
  )
}

export default TodoListUI;