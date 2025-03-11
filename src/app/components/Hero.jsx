import React from "react";

const Hero = () => {
  return (
    <div
      className="bg-gray-900 text-white bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://w.wallhaven.cc/full/v9/wallhaven-v9m99l.png') ",
      }}
    >
      <div
        id="home"
        className="min-h-screen flex flex-col justify-center items-center text-center px-6"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold">
            Hi, I'm <span className="text-light-blue-300">Noptanadon</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Chula Engineering student. Christmas is coming! The hottest gift
            is my new book, “SAVE AMERICA.” No other book captures our Movement,
            our Campaign, and our FUTURE. Get your copy today!
          </p>
        </div>
        <a
          href="#projects"
          className="mt-6 px-6 py-3 font-bold bg-blue-500 text-white rounded-lg hover:bg-light-blue-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500"
        >
          View My Project
        </a>
      </div>
    </div>
  );
};

export default Hero;
