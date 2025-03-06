"use client"

import { useState, useCallback } from "react"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Users, Eye, DollarSign } from "lucide-react"
import type { Influencer } from "@/lib/types"

interface InfluencerCardProps {
  influencer: Influencer
}

export default function InfluencerCard({ influencer }: InfluencerCardProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = useCallback(() => {
    setIsPlaying(true)
  }, [])

  const handlePause = useCallback(() => {
    setIsPlaying(false)
  }, [])

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="relative aspect-video">
        {influencer.videoUrl ? (
          <iframe
            src={`${influencer.videoUrl}${isPlaying ? "?autoplay=1" : ""}`}
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={`Influencer ${influencer.id} video`}
            onPlay={handlePlay}
            onPause={handlePause}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-muted">No video available</div>
        )}
      </div>
      <CardContent className="p-4">
        <div className="mb-4 flex flex-wrap gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            {influencer.location}
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            <Users className="h-3 w-3" />
            {influencer.followers.toLocaleString()}
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            <Eye className="h-3 w-3" />
            {influencer.avgViews.toLocaleString()}
          </Badge>
        </div>

        <div className="mb-2 flex items-center">
          <div className="flex items-center">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(influencer.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
          </div>
          <span className="ml-2 text-sm text-muted-foreground">({influencer.rating.toFixed(1)})</span>
        </div>

        <div className="mb-4 flex items-center gap-1">
          <DollarSign className="h-4 w-4 text-muted-foreground" />
          <span className="font-medium">
            {influencer.priceRange[0]} - {influencer.priceRange[1]} USD
          </span>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Link href={`/influencers/${influencer.id}`} className="w-full">
          <Button className="w-full">Get in Touch</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

