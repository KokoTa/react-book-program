import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreator } from '../store';
import {
  TopicWrapper,
  TopicItem,
  TopicMore
} from '../style';

class Topic extends PureComponent {

  componentDidMount = () => {
    this.props.getList();
  }
  
  showTopics = () => {
    const list = this.props.topicList.toJS();
    
    if (list.length) {
      return (
        list.map((item) => (
          <TopicItem key={item.title}>
            <img className='topic-image' src={item.src} alt={item.title}/>
            {item.title}
          </TopicItem>
        ))
      )
    }

    return null;
  }
  
  render() {
    return (
      <TopicWrapper>
        { this.showTopics() }
        <Link to='/'>
          <TopicMore>更多热门专题 &gt;</TopicMore>
        </Link>
      </TopicWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  topicList: state.getIn(['home', 'topicList'])
})

const mapDispatchToProps = (dispatch) => ({
  getList() {
    dispatch(actionCreator.getTopic())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Topic);
