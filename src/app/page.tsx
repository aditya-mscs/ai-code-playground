'use client'
import { Suspense } from 'react'
import VideoCard from '@/components/VideoCard'
import { useVideos } from '@/hooks/useVideos'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()
export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Influencer Marketplace</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <VideoFeed />
        </Suspense>
      </div>
    </QueryClientProvider>
  )
}

function VideoFeed() {
  const { data: videos, isLoading, error } = useVideos()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {videos?.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  )
}
