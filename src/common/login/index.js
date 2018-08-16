import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { Redirect } from 'react-router-dom';
import {
  LoginWrapper,
  Input,
  Button,
} from './style';

class Login extends PureComponent {
  render() {
    const { handleLogin, loginStatus } = this.props;
    
    if (!loginStatus) {
      return (
        <LoginWrapper>
          <Input placeholder='输入用户名' innerRef={(input) => this.name = input }></Input>
          <Input placeholder='输入密码' type='password' innerRef={(input) => this.password = input}></Input>
          <Button onClick={() => handleLogin(this.name, this.password)}>登录</Button>
        </LoginWrapper>
      )
    } else {
      return <Redirect to='/'></Redirect>
    }
  }
}

const mapState = (state) => ({
  loginStatus: state.getIn(['login', 'loginStatus'])
})

const mapDispatch = (dispatch) => ({
  handleLogin(name, password) {
    dispatch(actionCreators.loginAccount(name.value, password.value))
  }
})

export default connect(mapState, mapDispatch)(Login);