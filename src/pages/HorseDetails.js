import React from 'react';
import RatingStars from '../components/RatingStars';
import CommentBox from '../components/CommentBox';

const HorseDetails = () => {
  const horse = {
    name: "Tokai Teio",
    bio: "A cheerful and energetic horse girl who is always aiming for victory.",
    image: "/images/tokai_teio.jpg",
    rating: 4.8,
    comments: [
      { id: 1, user: "User1", content: "Amazing performance!", likes: 12 },
      { id: 2, user: "User2", content: "A true champion!", likes: 8 },
    ],
  };

  return (
    <div className="container mx-auto p-6">
      <img src={horse.image} alt={horse.name} className="w-full h-64 object-cover rounded-md mb-6" />
      <h1 className="text-3xl font-bold">{horse.name}</h1>
      <p className="text-gray-600 mt-4">{horse.bio}</p>
      <RatingStars rating={horse.rating} />
      <CommentBox comments={horse.comments} />
    </div>
  );
};

export default HorseDetails;
