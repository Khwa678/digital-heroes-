import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = ({ user }) => {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO - Minimalist & Professional */}
        <Link to="/" className="text-2xl font-black italic tracking-tighter text-white">
          DIGITAL<span className="text-emerald-500">HEROES</span>
        </Link>

        {/* NAVIGATION LINKS */}
        <div className="hidden md:flex items-center space-x-8 text-xs font-bold uppercase tracking-widest">
          <Link to="/charities" className="text-zinc-400 hover:text-white transition-colors">Charities</Link>
          
         {user ? (
  <>
    <Link to="/dashboard" className="text-zinc-400 hover:text-white transition-colors">Dashboard</Link>
    
    {/* NEW: Winners Button */}
    <Link to="/winners" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2">
      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
      Winners
    </Link>

    {/* NEW: Subscription Button */}
    <Link 
      to="/subscription" 
      className="text-emerald-500 border border-emerald-500/30 px-3 py-1 rounded-md hover:bg-emerald-500/10 transition-all"
    >
      Subscription
    </Link>

    {user.role === 'admin' && (
      <Link to="/admin" className="text-amber-500 hover:text-amber-400 transition-colors">Admin</Link>
    )}
    
    <button 
      onClick={() => window.location.reload()} 
      className="bg-zinc-800 text-white px-5 py-2 rounded-full hover:bg-zinc-700 transition-all"
    >
      Log Out
    </button>
  </>
) : (
  <Link 
    to="/login" 
    className="bg-emerald-500 text-black px-6 py-2 rounded-full hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)]"
  >
    Get Started
  </Link>
)}
        </div>

        {/* MOBILE TOGGLE (Placeholder) */}
        <div className="md:hidden text-zinc-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;




