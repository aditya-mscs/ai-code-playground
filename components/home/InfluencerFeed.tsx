"use client"

import { useCallback, useMemo } from "react"
import { useInView } from "react-intersection-observer"
import { useInfiniteQuery } from "@tanstack/react-query"
import { fetchInfluencers } from "@/lib/api/influencers"
import InfluencerCard from "./InfluencerCard"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { useAppSelector } from "@/lib/redux/hooks"

export default function InfluencerFeed() {
  const filters = useAppSelector((state) => state.filters)
  const { ref, inView } = useInView()

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } = useInfiniteQuery({
    queryKey: ["influencers", filters],
    queryFn: ({ pageParam = 1 }) => fetchInfluencers({ page: pageParam, filters }),
    getNextPageParam: (lastPage) => lastPage.nextPage,
    initialPageParam: 1,
  })

  const influencers = useMemo(() => {
    return data?.pages.flatMap((page) => page.influencers) || []
  }, [data])

  const loadMore = useCallback(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  }, [fetchNextPage, hasNextPage, isFetchingNextPage])

  // Load more when scrolling to the bottom
  if (inView && hasNextPage && !isFetchingNextPage) {
    loadMore()
  }

  if (status === "pending") {
    return <div>Loading...</div>
  }

  if (status === "error") {
    return <div>Error loading influencers</div>
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {influencers.map((influencer) => (
          <InfluencerCard key={influencer.id} influencer={influencer} />
        ))}
      </div>

      <div className="flex justify-center" ref={ref}>
        {isFetchingNextPage ? (
          <Button disabled>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Loading
          </Button>
        ) : hasNextPage ? (
          <Button onClick={loadMore}>Load More</Button>
        ) : (
          <p className="text-center text-muted-foreground">No more influencers to load</p>
        )}
      </div>
    </div>
  )
}

