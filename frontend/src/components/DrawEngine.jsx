// [cite: 68] Prize Distribution Table Logic
const calculatePrizeTiers = (totalSubscribers, pricePerSub = 20) => {
  const totalPool = totalSubscribers * pricePerSub * 0.5; // Example 50% allocation

  return {
    match5: totalPool * 0.40, // [cite: 68] 40% (Jackpot/Rollover)
    match4: totalPool * 0.35, // [cite: 68] 35%
    match3: totalPool * 0.25, // [cite: 68] 25%
    total: totalPool
  };
};