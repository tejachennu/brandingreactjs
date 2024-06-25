// src/components/Card.tsx
import React from 'react';

interface CardProps {
  number: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ number, title, description }) => {
  return (
    <div className="p-6 m-1 bg-white shadow-md md:p-8 hover:border hover:border-black">
      <div className="mb-2 ">
        <div className="flex items-center justify-center w-12 h-12 text-white bg-black rounded-full">
          {number}
        </div>
        <h2 className="mt-4 mb-3 text-2xl font-bold ">{title}</h2>
      </div>
      <p className="text-gray-600">{description}</p>
      <button className="px-4 py-2 mt-6 mb-4 text-gray-800 border border-gray-800 ">
        Read More
      </button>
    </div>
  );
};

export default Card;
