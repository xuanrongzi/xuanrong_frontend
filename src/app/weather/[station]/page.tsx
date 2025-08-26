'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

interface WeatherStation {
  id: string;
  name: string;
  location: string;
  temperature: number;
  humidity: number;
  pressure: number;
  windSpeed: number;
  windDirection: string;
  visibility: number;
  uvIndex: number;
  status: 'online' | 'offline' | 'maintenance';
  lastUpdate: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  elevation: number;
  installed: string;
}

const mockWeatherStations: { [key: string]: WeatherStation } = {
  '1': {
    id: '1',
    name: 'Beijing Central',
    location: 'Beijing, China',
    temperature: 22.5,
    humidity: 65,
    pressure: 1013.2,
    windSpeed: 12.3,
    windDirection: 'NE',
    visibility: 15.2,
    uvIndex: 6,
    status: 'online',
    lastUpdate: '2025-08-26 10:30:00',
    coordinates: { lat: 39.9042, lng: 116.4074 },
    elevation: 43,
    installed: '2020-03-15'
  },
  '2': {
    id: '2',
    name: 'Shanghai Harbor',
    location: 'Shanghai, China',
    temperature: 28.3,
    humidity: 78,
    pressure: 1009.8,
    windSpeed: 8.7,
    windDirection: 'SE',
    visibility: 12.5,
    uvIndex: 8,
    status: 'online',
    lastUpdate: '2025-08-26 10:29:00',
    coordinates: { lat: 31.2304, lng: 121.4737 },
    elevation: 4,
    installed: '2019-11-22'
  },
  '3': {
    id: '3',
    name: 'Guangzhou Airport',
    location: 'Guangzhou, China',
    temperature: 31.2,
    humidity: 82,
    pressure: 1005.1,
    windSpeed: 6.2,
    windDirection: 'SW',
    visibility: 8.3,
    uvIndex: 9,
    status: 'maintenance',
    lastUpdate: '2025-08-26 09:15:00',
    coordinates: { lat: 23.1291, lng: 113.2644 },
    elevation: 11,
    installed: '2021-07-08'
  },
  '4': {
    id: '4',
    name: 'Shenzhen Tech',
    location: 'Shenzhen, China',
    temperature: 29.8,
    humidity: 71,
    pressure: 1007.6,
    windSpeed: 9.8,
    windDirection: 'S',
    visibility: 14.1,
    uvIndex: 7,
    status: 'online',
    lastUpdate: '2025-08-26 10:28:00',
    coordinates: { lat: 22.3193, lng: 114.1694 },
    elevation: 8,
    installed: '2020-12-03'
  },
  '5': {
    id: '5',
    name: 'Chengdu West',
    location: 'Chengdu, China',
    temperature: 25.1,
    humidity: 68,
    pressure: 952.3,
    windSpeed: 4.5,
    windDirection: 'W',
    visibility: 11.7,
    uvIndex: 5,
    status: 'offline',
    lastUpdate: '2025-08-26 08:45:00',
    coordinates: { lat: 30.5728, lng: 104.0668 },
    elevation: 505,
    installed: '2018-05-14'
  },
  '6': {
    id: '6',
    name: 'Hangzhou Lake',
    location: 'Hangzhou, China',
    temperature: 26.7,
    humidity: 73,
    pressure: 1011.4,
    windSpeed: 7.3,
    windDirection: 'NW',
    visibility: 13.8,
    uvIndex: 6,
    status: 'online',
    lastUpdate: '2025-08-26 10:31:00',
    coordinates: { lat: 30.2741, lng: 120.1551 },
    elevation: 19,
    installed: '2019-09-27'
  }
};

export default function WeatherStationDetailPage() {
  const params = useParams();
  const stationId = params.station as string;
  const [station, setStation] = useState<WeatherStation | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const foundStation = mockWeatherStations[stationId];
      setStation(foundStation || null);
      setLoading(false);
    }, 500);
  }, [stationId]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'offline':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'maintenance':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getUVLevel = (uvIndex: number) => {
    if (uvIndex <= 2) return { level: 'Low', color: 'text-green-600' };
    if (uvIndex <= 5) return { level: 'Moderate', color: 'text-yellow-600' };
    if (uvIndex <= 7) return { level: 'High', color: 'text-orange-600' };
    if (uvIndex <= 10) return { level: 'Very High', color: 'text-red-600' };
    return { level: 'Extreme', color: 'text-purple-600' };
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading station details...</p>
        </div>
      </div>
    );
  }

  if (!station) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Station Not Found</h1>
          <p className="text-gray-600 mb-6">The weather station you're looking for doesn't exist.</p>
          <Link
            href="/weather"
            className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            ← Back to Weather Stations
          </Link>
        </div>
      </div>
    );
  }

  const uvInfo = getUVLevel(station.uvIndex);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link
            href="/weather"
            className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-4"
          >
            ← Back to Weather Stations
          </Link>
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{station.name}</h1>
              <p className="text-gray-600">{station.location}</p>
            </div>
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(
                station.status
              )}`}
            >
              {station.status}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Current Conditions */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Current Conditions</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600">{station.temperature}°C</div>
                  <div className="text-sm text-gray-600">Temperature</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600">{station.humidity}%</div>
                  <div className="text-sm text-gray-600">Humidity</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600">{station.pressure}</div>
                  <div className="text-sm text-gray-600">Pressure (hPa)</div>
                </div>
                <div className="text-center p-4 bg-cyan-50 rounded-lg">
                  <div className="text-3xl font-bold text-cyan-600">{station.windSpeed}</div>
                  <div className="text-sm text-gray-600">Wind Speed (km/h)</div>
                </div>
                <div className="text-center p-4 bg-indigo-50 rounded-lg">
                  <div className="text-3xl font-bold text-indigo-600">{station.windDirection}</div>
                  <div className="text-sm text-gray-600">Wind Direction</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-gray-600">{station.visibility}</div>
                  <div className="text-sm text-gray-600">Visibility (km)</div>
                </div>
              </div>
            </div>

            {/* UV Index */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">UV Index</h2>
              <div className="flex items-center space-x-4">
                <div className="text-4xl font-bold text-gray-900">{station.uvIndex}</div>
                <div>
                  <div className={`text-lg font-semibold ${uvInfo.color}`}>{uvInfo.level}</div>
                  <div className="text-sm text-gray-600">UV Level</div>
                </div>
              </div>
            </div>
          </div>

          {/* Station Information */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Station Info</h2>
              <div className="space-y-3">
                <div>
                  <div className="text-sm text-gray-600">Station ID</div>
                  <div className="font-medium">{station.id}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Coordinates</div>
                  <div className="font-medium">
                    {station.coordinates.lat.toFixed(4)}, {station.coordinates.lng.toFixed(4)}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Elevation</div>
                  <div className="font-medium">{station.elevation}m</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Installed</div>
                  <div className="font-medium">{station.installed}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Last Update</div>
                  <div className="font-medium">{station.lastUpdate}</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Actions</h2>
              <div className="space-y-3">
                <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  View Historical Data
                </button>
                <button className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                  Export Data
                </button>
                <button className="w-full px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
                  Configure Alerts
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}