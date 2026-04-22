import React from 'react';

const Winners = () => {
  return (
    <div className="pt-32 px-10 min-h-screen bg-black text-white text-center">
      <h1 className="text-4xl font-black italic uppercase mb-4">
        Monthly <span className="text-emerald-500">Winners</span>
      </h1>
      <p className="text-zinc-500 max-w-md mx-auto">
        Verify the latest draw results and see the charitable impact made by our Digital Heroes.
      </p>
      
      {/* Placeholder for Winner Cards */}
      <div className="mt-12 p-10 border border-dashed border-zinc-800 rounded-3xl">
        <p className="text-zinc-700 uppercase tracking-widest font-bold text-xs">
          No winners announced for this period yet.
        </p>
      </div>
    </div>
  );
};

export default Winners;