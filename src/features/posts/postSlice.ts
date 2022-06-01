import api from "../../utils/api";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk(
  "/posts/getPosts",
  async (dispatch, getState) => {
    return await api
      .get("/posts")
      .then((response) => {
        return response.data;
      })
      .catch((e) => console.log(e));
  }
);

interface PostsState {
  posts: [];
  status: "idle" | "loading" | "sucess" | "failed";
}

const initialState = {
  posts: [],
  status: "idle",
} as PostsState;

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    increment(state, action: PayloadAction<number>) {},
  },
  extraReducers: (builder) => {
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.status = "sucess";
      state.posts = action.payload;
    });
    builder.addCase(getPosts.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(getPosts.rejected, (state) => {
      state.status = "failed";
    });
  },
});

export default postSlice.reducer;
