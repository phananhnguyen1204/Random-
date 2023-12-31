import { useEffect } from "react";
import { useState } from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Works from "./components/Works";

function App() {
  const [theme, setTheme] = useState("");

  useEffect(function () {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

  const handleThemeSwitcher = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <>
      <button
        type="button"
        onClick={handleThemeSwitcher}
        className="fixed right-2 top-2 z-10 rounded-md bg-indigo-500 p-1 text-lg"
      >
        {theme === "dark" ? "🌙  " : "☀️"}
      </button>
      <div className="bg:white font-inter dark:bg-slate-900">
        <div className="mx-auto w-11/12 max-w-5xl">
          <HeroSection></HeroSection>
          <Services></Services>
          <Works></Works>
          <About></About>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default App;
// 🚀 👋🌙
