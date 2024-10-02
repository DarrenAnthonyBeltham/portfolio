import React from 'react';
import Profile from '../image/Profile.jpg'; // Update this path to your uploaded image

export default function About() {
  return (
    <div className="bg-[#8BA888] flex items-center justify-center w-full px-4 py-24">
      <div className="flex flex-col md:flex-row items-center w-full max-w-6xl mx-auto space-y-10 md:space-y-0 md:space-x-12">
        <div className="w-full md:w-2/3 text-[#F1EBE1] text-center md:text-left font-spacemono">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Hi, my name is</h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Darren Anthony Beltham,</h2>
          <h2 className="text-2xl md:text-4xl font-bold mb-2">a college student from</h2>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Bina Nusantara University</h2>
          <button className="italic mt-6 bg-[#F1EBE1] text-[#4A6857] font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-[#D7CCC8] transition-colors">
            View More
          </button>
        </div>

        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src={Profile}
            alt="Darren Anthony Beltham"
            className="rounded-xl shadow-lg w-3/4 md:w-2/3 lg:w-96 lg:h-96 object-cover border-2 border-black"
          />
        </div>
      </div>
    </div>
  );
}
