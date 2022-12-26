import { BiCurrentLocation, BiGitRepoForked } from "react-icons/bi";
import { FaUser, FaUsers, FaUserFriends, FaSuitcase } from "react-icons/fa";

function Profile({ profile, score, result }) {
  return (
    <div className="text-center basis-1/4 bg-gray-100 dark:bg-zinc-700 p-8 rounded-md shadow-sm">
      <h2 className="text-2xl font-semibold">{result}</h2>
      <div className="my-4">
        <img
          src={profile.avatar_url}
          alt={profile.login}
          className="w-40 h-40 mx-auto rounded-md"
        />
      </div>
      <p className="font-bold mb-6">Score: {score}</p>
      <a
        href={profile.html_url}
        className="text-xl font-extrabold text-green-400 mb-8"
      >
        {profile.login}
      </a>
      {profile.name && (
        <div className="flex items-center justify-start my-2">
          <FaUser className="text-rose-400 text-2xl mr-4" />
          <p>{profile.name}</p>
        </div>
      )}
      {profile.location && (
        <div className="flex items-center justify-start my-2">
          <BiCurrentLocation className="text-violet-400 text-2xl mr-4" />
          <p>{profile.location}</p>
        </div>
      )}
      {profile.company && (
        <div className="flex items-center justify-start my-2">
          <FaSuitcase className="text-yellow-600 text-2xl mr-4" />
          <p>{profile.company}</p>
        </div>
      )}
      <div className="flex items-center justify-start my-2">
        <FaUsers className="text-sky-400 text-2xl mr-4" />
        <p>{profile.followers} followers</p>
      </div>
      <div className="flex items-center justify-start my-2">
        <FaUserFriends className="text-green-400 text-2xl mr-4" />
        <p>{profile.following} following</p>
      </div>
      <div className="flex items-center justify-start my-2">
        <BiGitRepoForked className="text-zinc-800 text-2xl mr-4" />
        <p>{profile.public_repos} repository</p>
      </div>
    </div>
  );
}
export default Profile;
