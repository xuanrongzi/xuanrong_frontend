'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface WeatherStation {
  id: string;
  name: string;
  location: string;
  temperature: number;
  humidity: number;
  status: 'online' | 'offline' | 'maintenance';
  lastUpdate: string;
}

const mockWeatherStations: WeatherStation[] = [
  {
    id: '1',
    name: 'Beijing Central',
    location: 'Beijing, China',
    temperature: 22.5,
    humidity: 65,
    status: 'online',
    lastUpdate: '2025-08-26 10:30:00'
  },
  {
    id: '2',
    name: 'Shanghai Harbor',
    location: 'Shanghai, China',
    temperature: 28.3,
    humidity: 78,
    status: 'online',
    lastUpdate: '2025-08-26 10:29:00'
  },
  {
    id: '3',
    name: 'Guangzhou Airport',
    location: 'Guangzhou, China',
    temperature: 31.2,
    humidity: 82,
    status: 'maintenance',
    lastUpdate: '2025-08-26 09:15:00'
  },
  {
    id: '4',
    name: 'Shenzhen Tech',
    location: 'Shenzhen, China',
    temperature: 29.8,
    humidity: 71,
    status: 'online',
    lastUpdate: '2025-08-26 10:28:00'
  },
  {
    id: '5',
    name: 'Chengdu West',
    location: 'Chengdu, China',
    temperature: 25.1,
    humidity: 68,
    status: 'offline',
    lastUpdate: '2025-08-26 08:45:00'
  },
  {
    id: '6',
    name: 'Hangzhou Lake',
    location: 'Hangzhou, China',
    temperature: 26.7,
    humidity: 73,
    status: 'online',
    lastUpdate: '2025-08-26 10:31:00'
  }
];

export default function WeatherStationsPage() {
  const [stations, setStations] = useState<WeatherStation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setStations(mockWeatherStations);
      setLoading(false);
    }, 1000);
  }, []);

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

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading weather stations...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Weather Stations</h1>
          <p className="mt-2 text-gray-600">Monitor weather data from stations across the network</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stations.map((station) => (
            <div
              key={station.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-6"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{station.name}</h3>
                  <p className="text-sm text-gray-500">{station.location}</p>
                </div>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                    station.status
                  )}`}
                >
                  {station.status}
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Temperature</span>
                  <span className="text-lg font-semibold text-blue-600">
                    {station.temperature}°C
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Humidity</span>
                  <span className="text-lg font-semibold text-green-600">
                    {station.humidity}%
                  </span>
                </div>

                <div className="pt-3 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">Last Update</span>
                    <span className="text-xs text-gray-500">{station.lastUpdate}</span>
                  </div>
                </div>
              </div>

              <Link
                href={`/weather/${station.id}`}
                className="block w-full mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200 text-center"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>

        {stations.length === 0 && !loading && (
          <div className="text-center py-12">
            <p className="text-gray-500">No weather stations found.</p>
          </div>
        )}
      </div>
    </div>
  );
}