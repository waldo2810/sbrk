import "./App.css";
import { AddTask } from "./components/add-task";
import { TaskList } from "./components/task-list";

function App() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="w-full md:w-[60%] h-[80%] mx-auto">
        <h1 className="uppercase font-black text-[#656582] text-3xl pb-10">
          Todo List
        </h1>
        <AddTask />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
