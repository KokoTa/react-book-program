import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import { actionCreator } from '../store';
import {
  RecommendWrapper,
  RecommendItem
} from '../style';

class Recommend extends PureComponent {

  componentDidMount = () => {
    this.props.getList();
  }
  
  render() {
    const list = this.props.recommendList.toJS();
    
    return (
      <RecommendWrapper>
        {
          list.map((item) => <RecommendItem key={item.imgUrl} imgUrl={item.imgUrl}></RecommendItem>)
        }
      </RecommendWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  recommendList: state.getIn(['home', 'recommendList'])
})

const mapDispatchToProps = (dispatch) => ({
  getList() {
    dispatch(actionCreator.getRecommends())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Recommend);
