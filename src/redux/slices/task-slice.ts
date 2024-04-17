import { Task } from "@/interface/Task";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface InitialState {
  tasks: Task[];
  currentOrder: number;
  filter: "All" | "ToDo" | "Completed";
  sort: "Oldest" | "MostRecent" | "NameAsc" | "NameDesc";
  showDnD: boolean;
}

const initialState: InitialState = {
  tasks: [],
  currentOrder: 0,
  filter: "All",
  sort: "MostRecent",
  showDnD: false,
};

const taskSlice = createSlice({
  name: "taskSlice",
  initialState,
  reducers: {
    createTask: (state, action: PayloadAction<Task>) => {
      action.payload.checked = false;
      state.tasks.push(action.payload);
      state.currentOrder++;
    },
    editTask: (state, action: PayloadAction<Partial<Task>>) => {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.id,
      );
      if (index !== -1) {
        state.tasks[index] = { ...state.tasks[index], ...action.payload };
      }
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      if (state.currentOrder !== 0) {
        state.currentOrder--;
      }
    },
    reOrderTasks: (state, action: PayloadAction<Task[]>) => {
      state.tasks = action.payload;
    },
    setFilter: (state, action: PayloadAction<InitialState["filter"]>) => {
      state.filter = action.payload;
    },
    setSort: (state, action: PayloadAction<InitialState["sort"]>) => {
      state.sort = action.payload;
    },
    setDnD: (state, action: PayloadAction<boolean>) => {
      state.showDnD = action.payload;
    },
  },
});

export const {
  createTask,
  deleteTask,
  editTask,
  reOrderTasks,
  setFilter,
  setSort,
  setDnD,
} = taskSlice.actions;
export default taskSlice.reducer;
