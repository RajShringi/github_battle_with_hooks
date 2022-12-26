import { useState } from "react";
import { Link } from "react-router-dom";
import PlayerForm from "./PlayerForm";

import User from "./User";

function Players() {
  const [playerOne, setPlayerOne] = useState("");
  const [playerOneError, setPlayerOneError] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");
  const [playerTwoError, setPlayerTwoError] = useState("");
  const [playerOneInfo, setPlayerOneInfo] = useState({});
  const [playerTwoInfo, setPlayerTwoInfo] = useState({});

  const fetchUser = async (user) => {
    const res = await fetch(`https://api.github.com/users/${user}`);
    const data = await res.json();
    return data;
  };

  const handleSubmit = async (e, player) => {
    e.preventDefault();
    let data;
    if (player === "playerOne") {
      data = await fetchUser(playerOne);
      if (data.message) {
        setPlayerOneError(data.message);
        return;
      }
      setPlayerOneInfo(data);
    }

    if (player === "playerTwo") {
      data = await fetchUser(playerTwo);
      if (data.message) {
        setPlayerTwoError(data.message);
        return;
      }
      setPlayerTwoInfo(data);
    }

    setPlayerOneError("");
    setPlayerTwoError("");
  };

  const handleClose = (player) => {
    if (player === "playerOne") {
      setPlayerOne("");
      setPlayerOneInfo({});
      return;
    }
    if (player === "playerTwo") {
      setPlayerTwo("");
      setPlayerTwoInfo({});
      return;
    }
  };

  return (
    <section>
      <h2 className="text-center my-4 text-3xl">Players</h2>
      <div className="grid grid-cols-2 gap-8">
        {/* Player One */}
        {Object.keys(playerOneInfo).length === 0 ? (
          <PlayerForm
            player={playerOne}
            setPlayer={setPlayerOne}
            handleSubmit={handleSubmit}
            error={playerOneError}
            user="playerOne"
          />
        ) : (
          <User
            player={playerOneInfo}
            handleClose={handleClose}
            user="playerOne"
          />
        )}
        {/* Player Two */}
        {Object.keys(playerTwoInfo).length === 0 ? (
          <PlayerForm
            player={playerTwo}
            setPlayer={setPlayerTwo}
            handleSubmit={handleSubmit}
            error={playerTwoError}
            user="playerTwo"
          />
        ) : (
          <User
            player={playerTwoInfo}
            handleClose={handleClose}
            user="playerTwo"
          />
        )}
      </div>

      {Object.keys(playerOneInfo).length !== 0 &&
      Object.keys(playerTwoInfo).length !== 0 ? (
        <div className="text-center">
          <Link
            to={`/battle/result?playerOne=${playerOne}&playerTwo=${playerTwo}`}
            className="my-6 bg-green-400 uppercase text-white rounded-md tracking-wider shadow-sm inline-block p-2"
          >
            Battle
          </Link>
        </div>
      ) : (
        ""
      )}
    </section>
  );
}
export default Players;
