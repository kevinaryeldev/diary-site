import api from "../../utils/api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk(
  "/posts/getPosts",
  async (dispatch, getState) => {
    return await api
      .get("/posts")
      .then()
      .catch((e) => console.log(e));
  }
);

const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    status: null,
  },
  reducers: {},
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.status = "loading";
    },
    [getPosts.fulfilled]: (state, action) => {
      state.status = "sucess";
      state.users = action.payload;
    },
    [getPosts.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export default postSlice.reducer;
