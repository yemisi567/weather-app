import { act, renderHook } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useWeather, WeatherProvider } from "../components/hooks/useWeather";

test("fetches weather data", async () => {
  const { result } = renderHook(() => useWeather(), {
    wrapper: WeatherProvider,
  });

  // Use 'await act()' to wait for fetchWeather to complete
  await act(async () => {
    await result.current.fetchWeather("London");
  });

  expect(result.current.weatherData).not.toBeNull();
});

test("handles API errors correctly", async () => {
  const { result } = renderHook(() => useWeather(), {
    wrapper: WeatherProvider,
  });

  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: false,
      json: () =>
        Promise.resolve({
          message: "City not found. Please try another city.",
        }),
    })
  ) as jest.Mock;

  await act(async () => {
    await result.current.fetchWeather("InvalidCity");
  });

  expect(result.current.weatherData).toBeNull(); // No data should be set
  expect(result.current.error).toBe("City not found. Please try another city."); // Error should be set
});

test("sets loading state while fetching", async () => {
  const { result } = renderHook(() => useWeather(), {
    wrapper: WeatherProvider,
  });

  global.fetch = jest.fn(
    () =>
      new Promise((resolve) =>
        setTimeout(
          () =>
            resolve({
              ok: true,
              json: () => Promise.resolve({ main: { temp: 15 } }),
            }),
          1000
        )
      )
  ) as jest.Mock;

  act(() => {
    result.current.fetchWeather("New York");
  });

  expect(result.current.loading).toBe(true); // Should be loading initially

  await act(async () => {
    await result.current.fetchWeather("New York");
  });

  expect(result.current.loading).toBe(false); // Should stop loading after fetch
});
