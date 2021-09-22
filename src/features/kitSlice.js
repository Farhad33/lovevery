import { createSlice } from "@reduxjs/toolkit";

export const kitSlice = createSlice({
    name: 'kit',
    initialState: {
        kit: {},
        msg: ''
    },
    reducers: {
      selectKit: (state, action) => state = action.payload
    },
})

export default kitSlice.reducer;
export const { selectKit } = kitSlice.actions;