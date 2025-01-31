import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import WeatherMetrics from "../components/layout/weather/WeatherMetrics";

describe("WeatherMetrics Component", () => {
  const mockWeatherData = {
    main: { humidity: 75 },
    wind: { speed: 10 },
  };

  test("renders Humidity and Wind Speed", () => {
    render(<WeatherMetrics weatherData={mockWeatherData} />);

    // Check if Humidity is displayed
    expect(screen.getByText(/humidity/i)).toBeInTheDocument();
    expect(screen.getByText("75%")).toBeInTheDocument();

    // Check if Wind Speed is displayed
    expect(screen.getByText(/wind speed/i)).toBeInTheDocument();
    expect(screen.getByText("10 km/h")).toBeInTheDocument();
  });

  test("displays default values when weatherData is missing", () => {
    render(<WeatherMetrics weatherData={null} />);

    // Check default humidity value (from component)
    expect(screen.getByText(/humidity/i)).toBeInTheDocument();
    expect(screen.getByText("85%")).toBeInTheDocument();

    // Check default wind speed should be empty
    expect(screen.getByText(/wind speed/i)).toBeInTheDocument();
    expect(screen.getByText("km/h")).toBeInTheDocument();
  });
});
