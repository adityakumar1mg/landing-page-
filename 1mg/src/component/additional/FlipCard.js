import React from "react";

const FlipCard = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-2">Card Flip with Text</h1>
      <h3 className="text-lg mb-6 text-gray-600">Hover over the image below:</h3>

      <div className="w-[300px] h-[300px] [perspective:1000px]">
        <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
          {/* Front Side */}
          <div className="absolute w-full h-full bg-gray-300 text-black backface-hidden">
            <img
              src="img_avatar.png"
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Back Side */}
          <div className="absolute w-full h-full bg-blue-700 text-white [transform:rotateY(180deg)] backface-hidden flex flex-col items-center justify-center px-4">
            <h1 className="text-2xl font-bold">John Doe</h1>
            <p className="text-lg">Architect & Engineer</p>
            <p className="text-sm mt-2">We love that guy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
