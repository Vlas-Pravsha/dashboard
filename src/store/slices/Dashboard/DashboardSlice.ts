import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface CounterState {
  activeItem: string;
}

const initialState: CounterState = {
  activeItem: "Coins",
};

export const DashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    changeActiveItem(state, action: PayloadAction<string>) {
      state.activeItem = action.payload;
    },
  },
});

export const { changeActiveItem } = DashboardSlice.actions;

export default DashboardSlice.reducer;
