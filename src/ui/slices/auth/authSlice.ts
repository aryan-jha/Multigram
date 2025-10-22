import { AuthModal } from "@data/models/authModal";
import { createSlice } from "@reduxjs/toolkit";

/**
 * @description Defined initial states of auth slicke
 */
const initialState: AuthModal = new AuthModal();

/**
 * @var authSlice
 * @description Created a auth slicke and defined required auth actions
 */
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
  },
});


export default authSlice.reducer;