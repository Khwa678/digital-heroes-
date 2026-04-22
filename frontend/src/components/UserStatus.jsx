import React from 'react';

const UserStatus = ({ profile }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      {/* Subscription Status [cite: 87] */}
      <div className="bg-zinc-900 p-6 rounded-3xl border border-zinc-800">
        <span className="text-zinc-500 text-[10px] font-black uppercase">Membership</span>
        <div className={`text-xl font-bold ${profile.subscription_status === 'active' ? 'text-emerald-500' : 'text-red-500'}`}>
          {profile.subscription_status?.toUpperCase()}
        </div>
      </div>

      {/* Selected Charity [cite: 89] */}
      <div className="bg-zinc-900 p-6 rounded-3xl border border-zinc-800">
        <span className="text-zinc-500 text-[10px] font-black uppercase">Charity Choice ({profile.charity_percent}%)</span>
        <div className="text-xl font-bold text-white uppercase italic">{profile.charity_name}</div>
      </div>

      {/* Winnings Overview [cite: 95] */}
      <div className="bg-emerald-500 p-6 rounded-3xl text-black">
        <span className="text-black/60 text-[10px] font-black uppercase">Total Winnings</span>
        <div className="text-2xl font-black italic tracking-tighter">${profile.total_winnings || "0.00"}</div>
        <p className="text-[10px] font-bold uppercase">{profile.payment_status || "No Pending Payouts"}</p>
      </div>
    </div>
  );
};