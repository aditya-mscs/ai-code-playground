"use client"

import { useCallback } from "react"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks"
import {
  setFollowerRange,
  setPriceRange,
  setLocation,
  setCategory,
  resetFilters,
} from "@/lib/redux/features/filtersSlice"

export default function FilterBar() {
  const dispatch = useAppDispatch()
  const filters = useAppSelector((state) => state.filters)

  const handleFollowerRangeChange = useCallback(
    (value: number[]) => {
      dispatch(setFollowerRange(value))
    },
    [dispatch],
  )

  const handlePriceRangeChange = useCallback(
    (value: number[]) => {
      dispatch(setPriceRange(value))
    },
    [dispatch],
  )

  const handleLocationChange = useCallback(
    (value: string) => {
      dispatch(setLocation(value))
    },
    [dispatch],
  )

  const handleCategoryChange = useCallback(
    (value: string) => {
      dispatch(setCategory(value))
    },
    [dispatch],
  )

  const handleReset = useCallback(() => {
    dispatch(resetFilters())
  }, [dispatch])

  return (
    <div className="mb-6 rounded-lg border bg-card p-4 shadow-sm">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Select value={filters.location} onValueChange={handleLocationChange}>
            <SelectTrigger id="location">
              <SelectValue placeholder="Any location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any location</SelectItem>
              <SelectItem value="USA">USA</SelectItem>
              <SelectItem value="Europe">Europe</SelectItem>
              <SelectItem value="Asia">Asia</SelectItem>
              <SelectItem value="Australia">Australia</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="category">Category</Label>
          <Select value={filters.category} onValueChange={handleCategoryChange}>
            <SelectTrigger id="category">
              <SelectValue placeholder="Any category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any category</SelectItem>
              <SelectItem value="fashion">Fashion</SelectItem>
              <SelectItem value="beauty">Beauty</SelectItem>
              <SelectItem value="fitness">Fitness</SelectItem>
              <SelectItem value="tech">Tech</SelectItem>
              <SelectItem value="food">Food</SelectItem>
              <SelectItem value="travel">Travel</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Followers</Label>
          <div className="px-2">
            <Slider
              value={filters.followerRange}
              min={0}
              max={1000000}
              step={10000}
              onValueChange={handleFollowerRangeChange}
            />
          </div>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>{filters.followerRange[0].toLocaleString()}</span>
            <span>{filters.followerRange[1].toLocaleString()}</span>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Price Range ($)</Label>
          <div className="px-2">
            <Slider value={filters.priceRange} min={0} max={10000} step={100} onValueChange={handlePriceRangeChange} />
          </div>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>${filters.priceRange[0]}</span>
            <span>${filters.priceRange[1]}</span>
          </div>
        </div>
      </div>

      <div className="mt-4 flex justify-end">
        <Button variant="outline" size="sm" onClick={handleReset}>
          Reset Filters
        </Button>
      </div>
    </div>
  )
}

