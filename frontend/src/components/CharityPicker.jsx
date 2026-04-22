import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CharityPicker = ({ charities = [], onSave }) => {
  const [selectedCharity, setSelectedCharity] = useState(null);
  const [contribution, setContribution] = useState(10); 

  const handleCharitySelect = (charity) => {
    setSelectedCharity(charity);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-8 text-white">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-black italic uppercase tracking-tight">
          Choose Your <span className="text-emerald-500">Impact</span>
        </h2>
        <p className="text-zinc-400">A portion of your subscription fuels these missions.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {charities.map((charity) => (
          <motion.div
            key={charity._id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleCharitySelect(charity)}
            className={`cursor-pointer rounded-2xl p-4 border-2 transition-all duration-300 ${
              selectedCharity?._id === charity._id 
                ? 'border-emerald-500 bg-emerald-500/10' 
                : 'border-zinc-800 bg-zinc-900 hover:border-zinc-700'
            }`}
          >
            <div className="aspect-video rounded-xl bg-zinc-800 mb-4 overflow-hidden">
              <img src={charity.imageUrl} alt={charity.name} className="w-full h-full object-cover opacity-80" />
            </div>
            <h3 className="font-bold text-lg">{charity.name}</h3>
            <p className="text-zinc-500 text-sm line-clamp-2">{charity.description}</p>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedCharity && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl shadow-2xl"
          >
            <div className="flex justify-between items-end mb-6">
              <div>
                <span className="text-emerald-500 text-xs font-black uppercase tracking-widest">Your Contribution</span>
                <h3 className="text-2xl font-black italic uppercase">Scaling Impact</h3>
              </div>
              <div className="text-right">
                <span className="text-5xl font-black">{contribution}%</span>
              </div>
            </div>

            <input
              type="range"
              min="10" 
              max="100"
              value={contribution}
              onChange={(e) => setContribution(e.target.value)}
              className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />

            <button
              onClick={() => onSave({ charityId: selectedCharity._id, contribution: Number(contribution) })}
              className="w-full mt-8 bg-white text-black font-black py-4 rounded-xl hover:bg-emerald-400 transition-colors uppercase tracking-widest"
            >
              Confirm & Subscribe
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CharityPicker;