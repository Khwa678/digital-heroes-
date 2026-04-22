
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // For navigation
import { ChevronRight, Play, X, Globe, Shield } from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="bg-black text-white selection:bg-emerald-500 selection:text-black min-h-screen">
      
      {/* 1. VIDEO MODAL POPUP */}
      <AnimatePresence>
        {showVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/90 backdrop-blur-xl"
          >
            <button 
              onClick={() => setShowVideo(false)}
              className="absolute top-6 right-6 text-white hover:text-emerald-500 transition-colors"
            >
              <X size={40} />
            </button>
            
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="w-full max-w-5xl aspect-video bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl"
            >
              {/* Replace URL with your actual mission video */}
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                title="Mission Film"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute top-0 -left-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 -right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-4 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-500 text-xs font-black uppercase tracking-[0.3em] mb-6">
              Season 01 Now Live
            </span>
            <h1 className="text-7xl md:text-9xl font-black italic uppercase tracking-tighter leading-none mb-8">
              Play for <br />
              <span className="text-emerald-500">The Planet.</span>
            </h1>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              {/* FIXED START MISSION: Navigates to Dashboard */}
              <button 
                onClick={() => navigate('/dashboard')}
                className="group px-10 py-5 bg-white text-black font-black rounded-full flex items-center gap-3 hover:bg-emerald-500 transition-all hover:scale-105"
              >
                START YOUR MISSION <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </button>

              {/* FIXED WATCH FILM: Triggers State change */}
              <button 
                onClick={() => setShowVideo(true)}
                className="px-10 py-5 bg-zinc-900 border border-zinc-800 text-white font-black rounded-full flex items-center gap-3 hover:bg-zinc-800 transition-all"
              >
                <Play className="w-4 h-4 fill-current text-emerald-500" /> WATCH FILM
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;