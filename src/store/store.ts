import { configureStore } from "@reduxjs/toolkit";
import DashboardSlice from "./slices/Dashboard/DashboardSlice";
import SettingsSlice from "./slices/Settings/SettingsSlice";
import SidebarSlice from "./slices/Sidebar/SidebarSlice";
import HeaderSlice from "./slices/Header/HeaderSlice";
import NodeSlice from "./slices/Node/NodeSlice";

export const store = configureStore({
  reducer: {
    dashboard: DashboardSlice,
    settings: SettingsSlice,
    sidebar: SidebarSlice,
    header: HeaderSlice,
    node: NodeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
