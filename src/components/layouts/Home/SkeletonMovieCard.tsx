function SkeletonMovieCard() {
  return (
    <div className="w-40 flex-shrink-0 animate-pulse">
      <div className="h-60 w-full rounded-md bg-gray-300" />
      <div className="ml-2 -mt-7 mb-4 h-11 w-11 rounded-full border-4 border-gray-300 bg-gray-300" />
      <div className="space-y-1">
        <div className="h-4 w-5/6 rounded-md bg-gray-300" />
        {/* <div className="h-4 w-3/4 rounded-md bg-gray-300" /> */}
        <div className="!mt-3 h-3 w-1/2 rounded-md bg-gray-300" />
      </div>
    </div>
  )
}

export default SkeletonMovieCard
