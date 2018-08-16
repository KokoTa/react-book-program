import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import { actionCreators } from './store';
import {
  DetailWrapper,
  DetaliHeader,
  DetailAuthor,
  AuthorInfo,
  DetailContent
} from './style';

class Detail extends PureComponent {
  render() {
    const detail = this.props.detail.toJS();
    
    return (
      <DetailWrapper>
        <DetaliHeader>{detail.title}</DetaliHeader>
        <DetailAuthor>
          <img className='avatar' alt='' src='//upload.jianshu.io/users/upload_avatars/1053507/214885dd-4c60-4601-95fb-5f812b9f465c.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96'/>
          <AuthorInfo>
            <span className='author'>林白少</span>
            <span className='watch'>+关注</span>
            <p className='info'>2018.06.27 23:33* 字数 3836 阅读 2085评论 19喜欢 43</p>
          </AuthorInfo>
        </DetailAuthor>
        <DetailContent dangerouslySetInnerHTML={{ __html: detail.content }}></DetailContent>
      </DetailWrapper>
    )
  }

  componentDidMount = () => {
    const id = this.props.match.params.id;
    this.props.getDetail(id);
  }
  
}

const mapStateToProps = (state) => ({
  detail: state.getIn(['detail', 'article'])
})

const mapDispatchToProps = (dispatch) => ({
  getDetail(id) {
    dispatch(actionCreators.getDetail(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Detail);