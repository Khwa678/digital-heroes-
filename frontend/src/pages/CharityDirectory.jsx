import React from 'react';
import { motion } from 'framer-motion';

const CharityDirectory = () => {
  const charities = [
    {
      id: 1,
      name: "Ocean Cleanse",
      description: "Removing plastic waste from our coastlines using advanced tracking.",
      impact: "1kg plastic per $10",
      image: "https://images.unsplash.com/photo-1484291470158-b8f8d608850d?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      name: "Green Canopy",
      description: "Reforesting critical habitats to restore biodiversity and fight carbon.",
      impact: "5 trees per $20",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8 md:p-16">
      <div className="max-w-6xl mx-auto">
        <header className="mb-16">
          <h1 className="text-6xl font-black italic uppercase tracking-tighter mb-4">
            The <span className="text-emerald-500">Missions</span>
          </h1>
          <p className="text-zinc-500 max-w-lg font-medium text-lg">
            Every point you score and every subscription fuels these verified impact partners. 
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {charities.map((charity) => (
            <motion.div 
              key={charity.id}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-3xl bg-zinc-900 border border-zinc-800"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={charity.image} 
                  alt={charity.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-110 group-hover:scale-100"
                />
              </div>
              
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-black uppercase italic tracking-tight">{charity.name}</h3>
                  <span className="bg-emerald-500/10 text-emerald-500 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest border border-emerald-500/20">
                    Verified
                  </span>
                </div>
                <p className="text-zinc-400 mb-6 leading-relaxed">
                  {charity.description}
                </p>
                <div className="bg-black/50 p-4 rounded-2xl border border-zinc-800 flex justify-between items-center">
                  <span className="text-zinc-500 text-xs font-bold uppercase">Impact Metric</span>
                  <span className="text-white font-black italic">{charity.impact}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CharityDirectory;