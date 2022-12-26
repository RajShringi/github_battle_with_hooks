function PlayerForm({ player, setPlayer, handleSubmit, error, user }) {
  return (
    <form onSubmit={(e) => handleSubmit(e, user)}>
      <label>Player One</label>
      <div className="flex items-center ">
        <div className="w-[70%]">
          <input
            type="text"
            placeholder="github username"
            className="p-2 border shadow-inner rounded-md w-full outline-none block dark:bg-zinc-600"
            value={player}
            onChange={(e) => setPlayer(e.target.value)}
          />
        </div>
        <button
          disabled={!player ? true : false}
          className={`py-2 px-2 ml-4 rounded-md uppercase tracking-wider inline-block 
         disabled:bg-gray-50 disabled:text-gray-400 disabled:dark:bg-zinc-300 disabled:dark:text-gray-600 bg-green-400 text-white`}
        >
          Submit
        </button>
      </div>
      <span className="text-red-400 font-bold text-sm my-1">{error}</span>
    </form>
  );
}
export default PlayerForm;
