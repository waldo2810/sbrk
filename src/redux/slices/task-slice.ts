import { Task } from "@/interface/Task";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitialState {
  tasks: Task[];
  currentOrder: number;
}

const initialState: InitialState = {
  tasks: [],
  currentOrder: 0,
};

const taskSlice = createSlice({
  name: "taskSlice",
  initialState,
  reducers: {
    createTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
      state.currentOrder++;
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id === action.payload);
      state.currentOrder--;
    },
    reOrderTasks: (state, action) => {
      state.tasks = action.payload;
    },
  },
});

export const { createTask, deleteTask, reOrderTasks } = taskSlice.actions;
export default taskSlice.reducer;
