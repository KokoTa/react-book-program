import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux';
import { actionCreator } from '../store';
import {
  ArticleItem,
  ArticleLeft,
  ArticleRight,
  LoadMore,
} from '../style';

class List extends PureComponent {

  componentDidMount = () => {
    this.props.getList()
  }
  
  render() {
    const list = this.props.articleList.toJS();
    const handleLoad = this.props.handleLoad;
    
    return (
      <Fragment>
        {
          list.map((item, index) => {
            return (
              <ArticleItem key={index}>
                <ArticleLeft>
                  <h1 className='title'>{item.title}</h1>
                  <p className='content'>{item.content}</p>
                </ArticleLeft>
                <ArticleRight>
                  <img className='img' src={item.image} alt={item.title}/>
                </ArticleRight>
              </ArticleItem>
            )
          })
        }
        <LoadMore onClick={handleLoad}>加载更多</LoadMore>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  articleList: state.getIn(['home', 'articleList'])
})

const mapDispatchToProps = (dispatch) => ({
  getList() {
    dispatch(actionCreator.getArticles())
  },
  handleLoad() {
    dispatch(actionCreator.loadMore())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(List);