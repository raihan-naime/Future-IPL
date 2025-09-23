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
  const [availableBalance, setAvailableBalance] = useState(5000000);
  const [toggle, setToggle] = useState(true);

  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>
      <Banner></Banner>
      <Category toggle={toggle} setToggle={setToggle}></Category>
      {toggle ? (
        <Suspense fallback={<h1>Loading...</h1>}>
          <AvailablePlayers
            availableBalance={availableBalance}
            setAvailableBalance={setAvailableBalance}
            playersPromise={playersPromise}
          ></AvailablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers></SelectedPlayers>
      )}
    </>
  );
}

export default App;
