import React, { Component, Fragment } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import axios from 'axios';
import TodoItem from './TodoItem';
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

  // 输出项
  getItems = () => {
    return this.state.list.map((item, index) => {
      // 传递方法时记得绑定 this，否则 this 指向子组件
      return (
        // 注意 key 值不要使用 index 否则删除时会导致所有项都重新渲染，so bad= =
        <CSSTransition
          timeout={1000}
          classNames='fade'
          appear={true}
          key={item}>
          <TodoItem item={item} deleteItem={this.deleteItem} index={index}></TodoItem>
        </CSSTransition>
      )
    });
  }

  // 挂载前
  componentWillMount = () => {
    console.log('挂载前触发');
  }
  // 挂载后(建议在此声明周期进行数据请求)
  componentDidMount = () => {
    axios.get('/api/getlist')
      .then((res) => {
        if (res.status === 200) {
          this.setState({
            list: [...res.data]
          });
        }
      })
      .catch((err) => {
        console.log(err);
      })

    console.log('挂载后触发');
  } 
  // 更新前进行确认
  shouldComponentUpdate(nextProps, nextState, nextContext) {
     console.log('更新前确认触发', nextProps, nextState, nextContext);
     // 为 true，更新许可
     return true;
  }
  // 更新前
  componentWillUpdate = (nextProps, nextState) => {
    console.log('更新前触发', nextProps, nextState);
  }
  // 更新后
  componentDidUpdate = (prevProps, prevState) => {
    console.log('更新后触发', prevProps, prevState);
  }
  
  render() {
    console.log('渲染触发');
    return (
      <Fragment>
        <div className='wrap'>
          <label htmlFor='insert'>输入事项：</label>
          <input type='text' id='insert' className='input' value={this.state.inputValue} onChange={this.handleChange} ref={(input) => this.input = input}/>
          <button className='btn' onClick={this.handleClick}>提交</button>
        </div>
        <ul>
          <TransitionGroup component={null}>
            {this.getItems()}
          </TransitionGroup>
        </ul>
      </Fragment>
    )
  }
}

export default TodoList;
