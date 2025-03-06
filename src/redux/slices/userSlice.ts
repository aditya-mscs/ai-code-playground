import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserState {
  isBusinessView: boolean
}

const initialState: UserState = {
  isBusinessView: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleView: (state) => {
      state.isBusinessView = !state.isBusinessView
    },
  },
})

export const { toggleView } = userSlice.actions
export default userSlice.reducer