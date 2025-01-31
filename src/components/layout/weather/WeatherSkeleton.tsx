import React from "react";

const WeatherSkeleton: React.FC = () => {
  return (
    <div className="p-3 rounded-lg animate-pulse">
      {/* Title */}
      <div className="h-6 w-2/3 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>
      <div className="h-4 w-1/3 bg-gray-300 dark:bg-gray-700 rounded mb-4"></div>

      {/* Weather Section */}
      <div className="flex flex-col md:flex-row items-center mt-4 md:space-x-6">
        {/* Image Skeleton */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-[444px] h-[268px] md:w-52 md:h-52 bg-gray-300 dark:bg-gray-700 rounded"></div>
        </div>

        {/* Info Skeleton */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div className="h-10 w-24 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>
          <div className="h-6 w-16 bg-gray-300 dark:bg-gray-700 rounded mb-4"></div>

          {/* Buttons */}
          <div className="mt-4 flex justify-center md:justify-start space-x-4">
            <div className="h-10 w-24 bg-gray-300 dark:bg-gray-700 rounded"></div>
            <div className="h-10 w-24 bg-gray-300 dark:bg-gray-700 rounded"></div>
          </div>

          {/* Temperature Toggle Skeleton */}
          <div className="h-10 w-36 bg-gray-300 dark:bg-gray-700 rounded mt-4"></div>

          {/* Search Bar Skeleton */}
          <div className="mt-6 flex justify-center md:justify-start">
            <div className="h-10 w-[400px] bg-gray-300 dark:bg-gray-700 rounded"></div>
          </div>
        </div>
      </div>

      {/* Weather Metrics Skeleton */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="h-20 bg-gray-300 dark:bg-gray-700 rounded"></div>
        <div className="h-20 bg-gray-300 dark:bg-gray-700 rounded"></div>
      </div>

      {/* Weather Highlights Skeleton */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="h-48 bg-gray-300 dark:bg-gray-700 rounded"></div>
        <div className="h-48 bg-gray-300 dark:bg-gray-700 rounded"></div>
        <div className="h-48 bg-gray-300 dark:bg-gray-700 rounded"></div>
      </div>
    </div>
  );
};

export default WeatherSkeleton;
