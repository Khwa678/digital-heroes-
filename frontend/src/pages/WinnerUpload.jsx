const WinnerUpload = ({ drawId }) => {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    //  Admin Review process starts after upload
    console.log("Uploading proof for Draw:", drawId);
    // Logic to push to Supabase Storage and set state to 'Pending'
  };

  return (
    <div className="bg-emerald-500 p-8 rounded-3xl text-black">
      <h2 className="text-2xl font-black uppercase italic">Claim Your Prize</h2>
      <p className="mb-4 text-sm font-bold">Upload a screenshot of your scores for verification.</p>
      <input 
        type="file" 
        onChange={(e) => setFile(e.target.files[0])}
        className="block w-full text-sm text-black file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-black file:bg-black file:text-white"
      />
      <button onClick={handleUpload} className="mt-4 w-full bg-black text-white py-3 rounded-xl font-bold uppercase">
        Submit for Review
      </button>
    </div>
  );
};