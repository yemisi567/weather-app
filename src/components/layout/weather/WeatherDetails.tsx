import React, { useEffect, useState } from "react";
import SearchWithButton from "../search/searchWithButton";
import WeatherMetrics from "./WeatherMetrics";
import WeatherHighlights from "./WeatherHighlights";
import { useWeather } from "../../hooks/useWeather";
import WeatherSkeleton from "./WeatherSkeleton";
import { toast } from "sonner";
import Button from "../../ui/Button";

const WeatherDetails: React.FC = () => {
  const { weatherData, fetchWeather, loading, error } = useWeather();
  const [isCelsius, setIsCelsius] = useState(true);

  useEffect(() => {
    fetchWeather("Paris");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (error) {
      toast.error("Something went wrong. Try again!", { duration: 2000 });
    }
  }, [error]);

  if (loading) return <WeatherSkeleton />;

  const temperature = isCelsius
    ? weatherData?.main?.temp
    : (weatherData?.main?.temp * 9) / 5 + 32;

  return (
    <div className="p-3 rounded-lg">
      <h1 className="font-bold text-[32px]">
        Weather in {weatherData?.name}, {weatherData?.sys?.country}
      </h1>
      <p className="text-dark-gray">
        Today · {new Date().toLocaleTimeString()}
      </p>

      <h2 className="mt-4 font-bold text-lg">Current Conditions</h2>
      <div className="flex flex-col md:flex-row items-center mt-4 md:space-x-6">
        {/* Weather Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={`https://openweathermap.org/img/wn/${weatherData?.weather?.[0]?.icon}@4x.png`}
            alt={weatherData?.weather?.[0]?.description || "Weather icon"}
            className="w-[444px] h-[268px] md:w-52 md:h-52"
          />
        </div>

        {/* Weather Info */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="text-5xl font-black">
            {Math.round(temperature)}°{isCelsius ? "C" : "F"}
          </p>
          <p className="pt-2">{weatherData?.weather?.[0]?.main || "Sunny"}</p>

          {/* Buttons */}
          <div className="mt-4 flex justify-center md:justify-start space-x-4">
            <Button className="bg-light-blue text-base font-bold rounded-lg dark:text-primary">
              Details
            </Button>
            <Button className="text-base font-bold bg-lighter-gray rounded-xl dark:bg-dark-mode-bg dark:text-white">
              Hourly
            </Button>
            <Button
              onClick={() => setIsCelsius(!isCelsius)}
              className="text-base font-bold bg-lighter-gray rounded-xl dark:bg-dark-mode-bg dark:text-white"
            >
              {isCelsius ? "Switch to °F" : "Switch to °C"}
            </Button>
          </div>

          <div className="mt-6 flex justify-center md:justify-start">
            <SearchWithButton width="w-full md:w-[400px]" />
          </div>
        </div>
      </div>

      {/* Weather Metrics */}
      <div className="mt-8">
        <WeatherMetrics weatherData={weatherData} />
      </div>
      {/* Weather Highlights */}
      <div className="mt-8">
        <WeatherHighlights />
      </div>
    </div>
  );
};

export default WeatherDetails;
