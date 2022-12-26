import { NavLink } from "react-router-dom";

function Header({ handleThemeSwitch, theme }) {
  return (
    <section className="max-w-6xl mx-auto">
      <header className="py-4">
        <h1 className="text-center font-bold text-3xl text-green-400 mb-4">
          GITHUB BATTLE
        </h1>
        <div className="flex justify-between items-center">
          <ul className="flex justify-center items-center">
            <li className="mr-4 font-bold text-xl">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-green-400" : "text-gray-700 dark:text-white"
                }
              >
                Popular
              </NavLink>
            </li>
            <li className="font-bold text-xl">
              <NavLink
                to="/battle"
                className={({ isActive }) =>
                  isActive ? "text-green-400" : "text-gray-700 dark:text-white"
                }
              >
                Battle
              </NavLink>
            </li>
          </ul>
          <button onClick={handleThemeSwitch} className="text-3xl">
            {theme === "dark" ? "💡" : "🔦"}
          </button>
        </div>
      </header>
    </section>
  );
}
export default Header;
