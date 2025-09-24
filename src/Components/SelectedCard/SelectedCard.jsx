import React from "react";

const SelectedCard = ({ player, handleRemovePlayer }) => {
  return (
    <div className="flex items-center justify-between border border-gray-300 rounded-xl p-5">
      <div className="flex items-center gap-5">
        <img className="rounded-xl w-25 h-25 object-cover" src={player.image} alt="" />
        <div>
          <h1 className="text-2xl font-semibold">{player.name}</h1>
          <p>{player.batting_style}</p>
        </div>
      </div>
      <div onClick={()=>{handleRemovePlayer(player)}} className="cursor-pointer">❌</div>
    </div>
  );
};

export default SelectedCard;
