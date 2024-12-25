import React, { useState } from 'react';
import styles from './Calculator.module.css';

const Calculator = () => {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [attributes, setAttributes] = useState({
    speed: '',
    endurance: '',
    power: '',
    willpower: '',
    intelligence: '',
  });
  const [score, setScore] = useState(null); // 存储后端返回的评分
  const [error, setError] = useState(null); // 存储错误信息

  const skills = [
    '速度之星',
    '耐力增强',
    '力量提升',
    '意志力坚定',
    '智力提升',
    '后追达人',
    '节奏掌控',
    '一发必中',
    '天才策略',
  ];

  // 处理属性输入变化
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAttributes((prev) => ({ ...prev, [name]: value }));
  };

  // 处理技能选择（按钮风格替代复选框）
  const toggleSkill = (skill) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  // 提交评分数据到后端
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError(null); // 清除之前的错误
      setScore(null); // 清除之前的评分结果

      const response = await fetch('http://127.0.0.1:5000/api/calculate-score', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          attributes,
          skills: selectedSkills,
        }),
      });

      if (!response.ok) {
        throw new Error('评分计算失败，请稍后重试！');
      }

      const data = await response.json();
      setScore(data.score); // 设置后端返回的评分
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={styles.calculatorPage}>
      <div className={styles.container}>
        <h2 className={styles.title}>评分器</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          {/* 属性输入部分 */}
          <div className={styles.grid}>
            {Object.keys(attributes).map((attr) => (
              <div key={attr} className={styles.inputGroup}>
                <label className={styles.label}>
                  {attr === 'speed'
                    ? '速度'
                    : attr === 'endurance'
                    ? '耐力'
                    : attr === 'power'
                    ? '力量'
                    : attr === 'willpower'
                    ? '意志力'
                    : '智力'}
                </label>
                <input
                  type="number"
                  name={attr}
                  value={attributes[attr]}
                  onChange={handleInputChange}
                  placeholder={`请输入${attr === 'speed'
                    ? '速度'
                    : attr === 'endurance'
                    ? '耐力'
                    : attr === 'power'
                    ? '力量'
                    : attr === 'willpower'
                    ? '意志力'
                    : '智力'}`}
                  className={styles.input}
                />
              </div>
            ))}
          </div>

          {/* 技能卡组部分（大按钮风格） */}
          <div>
            <label className={styles.label}>技能卡组</label>
            <div className={styles.skillsContainer}>
              {skills.map((skill) => (
                <div
                  key={skill}
                  className={`${styles.skillButton} ${
                    selectedSkills.includes(skill) ? styles.active : ''
                  }`}
                  onClick={() => toggleSkill(skill)}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* 提交按钮 */}
          <button type="submit" className={styles.submitButton}>
            计算评分
          </button>
        </form>

        {/* 显示评分结果或错误信息 */}
        {score !== null && (
          <p className={styles.result}>
            评分计算完成！总分为：<strong>{score}</strong>
          </p>
        )}
        {error && <p className={styles.error}>{error}</p>}
      </div>
    </div>
  );
};

export default Calculator;
