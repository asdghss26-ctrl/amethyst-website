export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#F8F3EF]">
      <div className="flex flex-col items-center gap-6">
        {/* Pulsing Logo Skeleton */}
        <div className="w-16 h-16 rounded-full bg-[#E4DFE8] animate-pulse" />
        
        {/* Loading Text */}
        <div className="space-y-3 flex flex-col items-center">
          <div className="w-48 h-4 bg-[#E4DFE8] rounded-full animate-pulse" />
          <div className="w-32 h-3 bg-[#E4DFE8] rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  );
}
