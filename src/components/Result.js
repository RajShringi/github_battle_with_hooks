import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Loader from "./Loader";
import Profile from "./Profile";

function Result() {
  const [searchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [winner, setWinner] = useState({});
  const [loser, setLoser] = useState({});

  const fetchUser = async (user) => {
    const res = await fetch(`https://api.github.com/users/${user}`);
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    const player1 = searchParams.get("playerOne");
    const player2 = searchParams.get("playerTwo");
    async function getResult() {
      setIsLoading(true);
      const player1Data = await fetchUser(player1);
      const player2Data = await fetchUser(player2);
      const player1Score = player1Data.followers * 3;
      const player2Score = player2Data.followers * 3;
      if (player1Score > player2Score) {
        setWinner({ profile: player1Data, score: player1Score });
        setLoser({ profile: player2Data, score: player2Score });
      } else {
        setWinner({ profile: player2Data, score: player2Score });
        setLoser({ profile: player1Data, score: player1Score });
      }
      setIsLoading(false);
    }
    getResult();
  }, [searchParams]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="max-w-6xl mx-auto">
      <div className="flex justify-evenly items-center my-4">
        <Profile
          profile={winner.profile}
          score={winner.score}
          result={winner.score === loser.score ? "Tie" : "Winner"}
        />
        <Profile
          profile={loser.profile}
          score={loser.score}
          result={winner.score === loser.score ? "Tie" : "Loser"}
        />
      </div>
      <div className="text-center">
        <Link
          to="/battle"
          className="my-6 bg-green-400 uppercase text-white rounded-md tracking-wider shadow-sm inline-block p-2"
        >
          Reset
        </Link>
      </div>
    </section>
  );
}
export default Result;
