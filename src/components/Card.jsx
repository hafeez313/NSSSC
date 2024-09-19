import React from "react";

const Card = ({ imageUrl, title, date, link }) => {
  return (
      <div
        className="w-full h-full bg-center bg-cover flex flex-col justify-end transition-transform duration-500 ease-out hover:scale-110 rounded-sm"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <a href={link} className="flex flex-col pl-2 pb-2">
          <h2 style={{lineHeight: 1}} className="text-[42px] font-[arial] text-white font-bold">{title}</h2>
          <span style={{lineHeight: 1}} className="text-[16px] font-[arial] text-white font-semibold">{date}</span>
        </a>
    </div>
  );
};

export default Card;
