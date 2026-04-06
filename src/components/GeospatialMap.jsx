import React from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from 'react-simple-maps';

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const markers = [
  { markerOffset: -15, name: "New York", coordinates: [-74.006, 40.7128] },
  { markerOffset: -15, name: "London", coordinates: [-0.1276, 51.5074] },
  { markerOffset: -25, name: "Tokyo", coordinates: [139.6917, 35.6895] },
  { markerOffset: -15, name: "Sydney", coordinates: [151.2093, -33.8688] },
  { markerOffset: -15, name: "Sao Paulo", coordinates: [-46.6333, -23.5505] },
];

const GeospatialMap = () => {
  return (
    <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-gray-200 h-full flex flex-col relative group transition-all duration-200 hover:shadow-lg">
      <div className="z-10">
        <h2 className="text-xl font-bold text-gray-900 tracking-tight">Regional Distribution</h2>
        <p className="text-xs md:text-sm text-gray-500 mt-1">Order density heatmap</p>
      </div>
      
      <div className="flex-1 w-full bg-indigo-50/10 rounded-xl mt-6 overflow-hidden relative border border-indigo-50/50 min-h-[250px] md:min-h-0">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{ scale: 100 }}
          width={800}
          height={400}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#F3F4F6"
                  stroke="#E5E7EB"
                  strokeWidth={0.5}
                  style={{
                    default: { outline: "none" },
                    hover: { fill: "#E5E7EB", outline: "none" },
                    pressed: { outline: "none" },
                  }}
                />
              ))
            }
          </Geographies>
          {markers.map(({ name, coordinates, markerOffset }) => (
            <Marker key={name} coordinates={coordinates}>
              <circle r={8} fill="#4F46E5" stroke="#fff" strokeWidth={3} className="animate-ping opacity-30 md:hidden" />
              <circle r={6} fill="#4F46E5" stroke="#fff" strokeWidth={2} className="animate-ping opacity-40 hidden md:block" />
              <circle r={4.5} fill="#4F46E5" stroke="#fff" strokeWidth={1.5} />
              <text
                textAnchor="middle"
                y={markerOffset}
                className="pointer-events-none"
                style={{ fontFamily: 'Inter', fontSize: '10px', fontWeight: '800', fill: '#111827' }}
              >
                {name}
              </text>
            </Marker>
          ))}
        </ComposableMap>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4 pb-2">
        <div className="flex space-x-4">
            <div className="flex items-center space-x-1.5">
                <div className="h-2 w-2 rounded-full bg-indigo-600 shadow-[0_0_8px_rgba(79,70,229,0.5)]"></div>
                <span className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-wider">Active</span>
            </div>
            <div className="flex items-center space-x-1.5 text-gray-400">
                <div className="h-2 w-2 rounded-full bg-gray-200"></div>
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider">Standard</span>
            </div>
        </div>
        <button className="text-[10px] md:text-xs font-black text-indigo-600 hover:text-indigo-700 uppercase tracking-widest transition group">
            Analyze <span className="hidden sm:inline">Regions</span> →
        </button>
      </div>
    </div>
  );
};

export default GeospatialMap;
