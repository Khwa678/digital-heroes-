import React from 'react';
import { motion } from 'framer-motion';

const ScoreHistory = ({ scores }) => {
  // PRD Logic: Calculate average of the last 5 scores
  const lastFive = scores.slice(-5);
  const average = lastFive.length > 0 
    ? (lastFive.reduce((a, b) => a + b, 0) / lastFive.length).toFixed(1) 
    : 0;

  return (
    <div className="space-y-6">
      <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl">
        <span className="text-emerald-500 text-xs font-black uppercase tracking-[0.2em]">Current Hero Score</span>
        <div className="text-6xl font-black italic uppercase text-white mt-2">{average}</div>
        <p className="text-zinc-500 text-sm mt-2">Based on your last {lastFive.length} rounds</p>
      </div>

      <div className="grid gap-2">
        <h4 className="text-zinc-400 text-xs font-bold uppercase tracking-widest px-2">Recent Rounds</h4>
        {lastFive.reverse().map((s, i) => (
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            key={i} 
            className="flex justify-between items-center bg-zinc-900/50 border border-zinc-800 p-4 rounded-xl"
          >
            <span className="text-zinc-400 font-medium text-sm">Round {lastFive.length - i}</span>
            <span className="text-white font-black text-xl">{s} pts</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ScoreHistory;