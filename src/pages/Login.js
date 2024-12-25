import React, { useState } from 'react';
import styles from './Login.module.css';

const Login = () => {
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // 模拟登录逻辑
    setError('用户名或密码错误！');
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.container}>
        <h1 className={styles.title}>登录</h1>
        {error && <p className={styles.error}>{error}</p>}
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="username" className={styles.label}>用户名</label>
            <input
              type="text"
              id="username"
              className={styles.input}
              placeholder="请输入用户名"
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password" className={styles.label}>密码</label>
            <input
              type="password"
              id="password"
              className={styles.input}
              placeholder="请输入密码"
            />
          </div>
          <button type="submit" className={styles.submitButton}>登录</button>
        </form>
        <div className={styles.extraActions}>
          <a href="/register" className={styles.link}>注册</a>
          <a href="/forgot-password" className={styles.link}>忘记密码？</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
