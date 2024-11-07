import React, { useState } from 'react';
import { horizontalSpace, spaceBetweenSection } from '../../styles/style';
import daisyImage from '../../assets/daisy.jpg';

export default function Hero() {
  const [method, setMethod] = useState('auto');
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [plantRecommendations, setPlantRecommendations] = useState('');

  const apiKey = '2aac347ff830d2dadb24eedb25a9f13c';

  // Fungsi untuk mengganti metode pencarian
  const toggleMethod = (method) => {
    setMethod(method);
  };

  // Mengambil data cuaca manual berdasarkan kota
  const getWeatherManual = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetchWeather(url);
  };

  // Mengambil data cuaca otomatis berdasarkan lokasi pengguna
  const getWeatherAuto = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
        fetchWeather(url);
      });
    } else {
      alert('Geolocation tidak didukung oleh browser ini.');
    }
  };

  // Mengambil data cuaca dari API
  const fetchWeather = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.cod === 200) {
        const cityName = data.name;
        const temp = data.main.temp;
        const feelsLike = data.main.feels_like;
        const description = data.weather[0].description;
        const windSpeed = data.wind.speed;
        const windDir = data.wind.deg;
        const pressure = data.main.pressure;
        const humidity = data.main.humidity;
        const dewPoint = (temp - ((100 - humidity) / 5)).toFixed(2);
        const iconCode = data.weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;

        setWeatherData({
          cityName,
          temp,
          feelsLike,
          description,
          windSpeed,
          windDir,
          pressure,
          humidity,
          dewPoint,
          iconUrl,
        });

        showPlantRecommendations(temp, humidity, description);
      } else {
        setWeatherData(null); 
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setWeatherData(null); 
    }
  };

  // Fungsi untuk menampilkan rekomendasi tanaman berdasarkan cuaca
  const showPlantRecommendations = (temp, humidity, condition) => {
    let recommendations = '';

    if (temp >= 25 && condition.includes('clear')) {
      recommendations = 'Rekomendasi Tanaman: Tomat, Cabai, Bawang Merah';
    } else if (humidity >= 80 && condition.includes('rain')) {
      recommendations = 'Rekomendasi Tanaman: Padi, Jahe, Terong';
    } else {
      recommendations = 'Rekomendasi Tanaman: Mint, Selada, Kangkung';
    }

    setPlantRecommendations(recommendations);
  };

  return (
    <>
      <section
        className="relative bg-cover bg-center text-white flex flex-col items-center text-center py-20 px-4"
        style={{
          backgroundImage: `url(${daisyImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative z-10 max-w-3xl px-6 text-left">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Selamat Datang di Weather & Bloomm
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Weather & Bloom adalah situs web pendeteksi cuaca yang mudah digunakan untuk memberikan rekomendasi tanaman berdasarkan informasi cuaca terkini di kota Anda. Cukup masukkan nama kota, dan kami akan memberikan data cuaca yang akurat dan terkini agar tanaman Anda dapat tetap tumbuh dengan baik walaupun saat cuaca sulit diprediksi.
          </p>
          <button className="bg-secondary-green hover:bg-secondary-green-dark text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
            Pelajari Lebih Lanjut
          </button>
        </div>
      </section>

      <div className="weather-container p-8 max-w-2xl mx-auto bg-white rounded-lg shadow-xl mt-8">
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Weather Detection</h2>

        <div className="radio-group mb-6 text-center">
          <label className="mr-4 text-lg inline-block">
            <input
              type="radio"
              name="method"
              value="auto"
              checked={method === 'auto'}
              onClick={() => toggleMethod('auto')}
              className="mr-2"
            />
            Deteksi Otomatis
          </label>
          <label className="text-lg inline-block">
            <input
              type="radio"
              name="method"
              value="manual"
              checked={method === 'manual'}
              onClick={() => toggleMethod('manual')}
              className="mr-2"
            />
            Masukkan Lokasi Manual
          </label>
        </div>

        {method === 'manual' && (
          <div id="manual-input" className="mb-6">
            <p className="mb-2 text-lg text-center">Masukkan nama kota untuk mendapatkan cuaca terkini:</p>
            <input
              type="text"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Masukkan nama kota"
              className="p-3 border border-gray-300 rounded-lg mb-4 w-full text-lg"
            />
            <button
              onClick={getWeatherManual}
              className="bg-blue-500 text-white p-3 rounded-lg w-full hover:bg-blue-600 transition duration-300"
            >
              Dapatkan Cuaca
            </button>
          </div>
        )}

        {method === 'auto' && (
          <button
            id="auto-detect"
            onClick={getWeatherAuto}
            className="bg-blue-500 text-white p-3 rounded-lg w-full hover:bg-blue-600 transition duration-300"
          >
            Deteksi Cuaca Otomatis
          </button>
        )}

        {weatherData && (
          <div className="weather-result mt-6 text-center">
            <p className="text-lg font-semibold">City: {weatherData.cityName}</p>
            <img
              id="weather-icon"
              src={weatherData.iconUrl}
              alt="Weather Icon"
              className="w-16 h-16 mt-4 mb-6 mx-auto"
            />
            <p className="text-lg">
              {weatherData.temp}°C (Feels like {weatherData.feelsLike}°C)
            </p>
            <p className="text-lg">Conditions: {weatherData.description}</p>
            <p className="text-lg">Wind: {weatherData.windSpeed} m/s, Direction: {weatherData.windDir}°</p>
            <p className="text-lg">Pressure: {weatherData.pressure} hPa</p>
            <p className="text-lg">Humidity: {weatherData.humidity}%</p>
            <p className="text-lg">Dew Point: {weatherData.dewPoint}°C</p>
          </div>
        )}
      </div>

      <div
        id="plant-recommendations"
        className="p-8 bg-gray-100 mt-8 rounded-lg text-center"
      >
        {plantRecommendations && (
          <>
            <h3 className="text-2xl font-semibold mb-4">Rekomendasi Tanaman</h3>
            <p>{plantRecommendations}</p>
          </>
        )}
      </div>
    </>
  );
}
