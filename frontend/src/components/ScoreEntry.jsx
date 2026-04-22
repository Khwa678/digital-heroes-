import { useState } from 'react';
import { supabase } from '../lib/supabase';

const ScoreEntry = ({ userId, currentScores }) => {
  const [score, setScore] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const val = parseInt(score);

    // [cite: 42, 96] Validation: 1-45 range and unique date
    if (val < 1 || val > 45) return alert("Stableford score must be 1-45");
    if (currentScores.some(s => s.date === date)) return alert("Duplicate date not allowed");

    // [cite: 45, 46] Rolling 5 Logic: Replace oldest if we hit 5
    let updatedScores = [...currentScores, { score: val, date, user_id: userId }];
    updatedScores.sort((a, b) => new Date(b.date) - new Date(a.date));
    if (updatedScores.length > 5) updatedScores = updatedScores.slice(0, 5);

    // Save to Supabase (assuming a 'scores' table)
    const { error } = await supabase.from('scores').upsert(updatedScores);
    if (!error) alert("Score posted!");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-zinc-900 p-6 rounded-3xl space-y-4">
      <input type="date" required onChange={(e) => setDate(e.target.value)} className="w-full bg-black p-3 text-white rounded-xl" />
      <input type="number" placeholder="Score (1-45)" required onChange={(e) => setScore(e.target.value)} className="w-full bg-black p-3 text-white rounded-xl" />
      <button className="w-full bg-emerald-500 text-black font-black py-3 rounded-xl uppercase italic">Post Round</button>
    </form>
  );
};