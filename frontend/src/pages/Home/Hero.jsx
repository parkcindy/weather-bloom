import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import daisyImage from '../../assets/daisy.jpg';    

  function MyMapContainer({ lat, lon }) {
      return (
          <MapContainer center={[lat, lon]} zoom={13} style={{ height: '400px', width: '100%' }}>
              <TileLayer
                  url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                  attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={[lat, lon]}>
                  <Popup>
                      Lokasi: {lat}, {lon}
                  </Popup>
              </Marker>
          </MapContainer>
      );
  }

  export default function Hero() {
      const [method, setMethod] = useState('auto');
      const [city, setCity] = useState('');
      const [weatherData, setWeatherData] = useState(null);
      const [plantRecommendations, setPlantRecommendations] = useState([]);
      
      const [manualTemp, setManualTemp] = useState('');
      const [manualHumidity, setManualHumidity] = useState('');
      const [manualWindSpeed, setManualWindSpeed] = useState('');

      const apiKey = '2aac347ff830d2dadb24eedb25a9f13c';

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
                      lat: data.coord.lat,
                      lon: data.coord.lon,
                  });

                  // Ambil rekomendasi tanaman berdasarkan data cuaca
                  getPlantRecommendations(temp, humidity, windSpeed);
              } else {
                  setWeatherData(null);
              }
          } catch (error) {
              console.error('Error fetching weather data:', error);
              setWeatherData(null);
          }
      };

      const getPlantRecommendations = async (temp, humidity, windSpeed) => {
        try {
          console.log('Mengirim data ke API:', { suhu: temp, kelembaban: humidity, kecepatan_angin: windSpeed });
          const response = await fetch('https://agertechapi.1p6z1rsf99zc.us-south.codeengine.appdomain.cloud/apibuah', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              suhu: temp,
              kelembaban: humidity,
              kecepatan_angin: windSpeed,
            }),
          });
      
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
      
          const data = await response.json();
          console.log('Respons dari API:', data); // Tambahkan log ini
      
          const recommendations = data.recommendations || [];
          
          const filteredRecommendations = recommendations
            .filter(([name, suitability]) => suitability >= 70)
            .map(([name, suitability]) => ({
              name,
              suitability,
            }));
      
          setPlantRecommendations(filteredRecommendations);
        } catch (error) {
          console.error('Error fetching plant recommendations:', error);
          setPlantRecommendations([]);
        }
      };
      
      // Fungsi untuk mengirimkan input manual ke rekomendasi tanaman
      const handleManualSubmit = () => {
          const temp = parseFloat(manualTemp);
          const humidity = parseFloat(manualHumidity);
          const windSpeed = parseFloat(manualWindSpeed);
          
          console.log('Input Manual:', { temp, humidity, windSpeed }); // Debugging log
    
          if (!isNaN(temp) && !isNaN(humidity) && !isNaN(windSpeed)) {
              getPlantRecommendations(temp, humidity, windSpeed);
          } else {
              alert('Mohon masukkan nilai suhu, kelembaban, dan kecepatan angin yang valid.');
          }
      };

      return (
          <>
              <section
                  className="relative bg-cover bg-center text-white justify-center flex flex-col items-left text-center pl-40 h-svh"
                  style={{
                      backgroundImage: `url(${daisyImage})`,
                  }}>
                  <div className="absolute inset-0 bg-black opacity-50"></div>

                  <div className="relative z-10 max-w-3xl px-6 text-left">
                      <h1 className="text-3xl md:text-5xl font-bold mb-4">
                          Selamat Datang <br />di Weather & Bloom
                      </h1>
                      <p className="text-lg md:text-xl mb-8">
                          Weather & Bloom adalah situs web pendeteksi cuaca yang mudah digunakan untuk memberikan rekomendasi tanaman berdasarkan informasi cuaca terkini di kota Anda. Cukup masukkan nama kota, dan kami akan memberikan data cuaca yang akurat dan terkini agar tanaman Anda dapat tetap tumbuh dengan baik walaupun saat cuaca sulit diprediksi.
                      </p>
                  </div>
              </section>

              <div className="weather-container p-8 max-w-7xl mx-auto bg-white rounded-lg shadow-xl mt-8">
                  <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">Pendeteksi Cuaca</h2>

                  <div className="radio-group mb-6 text-center">
                      <label className="mr-4 text-lg inline-block">
                          <input
                              type="radio"
                              name="method"
                              value="auto"
                              checked={method === 'auto'}
                              onClick={() => toggleMethod('auto')}
                              className="mr-2"/>
                          Deteksi Otomatis
                      </label>
                      <label className="text-lg inline-block">
                          <input
                              type="radio"
                              name="method"
                              value="manual"
                              checked={method === 'manual'}
                              onClick={() => toggleMethod('manual')}
                              className="mr-2"/>
                          Masukkan Lokasi Manual
                      </label>
                  </div>

                  {method === 'manual' && (
                      <div id="manual-input" className="mb-6">
                          <p className="mb-2 text-lg text-center">Masukkan nama kota untuk mendapatkan <br/> cuaca dan Rekomendasi Tanaman:</p>
                          <div className="mx-auto w-full max-w-[50%]">
                              <input
                                  type="text"
                                  id="city"
                                  value={city}
                                  onChange={(e) => setCity(e.target.value)}
                                  placeholder="Masukkan nama kota"
                                  className="p-3 border border-gray-300 rounded-lg my-5 w-full text-lg"/>
                              <button
                                  onClick={getWeatherManual}
                                  className="bg-blue-500 text-white p-3 mb-5 rounded-lg w-full hover:bg-blue-600 transition duration-300">
                                  Dapatkan Cuaca
                              </button>
                          </div>

                          <p className="mb-2 text-lg text-center mt-4">Masukkan suhu, kelembaban, dan kecepatan angin secara manual <br/> untuk mendapatkan Rekomendasi Tanaman:</p>
                          <div className="mx-auto w-full max-w-[50%] mb-5">
                              <input
                                  type="number"
                                  value={manualTemp}
                                  onChange={(e) => setManualTemp(e.target.value)}
                                  placeholder="Suhu (°C)"
                                  className="p-3 border border-gray-300 rounded-lg my-2 w-full text-lg"/>
                              <input
                                  type="number"
                                  value={manualHumidity}
                                  onChange={(e) => setManualHumidity(e.target.value)}
                                  placeholder="Kelembaban (%)"
                                  className="p-3 border border-gray-300 rounded-lg my-2 w-full text-lg"/>
                              <input
                                  type="number"
                                  value={manualWindSpeed}
                                  onChange={(e) => setManualWindSpeed(e.target.value)}
                                  placeholder="Kecepatan Angin (m/s)"
                                  className="p-3 border border-gray-300 rounded-lg my-2 w-full text-lg"/>
                              <button
                                  onClick={handleManualSubmit}
                                  className="bg-blue-500 text-white p-3 mb-5 rounded-lg w-full hover:bg-blue-600 transition duration-300">
                                  Dapatkan Rekomendasi Tanaman
                              </button>
                          </div>
                      </div>
                  )}

                  {method === 'auto' && (
                      <div id="auto-input" className="text-center mb-5">
                          <p className="text-lg">Mendapatkan lokasi otomatis...</p>
                          <button
                              onClick={getWeatherAuto}
                              className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-300">
                              Dapatkan Cuaca
                          </button>
                      </div>
                  )}

                  {weatherData && (
                      <div className="weather-details mt-8 text-center">
                          <h3 className="text-3xl font-bold">{weatherData.cityName}</h3>
                          <img src={weatherData.iconUrl} alt="Weather Icon" className="mx-auto my-4" />
                          <p className="text-xl">Suhu: {weatherData.temp} °C</p>
                          <p className="text-xl">Feels Like: {weatherData.feelsLike} °C</p>
                          <p className="text-xl">Deskripsi: {weatherData.description}</p>
                          <p className="text-xl">Kecepatan Angin: {weatherData.windSpeed} m/s</p>
                          <p className="text-xl">Kelembaban: {weatherData.humidity}%</p>
                          <p className="text-xl">Tekanan: {weatherData.pressure} hPa</p>
                          <MyMapContainer lat={weatherData.lat} lon={weatherData.lon} />
                      </div>
                  )}

                  {/* Tampilkan rekomendasi tanaman */}
                  <div className="plant-recommendations mt-8 text-center">
                      <h4 className="text-xl font-bold">Rekomendasi Tanaman:</h4>
                      {plantRecommendations.length > 0 ? (
                          <ul>
                              {plantRecommendations.map((plant, index) => (
                                  <li key={index}>
                                      {plant.name}: {plant.suitability.toFixed(2)}%
                                  </li>
                              ))}
                          </ul>
                      ) : (
                          <p>Tidak ada rekomendasi tanaman saat ini.</p>
                      )}
                  </div>
              </div>
          </>
      );
  }
