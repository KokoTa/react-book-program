import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './store';
import TodoList from './TodoList';

// 提供 PWA 支持，即 https 下浏览网页，断网后可把网页当作一个 APP 来离线访问
// ./public/manifest.json 用来定义 PWA 情况下，APP 的信息
import registerServiceWorker from './registerServiceWorker';

const App = (
  <Provider store={store}>
    <TodoList></TodoList>
  </Provider>
)

ReactDOM.render(App, document.getElementById('root'));
registerServiceWorker();
