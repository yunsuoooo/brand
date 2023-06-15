const Authentication = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-12 bg-slate-950 text-white">
      <div className="flex flex-col items-center p-8 bg-zinc-800 rounded-2xl">
        <p className="pb-4 text-xl text-center">Enter the 6-digit code.</p>
        <div className="flex gap-3">
          {new Array(6).fill(null).map((_, index) => (
            <input
              key={index}
              className="bg-zinc-800 p-2 w-10 h-14 rounded text-3xl text-center border border-zinc-500"
              type="text"
              pattern="[0-9]+"
              required
              maxLength={1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Authentication;
