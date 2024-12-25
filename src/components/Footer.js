import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-6">
      <p>&copy; {new Date().getFullYear()} 赛马娘评分网站. 版权所有.</p>
    </footer>
  );
};

export default Footer;
