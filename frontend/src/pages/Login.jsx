import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Login = ({ setUser }) => {
  const [isSignup, setIsSignup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mocking an active subscription for the selection process demo
    setUser({ email: 'hero@digitalheroes.co.in', subscriptionStatus: 'active', role: 'subscriber' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-zinc-900 border border-zinc-800 p-10 rounded-[2rem]"
      >
        <h2 className="text-3xl font-black text-white italic uppercase mb-8">
          {isSignup ? 'Join the Mission' : 'Welcome Back'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="email" placeholder="Email Address" required
            className="w-full bg-black border border-zinc-800 p-4 rounded-xl text-white focus:ring-2 focus:ring-emerald-500 outline-none"
          />
          <input 
            type="password" placeholder="Password" required
            className="w-full bg-black border border-zinc-800 p-4 rounded-xl text-white focus:ring-2 focus:ring-emerald-500 outline-none"
          />
          <button type="submit" className="w-full bg-emerald-500 text-black font-bold py-4 rounded-xl hover:bg-emerald-400 transition-all uppercase tracking-widest">
            {isSignup ? 'Create Hero Account' : 'Sign In'}
          </button>
        </form>
        <p className="mt-6 text-center text-zinc-500 text-sm">
          {isSignup ? 'Already a member?' : 'New to the platform?'} 
          <button onClick={() => setIsSignup(!isSignup)} className="ml-2 text-white font-bold hover:underline">
            {isSignup ? 'Log In' : 'Create Account'}
          </button>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;