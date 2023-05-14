import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from "../store/index"

// Define a type for the slice state
interface langState {
    lang: string
}

// Define the initial state using that type
const initialState: langState = {
    lang: "english",
}

export const langSlice = createSlice({
  name: 'lang',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    changeLang: (state) => {
        if(state.lang === "english"){
            state.lang = "spanish"
        }
        else{
            state.lang = "english"
        }
    },
  },
})

export const { changeLang } = langSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectTheme = (state: RootState ) => state.lang.lang

export default langSlice.reducer