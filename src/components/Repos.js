import { FaUser, FaStar } from "react-icons/fa";
import { AiOutlineFork, AiOutlineWarning } from "react-icons/ai";
function Repos({ repos }) {
  return (
    <ul className="grid grid-cols-4 gap-4">
      {repos.map((repo, index) => {
        const {
          id,
          full_name,
          owner,
          html_url,
          stargazers_count,
          forks_count,
          open_issues_count,
          homepage,
        } = repo;
        return (
          <li
            key={id}
            className="bg-gray-100 rounded-md p-3 dark:bg-zinc-700 animate-jump"
          >
            <div>
              <h2 className="text-3xl font-light text-center">#{index + 1}</h2>
            </div>
            <div className="p-2">
              <img
                src={owner.avatar_url}
                alt={full_name}
                className="w-32 h-32 mx-auto rounded-md"
              />
            </div>
            <div>
              <h3 className="text-center font-extrabold text-2xl text-green-400 break-all min-h-14 my-2">
                <a href={html_url}>{full_name.split("/")[0]}</a>
              </h3>
              {/* Name */}
              <p className="flex justify-start items-center space-x-2 mb-2">
                <span className="text-yellow-400 text-2xl">
                  <FaUser />
                </span>
                <span>
                  <a
                    className="font-bold text-xl break-all inline-block"
                    href={homepage}
                  >
                    {full_name.split("/")[0]}
                  </a>
                </span>
              </p>

              {/* Stars */}
              <p className="flex justify-start items-center space-x-2 mb-2">
                <span className="text-yellow-300 text-2xl">
                  <FaStar />
                </span>
                <span className="font-medium text-lg">
                  {stargazers_count} stars
                </span>
              </p>

              {/* Forks */}
              <p className="flex justify-start items-center space-x-2 mb-2">
                <span className="text-sky-300 text-2xl">
                  <AiOutlineFork />
                </span>
                <span className="font-medium text-lg">{forks_count} forks</span>
              </p>

              {/* issues */}
              <p className="flex justify-start items-center space-x-2 mb-2">
                <span className="text-rose-300 text-2xl">
                  <AiOutlineWarning />
                </span>
                <span className="font-medium text-lg">
                  {open_issues_count} issues
                </span>
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default Repos;
