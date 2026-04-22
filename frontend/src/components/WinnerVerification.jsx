import { useState } from 'react';

const WinnerVerification = () => {
  const [file, setFile] = useState(null);

  const handleUpload = () => {
    //  Proof Upload Logic: Sending screenshot to Admin Review
    console.log("Submitting proof for admin review...");
  };

  return (
    <div className="bg-emerald-500 p-8 rounded-3xl text-black">
      <h3 className="font-black italic uppercase">Claim Prize</h3>
      <p className="text-xs font-bold mb-4">Upload screenshot of scores for verification </p>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} className="mb-4" />
      <button onClick={handleUpload} className="w-full bg-black text-white py-3 rounded-xl font-bold">SUBMIT PROOF</button>
    </div>
  );
};