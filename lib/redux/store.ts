import { configureStore } from "@reduxjs/toolkit"
import userViewReducer from "./features/userViewSlice"
import filtersReducer from "./features/filtersSlice"

export const store = configureStore({
  reducer: {
    userView: userViewReducer,
    filters: filtersReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

