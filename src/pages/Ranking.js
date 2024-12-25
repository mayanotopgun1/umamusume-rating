import React from 'react';
import styles from './Ranking.module.css'; // 引入模块化样式

const Ranking = () => {
  // 模拟排行榜数据
  const rankings = [
    { id: 1, name: '东海帝王', score: 95 },
    { id: 2, name: '目白麦昆', score: 92 },
    { id: 3, name: '魁煌皇帝', score: 98 },
    { id: 4, name: '大和赤骥', score: 91 },
    { id: 5, name: '特别周', score: 94 },
  ];

  return (
    <div className={`${styles.rankingPage} min-h-screen flex justify-center items-center`}>
      <div className={styles.container}>
        <h2 className={styles.title}>排行榜</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>排名</th>
              <th>赛马娘</th>
              <th>评分</th>
            </tr>
          </thead>
          <tbody>
            {rankings.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Ranking;
