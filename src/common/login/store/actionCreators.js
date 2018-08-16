import * as actionTypes from './actionTypes';
import axios from 'axios';

const loginAction = (status) => ({
  type: actionTypes.SET_LOGIN,
  status
})

const logoutAction = (status) => ({
  type: actionTypes.LOG_OUT,
  status
})

export const loginAccount = (name, psd) => {
  return (dispatch) => {
    axios.get(`/api/login.json?name=${name}&psd=${psd}`)
      .then((res) => {
        const status = res.data.data.status;
        dispatch(loginAction(status));
      })
      .catch((err) => console.log(err))
  }
}

export const logoutAccount = () => {
  return (dispatch) => {
    axios.get(`/api/logout.json`)
      .then((res) => {
        const status = res.data.data.status;
        dispatch(logoutAction(status));
      })
      .catch((err) => console.log(err))
  }
}