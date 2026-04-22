import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Target, History, PlusCircle } from 'lucide-react';

const Dashboard = () => {
  // PRD: State for rolling scores
  const [scores, setScores] = useState([38, 42, 35]); // Mock starting data
  const [newScore, setNewScore] = useState('');
  const [heroScore, setHeroScore] = useState(0);

  // PRD Section 05: Calculate Rolling 5-Round Average
  useEffect(() => {
    const lastFive = scores.slice(-5);
    if (lastFive.length > 0) {
      const avg = lastFive.reduce((a, b) => a + b, 0) / lastFive.length;
      setHeroScore(avg.toFixed(1));
    }
  }, [scores]);
const handleAddScore = async (score, date) => {
  const response = await fetch('http://localhost:5000/api/scores/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: "ayush@example.com", // Dynamic email from your auth state
      scoreValue: score,
      date: date
    })
  });

  const data = await response.json();
  if (response.ok) {
    alert("Score added to your Rolling 5!");
  } else {
    alert(data.message);
  }
};
  const handleSubmitScore = (e) => {
    e.preventDefault();
    const scoreVal = parseInt(newScore);
    
    // PRD Validation: Stableford scores typically range from 1-45
    if (scoreVal > 0 && scoreVal <= 45) {
      setScores([...scores, scoreVal]);
      setNewScore('');
    } else {
      alert("Invalid Score: Please enter a Stableford score between 1 and 45.");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-10 font-sans">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* 1. HERO STATS HEADER */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h1 className="text-5xl font-black italic uppercase tracking-tighter">
              Player <span className="text-emerald-500">Dashboard</span>
            </h1>
            <p className="text-zinc-500 font-bold uppercase text-xs tracking-[0.3em] mt-2">
              Status: <span className="text-white">Active Competitor</span>
            </p>
          </div>

          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-zinc-900 border border-zinc-800 p-6 rounded-3xl flex items-center gap-6 shadow-2xl"
          >
            <div className="bg-emerald-500/10 p-4 rounded-2xl">
              <Trophy className="text-emerald-500 w-8 h-8" />
            </div>
            <div>
              <span className="text-zinc-500 text-[10px] font-black uppercase tracking-widest">Hero Score (Avg)</span>
              <div className="text-4xl font-black italic text-white leading-none">{heroScore}</div>
            </div>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* 2. SCORE ENTRY FORM (PRD SECTION 05) */}
          <div className="lg:col-span-1 space-y-6">
            <section className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-6">
                  <PlusCircle className="text-emerald-500 w-5 h-5" />
                  <h3 className="font-black uppercase italic tracking-tight">Post New Round</h3>
                </div>
                <form onSubmit={handleSubmitScore} className="space-y-4">
                  <div>
                    <label className="text-[10px] text-zinc-500 font-black uppercase mb-2 block">Stableford Points</label>
                    <input 
                      type="number"
                      value={newScore}
                      onChange={(e) => setNewScore(e.target.value)}
                      placeholder="e.g. 36"
                      className="w-full bg-black border border-zinc-800 rounded-xl py-4 px-6 text-2xl font-black text-white focus:border-emerald-500 outline-none transition-all"
                    />
                  </div>
                  <button className="w-full bg-white text-black font-black py-4 rounded-xl hover:bg-emerald-400 transition-colors uppercase tracking-widest text-sm">
                    Submit Score
                  </button>
                </form>
              </div>
            </section>

            {/* QUICK STATS */}
            <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-3xl">
              <div className="flex justify-between text-sm py-2 border-b border-zinc-800">
                <span className="text-zinc-500">Rounds Played</span>
                <span className="font-bold">{scores.length}</span>
              </div>
              <div className="flex justify-between text-sm py-2">
                <span className="text-zinc-500">Best Round</span>
                <span className="font-bold text-emerald-500">{Math.max(...scores)} pts</span>
              </div>
            </div>
          </div>

          {/* 3. RECENT HISTORY (PRD SECTION 06) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-2 px-2">
              <History className="text-zinc-500 w-5 h-5" />
              <h3 className="text-zinc-400 font-black uppercase italic tracking-widest text-sm">Recent History</h3>
            </div>
            
            <div className="grid gap-3">
              <AnimatePresence initial={false}>
                {scores.slice(-5).reverse().map((s, idx) => (
                  <motion.div
                    key={scores.length - idx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="group bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 p-5 rounded-2xl flex justify-between items-center transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center border border-zinc-800 text-[10px] font-black text-zinc-500">
                        R{scores.length - idx}
                      </div>
                      <span className="font-bold text-zinc-300">Saturday Morning Round</span>
                    </div>
                    <div className="text-2xl font-black italic">{s} <span className="text-[10px] text-zinc-500 uppercase not-italic">pts</span></div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* PRD SECTION 12: IMPACT CALLOUT */}
            <div className="bg-emerald-500 p-8 rounded-3xl text-black flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <h4 className="text-2xl font-black uppercase italic leading-tight">Your Score Matters</h4>
                <p className="font-medium opacity-80 text-sm">Next Weekly Hero Draw: Sunday @ 6PM</p>
              </div>
              <Target className="w-12 h-12 opacity-20" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;