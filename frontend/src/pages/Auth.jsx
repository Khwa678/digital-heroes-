import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleAuth = (e) => {
    e.preventDefault();
    // In a real app, you'd connect to MongoDB/Firebase here.
    // For now, we simulate a successful login:
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md z-10"
      >
        <div className="bg-zinc-900 border border-zinc-800 p-10 rounded-[40px] shadow-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black italic uppercase tracking-tighter text-white">
              {isLogin ? 'Welcome ' : 'Join the '}
              <span className="text-emerald-500">Mission</span>
            </h2>
            <p className="text-zinc-500 text-sm mt-2 font-bold uppercase tracking-widest">
              Digital Heroes Portal
            </p>
          </div>

          <form onSubmit={handleAuth} className="space-y-4">
            {!isLogin && (
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 w-5 h-5" />
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  className="w-full bg-black border border-zinc-800 rounded-2xl py-4 pl-12 pr-4 text-white focus:border-emerald-500 outline-none transition-all"
                />
              </div>
            )}
            
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 w-5 h-5" />
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-black border border-zinc-800 rounded-2xl py-4 pl-12 pr-4 text-white focus:border-emerald-500 outline-none transition-all"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 w-5 h-5" />
              <input 
                type="password" 
                placeholder="Password" 
                className="w-full bg-black border border-zinc-800 rounded-2xl py-4 pl-12 pr-4 text-white focus:border-emerald-500 outline-none transition-all"
              />
            </div>

            <button className="w-full bg-white text-black font-black py-4 rounded-2xl hover:bg-emerald-500 transition-all flex items-center justify-center gap-2 group mt-6">
              {isLogin ? 'ENTER DASHBOARD' : 'CREATE ACCOUNT'}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-8 text-center">
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="text-zinc-500 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors"
            >
              {isLogin ? "Don't have an account? Sign Up" : "Already a Hero? Log In"}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Auth;