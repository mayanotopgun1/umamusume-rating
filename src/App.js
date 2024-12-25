import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // 导航栏组件
import Home from './pages/Home'; // 主页
import HorseDetails from './pages/HorseDetails'; // 赛马娘详情页
import Calculator from './pages/Calculator'; // 评分器页面
import Ranking from './pages/Ranking'; // 排行榜页面
import Profile from './pages/Profile'; // 个人中心页面
import Login from './pages/Login'; // 登录页面
import './App.css'; // 引入全局样式

function App() {
  return (
    <Router>
      {/* 导航栏 */}
      <Navbar />

      {/* 路由配置 */}
      <div className="app-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<HorseDetails />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
