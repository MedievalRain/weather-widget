export type City = {
  city: string;
  latitude: number;
  longitude: number;
  country: string;
  timezone: string;
};

export type WwCode = {
  code: number;
  text: string;
  file: string;
};

export type WeatherResponse = {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_weather: {
    temperature: number;
    windspeed: number;
    winddirection: number;
    weathercode: number;
    is_day: number;
    time: string;
  };
};
export type WeatherData = {
  temperature: number | undefined;
  description: string;
  src: string;
};
