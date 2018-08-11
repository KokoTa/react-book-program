import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isShow: true
    }
  }

  // 接受参数前(生成组件时不触发)，用于避免重复渲染
  componentWillReceiveProps = (prevProps, prevState) => {
    if (this.props.item === prevProps.item) return false;
    console.log('子组件接受参数前触发', prevProps, prevState);
  }
  // 销毁后触发
  componentWillUnmount = () => {
    console.log('子组件销毁后触发');
  }
  
  
  render() {
    const { item, index, deleteItem, prefix } = this.props;

    return (
      <li
        onClick={() => deleteItem(index)}
        dangerouslySetInnerHTML={{__html: (prefix + ' - ' + item)}}>
      </li>
    )
  }
}

// 类型检测
TodoItem.propTypes = {
  item: PropTypes.string,
  deleteItem: PropTypes.func,
  index: PropTypes.number,
  prefix: PropTypes.string.isRequired,
}

TodoItem.defaultProps = {
  prefix: 'prefix'
}

export default TodoItem;