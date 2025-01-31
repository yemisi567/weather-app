import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Sidebar from "../components/layout/Sidebar";
import "@testing-library/jest-dom";
import { WeatherProvider } from "../components/hooks/useWeather";

describe("Sidebar Component", () => {
  test("renders Sidebar with Add to Favourites button", () => {
    render(
      <WeatherProvider>
        <Sidebar />
      </WeatherProvider>
    );
    const button = screen.getByRole("button", { name: /add to favourites/i });
    expect(button).toBeInTheDocument();
  });

  test("opens the modal when clicking 'Add to favourites'", () => {
    render(
      <WeatherProvider>
        <Sidebar />
      </WeatherProvider>
    );

    // Click "Add to favourites" button
    fireEvent.click(screen.getByRole("button", { name: /add to favourites/i }));

    // Ensure modal appears
    expect(screen.getByText(/Add City to Favorites/i)).toBeInTheDocument();
  });

  test("adds a new favorite city when user types in the modal", () => {
    render(
      <WeatherProvider>
        <Sidebar />
      </WeatherProvider>
    );

    fireEvent.click(screen.getByRole("button", { name: /add to favourites/i }));

    const input = screen.getByPlaceholderText(/Enter city name/i);
    fireEvent.change(input, { target: { value: "Paris" } });

    fireEvent.click(screen.getByText(/Save City/i));

    // Ensure "Paris" is now a favorite
    expect(screen.getByText(/Paris/i)).toBeInTheDocument();
  });
});
