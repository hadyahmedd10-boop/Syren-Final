export default function ExperienceLoading() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Skeleton */}
      <div className="relative h-[80vh] min-h-[600px] w-full bg-surface animate-pulse" />
      
      {/* Content Skeleton */}
      <div className="mx-auto max-w-4xl px-6 section space-y-8">
        <div className="h-4 w-32 bg-surface animate-pulse mx-auto" />
        <div className="h-12 w-64 bg-surface animate-pulse mx-auto" />
        <div className="h-24 w-full bg-surface animate-pulse" />
      </div>

      <div className="bg-surface section">
        <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-48 bg-background animate-pulse border border-white/5" />
          ))}
        </div>
      </div>
    </main>
  );
}
