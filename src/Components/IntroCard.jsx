import React from "react";

const IntroCard = ({ title }) => {
  return (
    <div className="w-full h-lvh flex items-center justify-center p-4 bg-[url('/images/walpaper.svg')] bg-no-repeat bg-cover bg-center">
      <div className="mx-4 flex flex-col items-center justify-center gap-20 ">
      <div className="flex flex-col items-center justify-center">
    <h1 className="border-b-amber-300 border-b-2 text-2xl font-bold w-max">
          Who We are?
        </h1>
        <div className="w-4/5 text-center p-4">
          <p className="leading-relaxed">
            Lions International District 325 K, under the designation Lions
            International Club, is a recognized and active branch of Lions Clubs
            International established in Nepal, dedicated to community service and
            humanitarian efforts. Through its structured network, Lions District
            325 K serves as a powerful platform for individuals to contribute
            meaningfully to society and make a lasting impact in Nepal and beyond.
          </p>
        </div>
    </div>
    <div className="flex flex-col items-center justify-center">
    <h1 className="border-b-amber-300 border-b-2 text-2xl font-bold w-max">
          Who We are?
        </h1>
        <div className="w-4/5 text-center p-4">
          <p className="leading-relaxed">
            Lions International District 325 K, under the designation Lions
            International Club, is a recognized and active branch of Lions Clubs
            International established in Nepal, dedicated to community service and
            humanitarian efforts. Through its structured network, Lions District
            325 K serves as a powerful platform for individuals to contribute
            meaningfully to society and make a lasting impact in Nepal and beyond.
          </p>
        </div>
    </div>
      </div>
    </div>
  );
};

export default IntroCard;
