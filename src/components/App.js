import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Battle from "./Battle";
import Header from "./Header";
import Popular from "./Popular";
import Result from "./Result";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    theme === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="h-screen overflow-y-scroll text-gray-700 dark:text-white dark:bg-zinc-800">
      <Header handleThemeSwitch={handleThemeSwitch} theme={theme} />
      <Routes>
        <Route path="/" element={<Popular />} />
        <Route path="/battle" element={<Battle />} />
        <Route path="/battle/result" element={<Result />} />
      </Routes>
    </div>
  );
}
export default App;
