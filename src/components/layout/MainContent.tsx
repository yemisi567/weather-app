import React from "react";
import Sidebar from "./Sidebar";
import WeatherDetails from "./weather/WeatherDetails";

const WeatherDashboard: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-2">
        <WeatherDetails />
      </div>
    </div>
  );
};

export default WeatherDashboard;
