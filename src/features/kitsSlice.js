import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const networkRequest = axios.create({
  baseURL: 'https://api.jsonbin.io',
  timeout: 2000,
  headers: {'secret-key': '$2b$10$70NPsTZKGGlBkjT7zvl9O.t7s2QhXYHHqmW94oES3yfPz/RjbLjNa'}
});

export const getKits = createAsyncThunk("kits/get", async () => {
  const res = await networkRequest.get('/b/61460befaa02be1d444ab396/2');
  return res.data;
});

export const kitsSlice = createSlice({
  name: "kits",
  initialState: {
    kits: [],
    pending: false,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [getKits.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [getKits.fulfilled]: (state, action) => {
      state.kits = action.payload;
      state.pending = false;
    },
    [getKits.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export default kitsSlice.reducer;