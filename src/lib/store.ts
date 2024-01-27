import { configureStore } from "@reduxjs/toolkit";
import reducer from "@/lib/redux/reducer";

const store = configureStore({
  reducer,
});

export const makeStore = () => {
  return store;
};

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppStore = ReturnType<typeof makeStore>;

export default store;
