import { useEffect, useState } from "react";
import Loader from "./Loader";
import Repos from "./Repos";

const languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];

function Popular() {
  const [activeLang, setActiveLang] = useState("All");
  const [repos, setRepos] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  //Fetch Repos
  const fetchRepos = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(
        `https://api.github.com/search/repositories?q=stars:%3E1+language:${activeLang}&sort=stars&order=desc&type=Repositories`
      );
      if (!res.ok) {
        throw new Error("error");
      }
      const data = await res.json();
      setRepos({ ...repos, [activeLang]: data.items });
    } catch (error) {
      setError(true);
    }
    setIsLoading(false);
  };

  //UseEffect
  useEffect(() => {
    if (!repos[activeLang]) {
      fetchRepos();
    } else {
      setIsLoading(false);
    }
  }, [activeLang, repos]);

  const handleClick = (lang) => {
    setIsLoading(true);
    setActiveLang(lang);
  };

  const langList = languages.map((lang) => (
    <li
      key={lang}
      className={`font-semibold cursor-pointer text-lg ${
        activeLang === lang ? "text-green-400" : ""
      }`}
      onClick={() => handleClick(lang)}
    >
      {lang}
    </li>
  ));

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return (
      <h1 className="text-center text-3xl text-red-400">
        There was an error while fetching Data....
      </h1>
    );
  }

  return (
    <section className="max-w-6xl mx-auto">
      <div>
        <ul className="flex justify-center items-center space-x-4 mb-4">
          {langList}
        </ul>
        <Repos repos={repos[activeLang]} />
      </div>
    </section>
  );
}
export default Popular;
