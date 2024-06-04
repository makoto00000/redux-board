import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostsData } from "../DammyData";

type PostData = {
  id: number;
  name: string;
  content: string;
};

export const postSlice = createSlice({
  name: "posts",
  initialState: {
    value: PostsData,
  },
  reducers: {
    addPost: (state, action: PayloadAction<PostData>) => {
      state.value.push(action.payload);
    },
    deletePost: (state, action: PayloadAction<{id: number}>) => {
      state.value = state.value.filter((post) => post.id !== action.payload.id);
    }
  },
});

export default postSlice.reducer;
export const {addPost, deletePost} = postSlice.actions;
