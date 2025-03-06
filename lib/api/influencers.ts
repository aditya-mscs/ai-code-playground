import type { Influencer } from "@/lib/types"
import type { FiltersState } from "@/lib/redux/features/filtersSlice"

// Mock data for influencers
const mockInfluencers: Influencer[] = [
  {
    id: 1,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    location: "USA",
    followers: 500000,
    maxViews: 1200000,
    avgViews: 800000,
    rating: 4.8,
    priceRange: [1000, 3000],
    category: "fashion",
  },
  {
    id: 2,
    videoUrl: "https://www.youtube.com/embed/9bZkp7q19f0",
    location: "Asia",
    followers: 2000000,
    maxViews: 5000000,
    avgViews: 3000000,
    rating: 4.9,
    priceRange: [3000, 8000],
    category: "music",
  },
  {
    id: 3,
    videoUrl: "https://www.youtube.com/embed/M7lc1UVf-VE",
    location: "Europe",
    followers: 800000,
    maxViews: 2000000,
    avgViews: 1200000,
    rating: 4.7,
    priceRange: [2000, 5000],
    category: "tech",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/embed/1PnVor36_40",
    location: "USA",
    followers: 300000,
    maxViews: 900000,
    avgViews: 600000,
    rating: 4.5,
    priceRange: [800, 2500],
    category: "beauty",
  },
  {
    id: 5,
    videoUrl: "https://www.youtube.com/embed/8aGhZQkoFbQ",
    location: "Australia",
    followers: 150000,
    maxViews: 500000,
    avgViews: 300000,
    rating: 4.6,
    priceRange: [500, 1500],
    category: "fitness",
  },
  {
    id: 6,
    videoUrl: "https://www.youtube.com/embed/DHvZLI7Db8E",
    location: "Europe",
    followers: 1200000,
    maxViews: 3000000,
    avgViews: 1800000,
    rating: 4.9,
    priceRange: [2500, 6000],
    category: "food",
  },
]

interface FetchInfluencersParams {
  page: number
  filters: FiltersState
}

interface FetchInfluencersResult {
  influencers: Influencer[]
  nextPage: number | null
  totalPages: number
}

// Simulated API call to fetch influencers with pagination and filtering
export async function fetchInfluencers({ page, filters }: FetchInfluencersParams): Promise<FetchInfluencersResult> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 800))

  // Apply filters
  let filteredInfluencers = [...mockInfluencers]

  if (filters.location) {
    filteredInfluencers = filteredInfluencers.filter((influencer) => influencer.location === filters.location)
  }

  if (filters.category) {
    filteredInfluencers = filteredInfluencers.filter((influencer) => influencer.category === filters.category)
  }

  filteredInfluencers = filteredInfluencers.filter(
    (influencer) =>
      influencer.followers >= filters.followerRange[0] && influencer.followers <= filters.followerRange[1],
  )

  filteredInfluencers = filteredInfluencers.filter(
    (influencer) =>
      influencer.priceRange[0] <= filters.priceRange[1] && influencer.priceRange[1] >= filters.priceRange[0],
  )

  // Pagination
  const pageSize = 3
  const totalPages = Math.ceil(filteredInfluencers.length / pageSize)
  const startIndex = (page - 1) * pageSize
  const endIndex = startIndex + pageSize
  const paginatedInfluencers = filteredInfluencers.slice(startIndex, endIndex)

  return {
    influencers: paginatedInfluencers,
    nextPage: page < totalPages ? page + 1 : null,
    totalPages,
  }
}

