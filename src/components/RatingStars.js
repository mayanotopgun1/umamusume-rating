import React from 'react';

const RatingStars = ({ rating }) => {
  return (
    <div className="flex items-center mt-4">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={`h-6 w-6 inline-block ${
            i < Math.round(rating) ? "text-yellow-400" : "text-gray-300"
          }`}
        >
          ★
        </span>
      ))}
      <span className="ml-2 text-gray-600">{rating.toFixed(1)}</span>
    </div>
  );
};

export default RatingStars;
