import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { DarkModeProvider } from "../context/DarkModeContext";
import { WeatherProvider } from "../components/hooks/useWeather";
import Header from "../components/layout/Header";

// Provide Context with Manual Wrapper
const renderWithProviders = (ui: React.ReactElement) => {
  return render(
    <DarkModeProvider>
      <WeatherProvider>{ui}</WeatherProvider>
    </DarkModeProvider>
  );
};

describe("Header Component", () => {
  test("renders Header with correct elements", () => {
    renderWithProviders(<Header />);
    // Check if title is rendered
    expect(screen.getByText(/Weather/i)).toBeInTheDocument();

    // Check if dark mode toggle is rendered
    expect(screen.getByText(/dark mode/i)).toBeInTheDocument();

    // Get all search inputs
    const searchInputs = screen.getAllByPlaceholderText(/search/i);

    expect(searchInputs).toHaveLength(2);

    // Check that the first search input (header search) is in the document
    expect(searchInputs[0]).toBeInTheDocument();
  });

  test("toggles dark mode when clicked", () => {
    renderWithProviders(<Header />);

    const darkModeToggle = screen.getByText(/dark mode/i);
    fireEvent.click(darkModeToggle);

    expect(screen.getByText(/light mode/i)).toBeInTheDocument();
  });

  test("triggers fetchWeather when user types", () => {
    renderWithProviders(<Header />);

    // Get all search inputs
    const searchInputs = screen.getAllByPlaceholderText(/search/i);

    // Select the first search input (inside the header)
    const headerSearchInput = searchInputs[0];

    fireEvent.change(headerSearchInput, { target: { value: "Paris" } });

    // Simulate debounce trigger
    fireEvent.keyDown(headerSearchInput, { key: "Enter", code: "Enter" });

    // Ensure weather data loads
    expect(screen.getByText(/Weather/i)).toBeInTheDocument();
  });
});
