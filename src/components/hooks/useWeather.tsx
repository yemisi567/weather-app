import { createContext, useContext, useReducer } from "react";
import {
  WeatherContextType,
  WeatherProviderProps,
  WeatherState,
} from "../types/weather";

// Define initial state
const initialState: WeatherState = {
  weatherData: null,
  loading: false,
  error: null,
};

// Reducer function
const weatherReducer = (state: WeatherState, action: any): WeatherState => {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true, error: null };

    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        weatherData: action.payload,
        error: null,
      };

    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

// Create Weather Context
const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

// Provider Component
export const WeatherProvider: React.FC<WeatherProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(weatherReducer, initialState);

  const fetchWeather = async (city: string) => {
    if (!city.trim()) return; // Prevent empty searches

    const API_KEY = process.env.REACT_APP_WEATHER_API;
    if (!API_KEY) {
      console.error("Missing API Key! Check your .env file.");
      return;
    }

    dispatch({ type: "FETCH_START" });

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      const data = await response.json();

      if (response.ok) {
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } else {
        dispatch({
          type: "FETCH_ERROR",
          payload: "City not found. Please try another city.",
        });
      }
    } catch (err) {
      dispatch({
        type: "FETCH_ERROR",
        payload: "Failed to fetch weather data.",
      });
    }
  };

  return (
    <WeatherContext.Provider value={{ ...state, fetchWeather }}>
      {children}
    </WeatherContext.Provider>
  );
};

// Custom Hook to Use Weather Context
export const useWeather = () => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error("useWeather must be used within a WeatherProvider");
  }
  return context;
};
