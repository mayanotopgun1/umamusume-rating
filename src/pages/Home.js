import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa'; // 引入图标库
import styles from './Home.module.css'; // 引入模块化样式

const horses = [
  { id: 1, name: '东海帝王', rating: 4.8, image: '../images/tokai_teio.jpg' },
  { id: 2, name: '目白麦昆', rating: 4.7, image: '/images/mejiro_mcqueen.jpg' },
  { id: 3, name: '魁煌皇帝', rating: 4.9, image: '/images/symboli_rudolf.jpg' },
];

const Home = () => {
  return (
    <div className={`${styles.background} min-h-screen py-10`}>
      {/* 主容器 */}
      <div className={`${styles.container}`}>
        {/* 顶部横幅 */}
        <div className={styles.banner}>
          <h1 className={styles.title}>赛马娘评分网站</h1>
          <p className={styles.subtitle}>在这里，为您的最爱投下炽热的一票！</p>
        </div>

        {/* 热门排行榜 */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <FaStar className={`${styles.starIcon} text-yellow-400`} />
            <h2 className={styles.sectionTitle}>热门排行榜</h2>
          </div>
          <div className={styles.grid}>
            {horses.map((horse) => (
              <div key={horse.id} className={styles.card}>
                <img src={horse.image} alt={horse.name} className={styles.cardImage} />
                <h3 className={styles.cardTitle}>{horse.name}</h3>
                <p className={styles.cardRating}>评分：{horse.rating} ★</p>
                <Link
                  to={`/details/${horse.id}`}
                  className={styles.detailsButton}
                >
                  查看详情
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* 热门推荐 */}
        <section className={styles.sectionDark}>
          <div className={styles.sectionHeader}>
            <FaStar className={`${styles.starIcon} text-pink-400`} />
            <h2 className={styles.sectionTitle}>热门推荐</h2>
          </div>
          <ul className={styles.list}>
            {horses.map((horse) => (
              <li key={horse.id} className={styles.listItem}>
                <img src={horse.image} alt={horse.name} className={styles.listImage} />
                <div>
                  <h3 className={styles.listTitle}>{horse.name}</h3>
                  <p className={styles.listDescription}>探索更多关于 {horse.name} 的信息</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Home;
