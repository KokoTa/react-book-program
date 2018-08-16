import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import {
  WriterWrapper,
  WriterItem
} from '../style';

class Writer extends PureComponent {
  
  componentDidMount = () => {
    this.props.getList();
  }
  
  render() {
    const list = this.props.writerList.toJS();

    return (
      <WriterWrapper>
        {
          list.map((item) => (
            <WriterItem key={item.nickname}>
              <img className='img' src={item.avatar_source} alt='icon'/>
              <span className='watch'>+ 关注</span>
              <h1 className='name'>{item.nickname}</h1>
              <p className='info'>写了{item.total_wordage}字，有{item.total_likes_count}人喜欢</p>
            </WriterItem>
          ))
        }
      </WriterWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  writerList: state.getIn(['home', 'writerList'])
})

const mapDispatchToProps = (dispatch) => ({
  getList() {
    dispatch(actionCreators.getWriters())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Writer);