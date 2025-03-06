import { Suspense } from "react"
import InfluencerFeed from "@/components/home/InfluencerFeed"
import FilterBar from "@/components/home/FilterBar"
import { Skeleton } from "@/components/ui/skeleton"

export default function Home() {
  return (
    <div className="container mx-auto max-w-7xl">
      <h1 className="mb-6 text-3xl font-bold">Discover Influencers</h1>
      <FilterBar />
      <Suspense fallback={<FeedSkeleton />}>
        <InfluencerFeed />
      </Suspense>
    </div>
  )
}

function FeedSkeleton() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {Array(6)
        .fill(0)
        .map((_, i) => (
          <div key={i} className="rounded-lg border bg-card shadow-sm">
            <Skeleton className="h-[300px] w-full rounded-t-lg" />
            <div className="p-4">
              <Skeleton className="mb-2 h-4 w-3/4" />
              <Skeleton className="mb-2 h-4 w-1/2" />
              <Skeleton className="h-10 w-full" />
            </div>
          </div>
        ))}
    </div>
  )
}

