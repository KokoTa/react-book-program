import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store';
import Header from './common/header';
import Home from './common/home';
// import Detail from './common/detail';
import DetailLoadable from './common/detail/loadable'
import Login from './common/login';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Fragment>
            <Header></Header>
            <Route path='/' exact component={Home}></Route>
            <Route path='/detail/:id' exact component={DetailLoadable}></Route>
            <Route path='/login' exact component={Login}></Route>
          </Fragment>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;