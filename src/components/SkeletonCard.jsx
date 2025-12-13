const SkeletonCard = () => (
  <div
    className="max-w-[290px] md:min-w-[350px] lg:min-w-[380px] 
               bg-white rounded-xl border border-gray-200 
               shadow-md p-6 flex flex-col gap-4 animate-pulse flex-shrink-0"
  >
    <div className="w-8 h-8 bg-gray-200 rounded" />
    <div className="h-4 bg-gray-200 rounded w-full" />
    <div className="h-4 bg-gray-200 rounded w-4/5" />
    <div className="h-4 bg-gray-200 rounded w-3/5" />

    <div className="flex items-center gap-3 mt-4">
      <div className="w-10 h-10 rounded-full bg-gray-200" />
      <div className="h-4 w-24 bg-gray-200 rounded" />
    </div>
  </div>
);

export default SkeletonCard;