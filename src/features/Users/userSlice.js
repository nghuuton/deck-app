import { createSlice } from "@reduxjs/toolkit";

const sliceUser = createSlice({
  name: "User",
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
  },
});

const { actions, reducer } = sliceUser;
export const { addUser } = actions;
export default reducer;
