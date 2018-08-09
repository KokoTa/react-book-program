import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from './TodoList';
// import App from './App';

// 提供 PWA 支持，即 https 下浏览网页，断网后可把网页当作一个 APP 来离线访问
// ./public/manifest.json 用来定义 PWA 情况下，APP 的信息
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TodoList />, document.getElementById('root'));
registerServiceWorker();
