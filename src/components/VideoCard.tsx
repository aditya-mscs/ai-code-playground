import Link from 'next/link'
import React from 'react'

interface VideoCardProps {
  video: {
    id: number
    videoUrl: string
    followers: number
    location: string
    maxViews: number
    avgViews: number
    rating: number
    priceRange: string
  }
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="aspect-w-16 aspect-h-9">
        <iframe src={video.videoUrl} allow="autoplay; encrypted-media" allowFullScreen className="w-full h-full"></iframe>
      </div>
      <div className="p-4">
        <p><strong>Followers:</strong> {video.followers.toLocaleString()}</p>
        <p><strong>Location:</strong> {video.location}</p>
        <p><strong>Max Views:</strong> {video.maxViews.toLocaleString()}</p>
        <p><strong>Avg Views:</strong> {video.avgViews.toLocaleString()}</p>
        <p><strong>Rating:</strong> {video.rating}/5</p>
        <p><strong>Price Range:</strong> {video.priceRange}</p>
        <Link href={`/contact/${video.id}`} className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Get in Touch
        </Link>
      </div>
    </div>
  )
}

export default VideoCard