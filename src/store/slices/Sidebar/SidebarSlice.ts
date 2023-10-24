import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { v1 } from "uuid";

interface CounterState {
  flagsArr: FlagItem[];
  category: number;
  isOpen: boolean;
  crudOpen: boolean;
  flagOpen: boolean;
  changeValue: string;
}
type FlagItem = {
  id: string;
  src: string;
  title: string;
};

const initialState: CounterState = {
  isOpen: false,
  category: 0,
  flagOpen: false,
  crudOpen: false,
  changeValue: "",
  flagsArr: [
    {
      id: v1(),
      src: "/Img/SideBarImg/Flags/ua.svg",
      title: "Ukraine",
    },
    {
      id: v1(),
      src: "/Img/SideBarImg/Flags/ai.svg",
      title: "Azerbaijan",
    },
    {
      id: v1(),
      src: "/Img/SideBarImg/Flags/cz.svg",
      title: "Czech",
    },
    {
      id: v1(),
      src: "/Img/SideBarImg/Flags/id.svg",
      title: "Indonesia",
    },
    {
      id: v1(),
      src: "/Img/SideBarImg/Flags/au.svg",
      title: "Australia",
    },
  ],
};

export const SidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setIsOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
    setFlagOpen: (state, action: PayloadAction<boolean>) => {
      state.flagOpen = action.payload;
    },
    setFlagChangeValue: (state, action: PayloadAction<string>) => {
      state.changeValue = action.payload;
    },
    setCrudOpen: (state, action: PayloadAction<boolean>) => {
      state.crudOpen = action.payload;
    },
    setCategory: (state, action: PayloadAction<number>) => {
      state.category = action.payload;
    },
  },
});

export const {
  setIsOpen,
  setFlagChangeValue,
  setFlagOpen,
  setCrudOpen,
  setCategory,
} = SidebarSlice.actions;

export default SidebarSlice.reducer;
