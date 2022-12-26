import { HiUsers } from "react-icons/hi2";
import { FaFighterJet, FaTrophy } from "react-icons/fa";
function Instruction() {
  return (
    <section>
      <h2 className="text-center my-4 text-3xl">Instruction</h2>

      <div className="flex justify-between items-center">
        <div className="p-4 basis-1/4 bg-gray-100 dark:bg-zinc-700 rounded-md text-center shadow-sm">
          <p className="text-2xl">Enter two Github users</p>
          <HiUsers className="mx-auto my-4 text-9xl text-yellow-500" />
        </div>

        <div className="p-4 basis-1/4 bg-gray-100 dark:bg-zinc-700 rounded-md text-center shadow-sm">
          <p className="text-2xl">Battle</p>
          <FaFighterJet className="mx-auto my-4 text-9xl text-gray-500" />
        </div>

        <div className="p-4 basis-1/4 bg-gray-100 dark:bg-zinc-700 rounded-md text-center shadow-sm">
          <p className="text-2xl">See the winner</p>
          <FaTrophy className="mx-auto my-4 text-9xl text-yellow-300" />
        </div>
      </div>
    </section>
  );
}
export default Instruction;
