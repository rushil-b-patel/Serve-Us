import React from 'react';
import SubscribeLetter from './SubscribeLetter';
// import { useAuth } from '../context/AuthContext';

export default function Home() {

  // const {currentUser} = useAuth();

  return (
    <div className="bg-white py-10 min-h-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-black mb-8">
          Welcome to Urban Services
        </h2>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-center">
        <div className="relative mr-4">
        <input
            type="text"
            name="service"
            id="service"
            className="w-64 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 focus:outline-none text-sm"
            placeholder="Search through Location..."
          />
        </div>

        <div className="flex">
          <input
            type="text"
            name="service"
            id="service"
            className="w-64 px-4 py-2 border border-gray-300 rounded-l-md shadow-sm focus:ring-blue-500 focus:border-blue-500 focus:outline-none text-sm"
            placeholder="Search for services..."
          />
          <button
            type="button"
            className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:ring-blue-500 focus:ring-offset-blue-200 focus:outline-none"
          >
            Search
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SubscribeLetter />
      </div>
    </div>
  );
}
