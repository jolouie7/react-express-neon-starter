import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

// Define a type for the slice state
interface UserState {
  isSignedIn: boolean;
  userEmail: string | null;
  loading: boolean;
  error: string | null;
}

// Define the initial state using that type
const initialState: UserState = {
  isSignedIn: false,
  userEmail: null,
  loading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
      state.error = null;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    signUpSuccess: (state, action: PayloadAction<string>) => {
      state.isSignedIn = true;
      state.userEmail = action.payload;
      state.loading = false;
      state.error = null;
    },
    signInSuccess: (state, action: PayloadAction<string>) => {
      state.isSignedIn = true;
      state.userEmail = action.payload;
      state.loading = false;
      state.error = null;
    },
    signOutSuccess: (state) => {
      state.isSignedIn = false;
      state.userEmail = null;
      state.loading = false;
      state.error = null;
    },
    checkAuthStatusSuccess: (state, action: PayloadAction<string>) => {
      state.isSignedIn = true;
      state.userEmail = action.payload;
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  setLoading,
  setError,
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  checkAuthStatusSuccess,
} = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
