import { useQuery } from '@tanstack/react-query'

interface Video {
  id: number
  videoUrl: string
  followers: number
  location: string
  maxViews: number
  avgViews: number
  rating: number
  priceRange: string
}

// This is a mock function to simulate fetching data from an API
const fetchVideos = async (): Promise<Video[]> => {
  // In a real application, this would be an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          videoUrl: 'https://www.instagram.com/p/CdkPYWIjxq6/embed',
          followers: 100000,
          location: 'New York, USA',
          maxViews: 500000,
          avgViews: 250000,
          rating: 4.5,
          priceRange: '$1000 - $5000'
        },
        {
          id: 2,
          videoUrl: 'https://www.instagram.com/p/CdkPYWIjxq6/embed',
          followers: 50000,
          location: 'London, UK',
          maxViews: 200000,
          avgViews: 100000,
          rating: 4.2,
          priceRange: '$500 - $2000'
        },
        // Add more mock data as needed
      ])
    }, 1000) // Simulate network delay
  })
}

export const useVideos = () => {
  return useQuery<Video[], Error>(['videos'], fetchVideos)
}