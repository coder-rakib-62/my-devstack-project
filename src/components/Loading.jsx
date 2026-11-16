const Loading = () => {
  return (
    <div className="min-h-87.5 flex flex-col items-center justify-center gap-6">

      {/* Spinner */}
      <div className="relative w-20 h-20 flex items-center justify-center">

        {/* Outer Glow */}
        <div className="absolute inset-0 rounded-full bg-linear-to-r from-orange-400 via-pink-500 to-violet-600 blur-xl opacity-40 animate-pulse"></div>

        {/* Rotating Border */}
        <div className="absolute inset-0 rounded-full border-[5px] border-gray-200/60"></div>

        <div className="absolute inset-0 rounded-full border-[5px] border-transparent border-t-orange-500 border-r-pink-500 border-b-violet-600 animate-spin"></div>

        {/* Inner Dot */}
        <div className="w-5 h-5 rounded-full bg-linear-to-br from-orange-400 via-pink-500 to-violet-600 shadow-lg shadow-pink-400/50 animate-pulse"></div>
      </div>

      {/* Text */}
      <div className="text-center">
        <h2 className="text-xl font-bold bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
          Loading Experience
        </h2>

        <p className="text-sm text-gray-400 mt-2 animate-pulse">
          Preparing amazing technologies for your perfect stack...
        </p>
      </div>

      {/* Loading Dots */}
      <div className="flex gap-2">
        <span className="w-2 h-2 rounded-full bg-orange-500 animate-bounce"></span>
        <span className="w-2 h-2 rounded-full bg-pink-500 animate-bounce [animation-delay:150ms]"></span>
        <span className="w-2 h-2 rounded-full bg-violet-600 animate-bounce [animation-delay:300ms]"></span>
      </div>
    </div>
  );
};

export default Loading;
