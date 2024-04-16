import "./App.css";
import { AddTask } from "./components/add-task";
import { TaskList } from "./components/task-list";

function App() {
  return (
    <div className="h-screen w-full flex items-center">
      <div className="w-[80%] h-[80%] mx-auto">
        <h1 className="uppercase font-black text-[#656582] text-3xl pb-10">
          Todo List
        </h1>
        <AddTask />
        <input
          type="text"
          className="bg-[#CCCDDF] px-2 py-2 mr-2 rounded-md w-full mb-2"
          placeholder="Search tasks..."
        />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
