const ShimmerCard = () => (
    <div className="w-64 h-80 bg-gray-200 rounded-lg overflow-hidden">
      <div className="h-40 bg-gray-300 animate-pulse"></div>
      <div className="p-4 space-y-4">
        <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
        <div className="h-4 bg-gray-300 rounded animate-pulse w-5/6"></div>
        <div className="h-4 bg-gray-300 rounded animate-pulse w-4/6"></div>
      </div>
    </div>
);



const Shimmer = () => {
    return (
      <div className="shimmer-container flex flex-wrap justify-center gap-6 p-4">
        {[...Array(15)].map((_, index) => (
          <ShimmerCard key={index} />
        ))}
      </div>
    );
};


export default Shimmer