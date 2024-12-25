import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css'; // 如果你有样式文件

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
