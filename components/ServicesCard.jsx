import React from "react";

const ServicesCard = ({ name, message, icon }) => {
  return (
    <div className=" w-72 p-5 bg-gray-800  shadow-xl flex flex-col justify-between  ">
      <div className="w-full h-64 flex flex-col items-center p-5 sm:p-5">
        <div className="p-2 self-center">{icon}</div>
        <h2 className="card-title text-white mb-2">{name}</h2>
        <p className="flex-grow text-left text-white">{message}</p>
      </div>
    </div>
  );
};

export default ServicesCard;
