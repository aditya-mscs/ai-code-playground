import { createSlice } from "@reduxjs/toolkit"

type UserView = "influencer" | "business"

interface UserViewState {
  view: UserView
}

const initialState: UserViewState = {
  view: "business",
}

export const userViewSlice = createSlice({
  name: "userView",
  initialState,
  reducers: {
    setUserView: (state, action) => {
      state.view = action.payload
    },
    toggleUserView: (state) => {
      state.view = state.view === "business" ? "influencer" : "business"
    },
  },
})

export const { setUserView, toggleUserView } = userViewSlice.actions
export default userViewSlice.reducer

