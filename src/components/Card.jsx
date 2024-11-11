import React from "react";

const Card = ({ image = "https://via.placeholder.com/100", text, date, tag }) => {
  return (
    <div className="relative h-full overflow-hidden">
      <img
        className={`object-cover w-full h-full filter ${text && 'brightness-50 group-hover:scale-110 transition-all duration-500'}`}
        src={image}
        alt="Image"
      />
      <div className="absolute  bottom-1 left-2 z-10 text-ellipsis">
				<p className="text-white w-4/5 line-clamp-3">{text}</p>
				<p className="text-white/75 text-xs">{date}</p>
        {tag && <p className="text-white/75 bg-black/60 p-1 inline text-xs">{tag}</p>}
			</div>
    </div>
  );
};

export default Card;
