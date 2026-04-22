import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white p-6">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-6"
      >
        <h1 className="text-7xl font-black italic uppercase tracking-tighter">
          Be a <span className="text-emerald-500">Hero</span>.
        </h1>
        <p className="text-zinc-400 text-xl max-w-lg mx-auto font-light">
          Track your game. Support a cause. Win monthly rewards. 
          The modern way to play for purpose.
        </p>
        <button className="bg-white text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-emerald-400 transition-all">
          Get Started
        </button>
      </motion.div>
    </div>
  );
};

export default Home;