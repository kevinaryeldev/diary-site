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
  extraReducers: (builder) => {
    builder.addCase(getPosts.fulfilled, (state, action) => {});
  },
});

export default postSlice.reducer;
