import React, { useState } from "react";
import playerSymbol from "../../assets/playerSymbol.png";
import countrySymbol from "../../assets/Group(2).png";

const PlayerCard = ({
  player,
  availableBalance,
  setAvailableBalance,
  selectedPlayer,
  setSelectedPlayer,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleBalance = () => {
    if (availableBalance < player.price) {
      return alert("not enough money");
    }
    if(selectedPlayer.length === 6){
      return alert('🚫 You have maximum players')
    }
    setAvailableBalance(availableBalance - player.price);
    setIsSelected(true);
    setSelectedPlayer([...selectedPlayer, player])
  };
  return (
    <div className="card   p-5 border border-gray-300 ">
      <figure>
        <img
          className=" object-cover w-full h-[500px] rounded-xl"
          src={player.image}
          alt="Shoes"
        />
      </figure>
      <div className=" space-y-2 mt-3">
        <div className="flex gap-3 items-center">
          <img className="" src={playerSymbol} alt="" />
          <h2 className="card-title">name</h2>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <img src={countrySymbol} alt="" />
            <p>{player.country}</p>
          </div>
          <button className="btn">{player.playing_role}</button>
        </div>
        <div className="flex justify-between items-center">
          <h2 className="font-bold">Ratting</h2>
          <h2 className="mr-10">{player.rating}</h2>
        </div>
        <div className="flex justify-between items-center">
          <h2 className="font-bold">{player.batting_style}</h2>
          <h2 className="">{player.bowling_style}</h2>
        </div>
        <div className="flex justify-between items-center">
          <h2 className="font-bold">Price: ${player.price}</h2>
          <button
            disabled={isSelected}
            onClick={() => {
              handleBalance();
            }}
            className="btn "
          >
            {isSelected ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
