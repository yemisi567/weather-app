import React from "react";
import { useWeather } from "../../hooks/useWeather";

const WeatherHighlights: React.FC = () => {
  const { weatherData } = useWeather();

  if (!weatherData) return null;

  const formatTime = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const highlights = [
    {
      id: 1,
      title: "Sunrise",
      value: formatTime(weatherData.sys.sunrise),
      image: "/assets/images/sunrise.png",
    },
    {
      id: 2,
      title: "Sunset",
      value: formatTime(weatherData.sys.sunset),
      image: "/assets/images/sunset.png",
    },
    {
      id: 3,
      title: "Cloud Cover",
      value: `${weatherData.clouds.all}%`,
      image: "/assets/images/cloud-cover.webp",
    },
    {
      id: 4,
      title: "Humidity",
      value: `${weatherData.main.humidity}%`,
      image: "/assets/images/humidity.webp",
    },
    {
      id: 5,
      title: "Wind Speed",
      value: `${(weatherData.wind.speed * 3.6).toFixed(1)} km/h`,
      image: "/assets/images/windy.webp",
    },
  ];

  return (
    <section className="mt-6">
      <h2 className="text-2xl font-bold mb-4">Today's Highlights</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto max-h-[450px] scrollbar-hide pb-2 justify-items-center lg:justify-items-start">
        {highlights.map((item) => (
          <div key={item.id} className="flex flex-col w-64">
            <img
              src={item.image}
              alt={item.title}
              className="w-[284px] h-[284px] rounded-xl object-cover"
            />
            <p className="text-base font-normal text-primary mt-2 text-left dark:text-white">
              {item.title}
            </p>
            <p className="text-dark-gray text-sm font-normal text-left dark:text-dark-mode-text">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WeatherHighlights;
