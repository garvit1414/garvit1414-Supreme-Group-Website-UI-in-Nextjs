import React from 'react';

export default function PerformanceSlide({ onClick }) {
  return (
    <div
      className="w-full h-screen flex items-center justify-center text-center p-4"
      style={{ backgroundColor: '#808080' }}
      onClick={onClick}
    >
      <div className="max-w-2xl space-y-4">
        <p className="text-sm text-white">Performance in motion</p>
        <h1 className="text-3xl md:text-5xl font-semibold text-white">
          Soft Trims and NVH Solutions
        </h1>
        <p className="text-xl text-white">for seamless rides</p>
      </div>
    </div>
  );
}
