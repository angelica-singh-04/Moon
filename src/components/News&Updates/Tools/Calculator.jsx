import React, { useState } from 'react';

const AstronomyCalculators = () => {
  const [earthWeight, setEarthWeight] = useState('');
  const [marsDistance, setMarsDistance] = useState(78.3);

  const calculateWeight = (gravity) => {
    if (!earthWeight) return '0 kg';
    return `${(parseFloat(earthWeight) * gravity).toFixed(2)} kg`;
  };

  const planetGravities = {
    Mercury: 0.38,
    Venus: 0.91,
    Earth: 1.0,
    Mars: 0.38,
    Jupiter: 2.34,
    Saturn: 1.06,
    Uranus: 0.92,
    Neptune: 1.19,
  };

  const distances = {
    Moon: '384.4 thousand km',
    Sun: '149.6 million km',
    Mars: '78.3 million km',
    Jupiter: '628.7 million km',
    Saturn: '1.4 billion km',
    'Proxima Centauri': '39900.0 billion km',
  };

  return (
    <div className="bg-black min-h-screen text-white p-8">
      <div className="max-w-7xl mx-auto">
        <p className="text-neutral-400 my-6 hover:text-white" href="reset">
          Go back to tools
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-neutral-900/70 p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-2">
              Weight on Other Planets
            </h2>
            {/* <p className="text-gray-400 mb-4">
              Enter your Earth weight to see how much you'd weigh on other planets
            </p> */}
            <div className="mb-4 mt-6">
              <label htmlFor="weight" className="block text-neutral-600 mb-1">
                Your weight on Earth (kg)
              </label>
              <input
                type="number"
                id="weight"
                value={earthWeight}
                onChange={(e) => setEarthWeight(e.target.value)}
                className="w-full bg-neutral-900 text-white p-4 rounded-lg border-[0.4px] border-neutral-800 focus:outline-none focus:ring-[0.5px] focus:ring-yellow-500"
                placeholder="0.5"
              />
            </div>
            <p className='text-yellow-500 py-4'>Your weight across the solar system:</p>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(planetGravities).map(([planet, gravity]) => (
                <div key={planet} className="bg-neutral-900 p-4 rounded-lg flex items-center justify-between">
                  <span className="font-medium">{planet}</span>
                  <span>{calculateWeight(gravity)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Distance from Earth */}
          <div className="bg-neutral-900/70 p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Distance from Earth</h2>
            <p className="text-neutral-500 mb-4">
              Explore the vast distances between Earth and celestial objects
            </p>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(distances).map(([celestialObject, distance]) => (
                <div key={celestialObject}
                  className={`p-4 rounded-lg cursor-pointer transition-colors duration-200 ${
                    celestialObject === 'Mars' ? 'bg-yellow-500 text-black': 'bg-neutral-900 hover:bg-neutral-800'
                  }`}
                  onClick={() => setMarsDistance(parseFloat(distance))}
                >
                  <span className="font-medium block">{celestialObject}</span>
                  <span className="text-sm text-black-300">{distance}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-neutral-900 text-white p-4 rounded-lg border-[0.4px] border-neutral-800">
              <h3 className="text-lg font-medium">Mars</h3>
              <p>
                <span className="text-gray-400">Distance:</span> {marsDistance} million km
              </p>
              <p>
                <span className="text-gray-400">In numbers:</span> {marsDistance * 1000000} km
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AstronomyCalculators;