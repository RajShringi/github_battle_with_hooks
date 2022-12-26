import { AiOutlineClose } from "react-icons/ai";

function User({ player, handleClose, user }) {
  return (
    <div className="flex justify-between items-center p-2 bg-gray-100 dark:bg-zinc-700 rounded-md shadow-sm animate-jump">
      <div className="flex items-center">
        <img
          src={player.avatar_url}
          alt={player.login}
          className="w-20 h-20 rounded-full"
        />
        <span className="ml-4 text-xl font-medium">{player.login}</span>
      </div>
      <button
        onClick={() => handleClose(user)}
        className="bg-green-400 rounded-full p-1"
      >
        <AiOutlineClose className="text-2xl text-white" />
      </button>
    </div>
  );
}
export default User;
