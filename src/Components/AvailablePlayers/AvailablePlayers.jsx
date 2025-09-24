import React, { use } from "react";
import PlayerCard from "../PlayerCard/PlayerCard";

const AvailablePlayers = ({
  playersPromise,
  availableBalance,
  setAvailableBalance,
  selectedPlayer,
  setSelectedPlayer,
}) => {
  const players = use(playersPromise);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5 gap-3">
        {players.map((player) => (
          <PlayerCard
            selectedPlayer={selectedPlayer}
            setSelectedPlayer={setSelectedPlayer}
            availableBalance={availableBalance}
            setAvailableBalance={setAvailableBalance}
            key={player.id}
            player={player}
          ></PlayerCard>
        ))}
      </div>
    </>
  );
};

export default AvailablePlayers;
