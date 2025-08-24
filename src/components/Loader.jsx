export default function Loader() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-[9999]">
      {/* Top image */}
      <img 
        src="/logo.svg" 
        alt="Loading"
        className="w-40 sm:w-56 md:w-64 lg:w-72 h-auto mb-6"
      />

      {/* Dots loader */}
      <div className="flex gap-2 ms-5">
        <span className="w-3 h-3 bg-black rounded-full animate-bounce [animation-delay:-0.3s]" />
        <span className="w-3 h-3 bg-black rounded-full animate-bounce [animation-delay:-0.15s]" />
        <span className="w-3 h-3 bg-black rounded-full animate-bounce" />
      </div>
    </div>
  );
}
