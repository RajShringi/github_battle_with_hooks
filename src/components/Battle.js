import Instruction from "./Instruction";
import Players from "./Players";

function Battle() {
  return (
    <section className="max-w-6xl mx-auto">
      <Instruction />
      <Players />
    </section>
  );
}
export default Battle;
