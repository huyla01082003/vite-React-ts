import { configureStore } from '@reduxjs/toolkit'
import modalReducer from '../slice/Modal'
// ...

const store = configureStore({
  reducer: {
    counter: modalReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export default store;