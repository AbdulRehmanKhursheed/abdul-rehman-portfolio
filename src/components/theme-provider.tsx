"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
  isAutoMode: boolean;
  toggleAutoMode: () => void;
};

interface SunriseSunsetData {
  sunrise: string;
  sunset: string;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [isAutoMode, setIsAutoMode] = useState<boolean>(true);

  // Function to get user's location
  const getUserLocation = (): Promise<{ lat: number; lng: number }> => {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error("Geolocation is not supported"));
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          // Fallback to a default location (New York) if geolocation fails
          console.warn("Geolocation failed, using default location:", error);
          resolve({ lat: 40.7128, lng: -74.0060 });
        }
      );
    });
  };

  // Function to fetch sunrise/sunset times
  const getSunriseSunsetTimes = async (lat: number, lng: number): Promise<SunriseSunsetData> => {
    try {
      const response = await fetch(
        `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&formatted=0`
      );
      const data = await response.json();
      
      if (data.status === "OK") {
        return {
          sunrise: data.results.sunrise,
          sunset: data.results.sunset,
        };
      } else {
        throw new Error("Failed to fetch sunrise/sunset data");
      }
    } catch (error) {
      console.error("Error fetching sunrise/sunset times:", error);
      throw error;
    }
  };

  // Function to determine if it's daytime
  const isDaytime = (sunrise: string, sunset: string): boolean => {
    const now = new Date();
    const sunriseTime = new Date(sunrise);
    const sunsetTime = new Date(sunset);
    
    return now >= sunriseTime && now < sunsetTime;
  };

  // Function to set theme based on time
  const setAutoTheme = async () => {
    try {
      const location = await getUserLocation();
      const { sunrise, sunset } = await getSunriseSunsetTimes(location.lat, location.lng);
      
      const shouldBeLightMode = isDaytime(sunrise, sunset);
      const newTheme: Theme = shouldBeLightMode ? "light" : "dark";
      
      setTheme(newTheme);
      document.documentElement.classList.toggle("dark", newTheme === "dark");
      
      // Store the auto-determined theme
      localStorage.setItem("autoTheme", newTheme);
    } catch (error) {
      console.error("Error setting auto theme:", error);
      // Fallback to light mode if auto detection fails
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const savedAutoMode = localStorage.getItem("isAutoMode");
    const isAuto = savedAutoMode !== null ? JSON.parse(savedAutoMode) : true;
    setIsAutoMode(isAuto);

    if (isAuto) {
      setAutoTheme();
      // Set up interval to check every hour
      const interval = setInterval(setAutoTheme, 60 * 60 * 1000);
      return () => clearInterval(interval);
    } else {
      // Manual mode - use saved theme
      const savedTheme = localStorage.getItem("theme") as Theme;
      if (savedTheme) {
        setTheme(savedTheme);
        document.documentElement.classList.toggle("dark", savedTheme === "dark");
      } else {
        setTheme("light");
        document.documentElement.classList.remove("dark");
      }
    }
  }, [isAutoMode]);

  const toggleTheme = () => {
    if (isAutoMode) {
      // Switch to manual mode and toggle
      setIsAutoMode(false);
      localStorage.setItem("isAutoMode", "false");
    }
    
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const toggleAutoMode = () => {
    const newAutoMode = !isAutoMode;
    setIsAutoMode(newAutoMode);
    localStorage.setItem("isAutoMode", JSON.stringify(newAutoMode));
    
    if (newAutoMode) {
      // Switching to auto mode
      setAutoTheme();
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isAutoMode, toggleAutoMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
