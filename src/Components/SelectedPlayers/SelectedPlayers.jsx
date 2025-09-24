import React from 'react';
import SelectedCard from '../SelectedCard/SelectedCard';

const SelectedPlayers = ({selectedPlayer, handleRemovePlayer, setAddMorePlayers}) => {

    return (
        <div className='space-y-3'>
            {
                selectedPlayer.map((player, i) => <SelectedCard key={i} player={player} handleRemovePlayer={handleRemovePlayer}></SelectedCard>)
            }
            <button onClick={()=>{setAddMorePlayers(true)}} className='border border-gray-300 py-2 px-5 rounded  cursor-pointer font-bold'>Add More Player</button>
        </div>
    );
};

export default SelectedPlayers;