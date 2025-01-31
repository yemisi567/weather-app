import React from "react";
import { Humidity } from "../../Images/Humidity";
import { Wind } from "../../Images/Wind";

const WeatherMetrics: React.FC<{ weatherData: any }> = ({ weatherData }) => {
  return (
    <section className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Humidity */}
      <div className="bg-white dark:bg-gray-800 border p-6 rounded-lg flex flex-col space-y-2 shadow-sm">
        <Humidity />
        <p className="text-primary font-bold text-base dark:text-white">
          Humidity
        </p>
        <p className="text-dark-gray text-sm font-normal ">
          {weatherData?.main?.humidity || "85"}%
        </p>
      </div>

      {/* Wind */}
      <div className="bg-white dark:bg-gray-800 border p-6 rounded-lg flex flex-col space-y-2 shadow-sm">
        <Wind />
        <p className="text-primary font-bold text-base dark:text-white">
          Wind Speed
        </p>
        <p className="text-dark-gray text-sm font-normal">
          {weatherData?.wind?.speed} km/h
        </p>
      </div>
    </section>
  );
};

export default WeatherMetrics;
