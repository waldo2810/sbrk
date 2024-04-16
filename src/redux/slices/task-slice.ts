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
    reOrderTasks: (state, action) => {
      state.tasks = action.payload;
    },
  },
});

export const { createTask, deleteTask, editTask, reOrderTasks } =
  taskSlice.actions;
export default taskSlice.reducer;
