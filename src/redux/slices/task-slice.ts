import { Task } from "@/interface/Task";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitialState {
  tasks: Task[];
}

const initialState: InitialState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: "taskSlice",
  initialState,
  reducers: {
    createTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id === action.payload);
    },
  },
});

export const { createTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
