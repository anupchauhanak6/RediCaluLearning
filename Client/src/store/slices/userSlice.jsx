import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userData: null,
  }, 
  reducers: {
    userinfo(state, action) {
      state.userData = action.payload;
    },
    updateUserProfile(state, action) {
      if (state.userData && state.userData.user) {
        state.userData. user = {
          ...state.userData.user,
          ...action.payload
        };
      }
    },
    clearUser(state) {
      state.userData = null;
    },
  }
});

export const { userinfo, updateUserProfile, clearUser } = userSlice.actions;
export default userSlice.reducer;