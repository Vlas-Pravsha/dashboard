import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { v1 } from "uuid";

interface CounterState {
  searchValue: string;
  filter: string;
  error: string;
  edit: string | null;
  value: string;
  tasks: Task[];
}
type Task = {
  id: string;
  title: string;
  status: boolean;
};
const initialState: CounterState = {
  searchValue: "",
  filter: "all",
  error: "",
  edit: null,
  value: "",
  tasks: [
    { id: v1(), title: "First task", status: true },
    { id: v1(), title: "Second task", status: false },
  ],
};

export const NodeSlice = createSlice({
  name: "node",
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setFilter(state, action: PayloadAction<string>) {
      state.filter = action.payload;
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    setEdit(state, action: PayloadAction<string | null>) {
      state.edit = action.payload;
    },
    setValue(state, action: PayloadAction<string>) {
      state.value = action.payload;
    },
    setTasks(state, action: PayloadAction<Task[]>) {
      state.tasks = action.payload;
    },
  },
});

export const {
  setSearchValue,
  setFilter,
  setError,
  setEdit,
  setValue,
  setTasks,
} = NodeSlice.actions;

export default NodeSlice.reducer;
// ще не добавив до проэкта