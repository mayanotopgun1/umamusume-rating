import React from 'react';
import styles from './Profile.module.css'; // 引入模块化样式

const Profile = () => {
  // 模拟用户信息
  const userInfo = {
    username: '赛马娘爱好者',
    email: 'user@example.com',
    joinDate: '2023-01-01',
  };

  // 模拟评分历史
  const scoreHistory = [
    { id: 1, name: '东海帝王', score: 95 },
    { id: 2, name: '目白麦昆', score: 92 },
    { id: 3, name: '魁煌皇帝', score: 98 },
  ];

  return (
    <div className={`${styles.profilePage} min-h-screen flex justify-center items-center`}>
      <div className={styles.container}>
        {/* 用户信息部分 */}
        <div className={styles.userInfo}>
          <h2 className={styles.title}>个人中心</h2>
          <p className={styles.info}>
            <strong>用户名：</strong> {userInfo.username}
          </p>
          <p className={styles.info}>
            <strong>邮箱：</strong> {userInfo.email}
          </p>
          <p className={styles.info}>
            <strong>加入日期：</strong> {userInfo.joinDate}
          </p>
        </div>

        {/* 历史评分部分 */}
        <div className={styles.history}>
          <h3 className={styles.subtitle}>评分历史</h3>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>赛马娘</th>
                <th>评分</th>
              </tr>
            </thead>
            <tbody>
              {scoreHistory.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Profile;
