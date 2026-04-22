import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AdminPanel = () => {
  const [isDrawing, setIsDrawing] = useState(false);
  const [winner, setWinner] = useState(null);

  // Mock data of players who qualify (Average > 30)
  const qualifiers = [
    { id: 1, name: "Player_Alpha", avg: 42.5 },
    { id: 2, name: "GolfPro_99", avg: 40.1 },
    { id: 3, name: "EagleEye", avg: 38.8 },
  ];

  const startDraw = () => {
    setIsDrawing(true);
    setWinner(null);

    // Simulate the "Suspense" period (PRD Section 11: High-Fidelity Engagement)
    setTimeout(() => {
      const luckyWinner = qualifiers[Math.floor(Math.random() * qualifiers.length)];
      setWinner(luckyWinner);
      setIsDrawing(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* HEADER */}
        <div className="border-b border-zinc-800 pb-6">
          <h1 className="text-4xl font-black italic uppercase tracking-tighter">
            Command <span className="text-emerald-500">Center</span>
          </h1>
          <p className="text-zinc-500 uppercase text-xs font-bold tracking-widest mt-2">
            Weekly Draw Management
          </p>
        </div>

        {/* QUALIFIERS LIST */}
        <div className="bg-zinc-900/50 rounded-3xl p-8 border border-zinc-800">
          <h3 className="text-xl font-bold mb-6 italic uppercase">Top Qualifiers</h3>
          <div className="space-y-4">
            {qualifiers.map((player) => (
              <div key={player.id} className="flex justify-between items-center bg-black/40 p-4 rounded-2xl border border-zinc-800">
                <span className="font-bold tracking-tight">{player.name}</span>
                <span className="text-emerald-500 font-black">{player.avg} AVG</span>
              </div>
            ))}
          </div>
        </div>

        {/* DRAW ACTION */}
        <div className="text-center py-10">
          {!winner && (
            <button
              onClick={startDraw}
              disabled={isDrawing}
              className={`px-12 py-5 rounded-full font-black uppercase tracking-widest transition-all ${
                isDrawing 
                ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed' 
                : 'bg-white text-black hover:bg-emerald-500 hover:scale-105 active:scale-95'
              }`}
            >
              {isDrawing ? "Selecting Hero..." : "Initiate Weekly Draw"}
            </button>
          )}

          {/* WINNER REVEAL */}
          <AnimatePresence>
            {winner && (
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-emerald-500 p-10 rounded-3xl text-black"
              >
                <span className="text-xs font-black uppercase tracking-[0.3em]">We Have A Hero</span>
                <h2 className="text-6xl font-black italic uppercase my-4">{winner.name}</h2>
                <button 
                  onClick={() => setWinner(null)}
                  className="mt-4 text-sm font-bold underline"
                >
                  Reset Draw
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
};

export default AdminPanel;