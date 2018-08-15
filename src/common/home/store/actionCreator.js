import * as actionTypes from './actionTypes';
import axios from 'axios';

const topicAction = (data) => ({
  type: actionTypes.GET_TOPIC,
  topicList: data
})

const articleAction = (data) => ({
  type: actionTypes.GET_ARTICLE,
  articleList: data
})

const recommendAction = (data) => ({
  type: actionTypes.GET_RECOM,
  recommendList: data
})

const writerAction = (data) => ({
  type: actionTypes.GET_WRITER,
  writerList: data
})

const loadAction = (data) => ({
  type: actionTypes.LOAD_MORE,
  loadedList: data
})

export const getTopic = () => {
  return (dispatch) => {
    axios.get('/api/topics.json')
      .then((res) => {
        const data = res.data.data;
        dispatch(topicAction(data));
      })
      .catch((err) => console.log(err))
  }
}

export const getArticles = () => {
  return (dispatch) => {
    axios.get('/api/articles.json')
      .then((res) => {
        const data = res.data.data;
        dispatch(articleAction(data));
      })
      .catch((err) => console.log(err))
  }
}

export const getRecommends = () => {
  return (dispatch) => {
    axios.get('/api/recommends.json')
      .then((res) => {
        const data = res.data.data;
        dispatch(recommendAction(data));
      })
      .catch((err) => console.log(err))
  }
}

export const getWriters = () => {
  return (dispatch) => {
    axios.get('/api/writers.json')
      .then((res) => {
        const data = res.data.data;
        dispatch(writerAction(data));
      })
      .catch((err) => console.log(err))
  }
}

export const loadMore = () => {
  return (dispatch) => {
    axios.get('/api/articles.json')
      .then((res) => {
        const data = res.data.data;
        dispatch(loadAction(data));
      })
      .catch((err) => console.log(err))
  }
}

