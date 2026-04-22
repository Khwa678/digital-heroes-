import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Subscription = ({ user }) => {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    try {
      // Simulate API call to your Local MongoDB Backend
      const response = await fetch('http://localhost:5000/api/auth/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: user?.email })
      });

      if (response.ok) {
        // Update local state and redirect
        const updatedUser = { ...user, subscriptionStatus: 'active' };
        localStorage.setItem('user', JSON.stringify(updatedUser));
        alert("Success! You are now an active Digital Hero.");
        window.location.href = '/dashboard';
      }
    } catch (error) {
      console.error("Subscription error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-32 pb-20 px-6 min-h-screen bg-black flex flex-col items-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-2xl"
      >
        <h1 className="text-5xl font-black italic uppercase tracking-tighter text-white mb-4">
          Choose Your <span className="text-emerald-500">Impact</span>
        </h1>
        <p className="text-zinc-500 mb-12 uppercase text-xs font-bold tracking-widest">
          PRD Section 04: Monthly Subscription & Prize Entry
        </p>
      </motion.div>

      {/* Pricing Card */}
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-3xl p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 bg-emerald-500 text-black text-[10px] font-black px-4 py-1 rounded-bl-xl uppercase">
          Most Impactful
        </div>

        <h2 className="text-2xl font-bold text-white mb-2">Digital Hero Pass</h2>
        <div className="flex items-baseline gap-1 mb-6">
          <span className="text-5xl font-black text-white">$10</span>
          <span className="text-zinc-500 font-bold uppercase text-xs">/ month</span>
        </div>

        <ul className="space-y-4 mb-8">
          {[
            "Entry into the Monthly $2,500 Draw",
            "10% Automatic Donation to Your Charity",
            "Rolling 5-Score Performance Tracking",
            "Verified Digital Hero Badge"
          ].map((feature, i) => (
            <li key={i} className="flex items-center gap-3 text-zinc-300 text-sm">
              <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>

        <button
          onClick={handlePayment}
          disabled={loading}
          className="w-full bg-white text-black font-black uppercase py-4 rounded-xl hover:bg-emerald-500 transition-all active:scale-95 disabled:opacity-50"
        >
          {loading ? "Processing..." : "Activate My Hero Pass"}
        </button>

        <p className="text-[10px] text-zinc-600 text-center mt-6 uppercase font-bold tracking-tighter">
          Cancel anytime. 100% Secure Transaction.
        </p>
      </div>
    </div>
  );
};

export default Subscription;