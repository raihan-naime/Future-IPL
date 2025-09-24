import { Suspense, useState } from "react";
import "./App.css";
import AvailablePlayers from "./Components/AvailablePlayers/AvailablePlayers";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import Category from "./Components/Category/Category";
import SelectedPlayers from "./Components/SelectedPlayers/SelectedPlayers";

const fetchPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
};
const playersPromise = fetchPlayers();

function App() {
  const [availableBalance, setAvailableBalance] = useState(50000000);
  const [toggle, setToggle] = useState(true);
  const [selectedPlayer, setSelectedPlayer] = useState([]);
  const [addMorePlayers, setAddMorePlayers] = useState(false)
  // console.log(addMorePlayers);
  
  // console.log(selectedPlayer);
  const handleRemovePlayer = (p) => {
    const newSelectedPlayers = selectedPlayer.filter(
      (player) => player.id !== p.id
    );
    setSelectedPlayer(newSelectedPlayers);
    setAvailableBalance(availableBalance + p.price)
  };
 

  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>
      <Banner></Banner>
      <Category
        selectedPlayer={selectedPlayer}
        toggle={toggle}
        setToggle={setToggle}
      ></Category>
      {toggle ? (
        <Suspense fallback={<h1>Loading...</h1>}>
          <AvailablePlayers
            selectedPlayer={selectedPlayer}
            setSelectedPlayer={setSelectedPlayer}
            availableBalance={availableBalance}
            setAvailableBalance={setAvailableBalance}
            playersPromise={playersPromise}
          ></AvailablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers
        setAddMorePlayers={setAddMorePlayers}
          handleRemovePlayer={handleRemovePlayer}
          selectedPlayer={selectedPlayer}
        ></SelectedPlayers>
      )}

      {
        addMorePlayers? <Suspense fallback={<h1>Loading...</h1>}>
          <AvailablePlayers
            selectedPlayer={selectedPlayer}
            setSelectedPlayer={setSelectedPlayer}
            availableBalance={availableBalance}
            setAvailableBalance={setAvailableBalance}
            playersPromise={playersPromise}
          ></AvailablePlayers>
        </Suspense> : ''
      }
      
    </>
  );
}

export default App;
