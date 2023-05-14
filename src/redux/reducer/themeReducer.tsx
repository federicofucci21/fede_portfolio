import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from "../store/index"

// Define a type for the slice state
interface themeState {
    theme: string
}

// Define the initial state using that type
const initialState: themeState = {
    theme: "light",
}

export const themeSlice = createSlice({
  name: 'theme',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    changeTheme: (state) => {
        if(state.theme === "light"){
            state.theme = "dark"
        }
        else{
            state.theme = "light"
        }
    },
  },
})

export const { changeTheme } = themeSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectTheme = (state: RootState ) => state.theme.theme

export default themeSlice.reducer