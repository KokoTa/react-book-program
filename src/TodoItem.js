import React, { Component } from 'react';

class TodoItem extends Component {
  
  render() {
    const { item, index, deleteItem } = this.props;

    return (
      <li
        onClick={() => deleteItem(index)}
        dangerouslySetInnerHTML={{__html: item}}>
      </li>
    )
  }
}

export default TodoItem;