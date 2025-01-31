import React from "react";
import Header from "./components/layout/Header";
import WeatherDashboard from "./components/layout/MainContent";
import { DarkModeProvider } from "./context/DarkModeContext";
import { WeatherProvider } from "./components/hooks/useWeather";
import { Toaster } from "sonner";

const App: React.FC = () => {
  return (
    <DarkModeProvider>
      <Toaster position="top-right" richColors />
      <WeatherProvider>
        {" "}
        <div className="min-h-screen w-full bg-white dark:bg-primary dark:text-white transition-colors duration-300">
          <Header />
          <WeatherDashboard />
        </div>
      </WeatherProvider>
    </DarkModeProvider>
  );
};

export default App;
