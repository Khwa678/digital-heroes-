import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Page Imports
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import AdminPanel from './pages/AdminPanel';
import CharityDirectory from './pages/CharityDirectory';
import Login from './pages/Login';
import LandingPage from './pages/LandingPage';
import Subscription from './pages/Subscription';
import Winners from './pages/Winners';
// Component Imports
import Navbar from './components/Navbar';
import { LucideRoute } from 'lucide-react';

const App = () => {
  // PRD Section 04: Real-time subscription status check logic
  const [user, setUser] = useState(null); 
  const [loading, setLoading] = useState(true);

useEffect(() => {
    const checkAuth = async () => {
      // 1. Look for the user data we saved in the browser during Login
      const savedUser = localStorage.getItem('user');
      
      if (savedUser) {
        try {
          // 2. Set the state so the Navbar and Routes recognize the user
          setUser(JSON.parse(savedUser));
        } catch (error) {
          console.error("Auth Restore Error:", error);
          localStorage.removeItem('user');
        }
      }
      setLoading(false);
    };
    checkAuth();
  }, []);
  if (loading) return <div className="bg-black h-screen flex items-center justify-center text-emerald-500">Loading...</div>;

  return (
    <Router>
      <div className="bg-black min-h-screen text-white font-sans selection:bg-emerald-500 selection:text-black">
        <Navbar user={user} />
        
        {/* AnimatePresence allows for smooth page transitions required by Section 12 [cite: 121] */}
        <AnimatePresence mode="wait">
          <Routes>
            {/* Public Visitor Routes [cite: 21] */}
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/charities" element={<CharityDirectory />} />
            <Route path="/login" element={<Login setUser={setUser} />} />

<Route path="/subscription" element={<Subscription user={user} />} />
  <Route path="/winners" element={<Winners />} />
            {/* Registered Subscriber Routes - Protected [cite: 26, 38] */}
            <Route 
              path="/dashboard" 
              element={
                user?.subscriptionStatus === 'active' 
                ? <Dashboard user={user} /> 
                : <Navigate to="/login" />
              } 
            />

            {/* Administrator Routes [cite: 32, 135] */}
            <Route 
              path="/admin" 
              element={
                user?.role === 'admin' 
                ? <AdminPanel /> 
                : <Navigate to="/" />
              } 
            />
          </Routes>
        </AnimatePresence>

        {/* PRD Section 12: Leading with charitable impact, not sport [cite: 120] */}
        <footer className="p-10 border-t border-zinc-900 text-center text-zinc-600 text-sm">
          <p>© 2026 Digital Heroes. Driven by Impact.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;