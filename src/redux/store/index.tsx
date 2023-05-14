import { configureStore } from '@reduxjs/toolkit'

import themeReducer from '../reducer/themeReducer'
import langReducer from '../reducer/langReducer';

export const store = configureStore({ 
  reducer: {
    theme: themeReducer,
    lang: langReducer,

  }
})
// The store now has redux-thunk added and the Redux DevTools Extension is turned on

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;