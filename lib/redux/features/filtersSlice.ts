import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface FiltersState {
  followerRange: number[]
  priceRange: number[]
  location: string
  category: string
}

const initialState: FiltersState = {
  followerRange: [0, 1000000],
  priceRange: [0, 10000],
  location: "",
  category: "",
}

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFollowerRange: (state, action: PayloadAction<number[]>) => {
      state.followerRange = action.payload
    },
    setPriceRange: (state, action: PayloadAction<number[]>) => {
      state.priceRange = action.payload
    },
    setLocation: (state, action: PayloadAction<string>) => {
      state.location = action.payload
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload
    },
    resetFilters: () => initialState,
  },
})

export const { setFollowerRange, setPriceRange, setLocation, setCategory, resetFilters } = filtersSlice.actions
export default filtersSlice.reducer

