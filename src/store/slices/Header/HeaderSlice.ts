import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface CounterState {
  changeThemeImg: boolean;
  ProfileIsOpen: boolean;
  navOpen: boolean;
}

const initialState: CounterState = {
  changeThemeImg: false,
  ProfileIsOpen: false,
  navOpen: true,
};

export const HeaderSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setChangeThemeImg(state, action: PayloadAction<boolean>) {
      state.changeThemeImg = action.payload;
    },
    ProfileIsOpen(state, action: PayloadAction<boolean>) {
      state.ProfileIsOpen = action.payload;
    },
    setNavOpen: (state, action: PayloadAction<boolean>) => {
      state.navOpen = action.payload;
    },
  },
});

export const { setChangeThemeImg, ProfileIsOpen, setNavOpen } =
  HeaderSlice.actions;

export default HeaderSlice.reducer;
