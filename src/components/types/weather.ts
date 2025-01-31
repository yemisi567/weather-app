import { ReactNode } from "react";

export interface HighlightItem {
  id: number;
  image: string;
  title: string;
  value: string;
}

export interface WeatherState {
  weatherData: any;
  loading: boolean;
  error: string | null;
}

export interface WeatherState {
    weatherData: any;
    loading: boolean;
    error: string | null;
  }
  
export  interface WeatherProviderProps {
    children: ReactNode;
  }
 
export interface WeatherContextType extends WeatherState {
    fetchWeather: (city: string) => Promise<void>;
  }