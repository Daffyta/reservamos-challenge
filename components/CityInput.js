import React from 'react';

const CityInput = ({ city, onCityChange, onAddCity, onClear }) => {
  return (
    <div className="flex items-center justify-center mt-8 space-x-4">
      <input 
        type="text" 
        value={city} 
        onChange={onCityChange} 
        placeholder="Enter city name" 
        className="border border-gray-300 rounded p-2 w-64"
      />
      <button 
        onClick={onAddCity} 
        className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600"
      >
        Add City
      </button>
      <button 
        onClick={onClear} 
        className="bg-red-500 text-white rounded px-4 py-2 hover:bg-red-600"
      >
        Clear
      </button>
    </div>
  );
};

export default CityInput;