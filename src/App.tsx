import { Pencil, Plus, Trash } from "lucide-react";
import "./App.css";
import Button from "./components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog";

function App() {
  return (
    <div className="h-screen w-full flex items-center">
      <div className="w-[80%] h-[80%] mx-auto">
        <h1 className="uppercase font-black text-[#656582] text-3xl pb-10">
          Todo List
        </h1>
        <div className="flex items-center justify-between w-full my-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus />
                Add Task
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add Task</DialogTitle>
                <DialogDescription>
                  What do you want to complete?
                </DialogDescription>
              </DialogHeader>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target as HTMLFormElement);
                  console.log(formData.get("what"));
                  console.log(formData.get("date"));
                  console.log(formData.get("time"));
                }}
              >
                <div className="flex flex-col gap-4">
                  <label>What</label>
                  <input
                    name="what"
                    type="text"
                    placeholder="Do laundry"
                    className="bg-[#CCCDDF] px-5 py-2 mr-2 rounded-md"
                  />
                  <label>When</label>
                  <div className="flex gap-2 items-center justify-between">
                    <input
                      name="date"
                      type="date"
                      className="bg-[#CCCDDF] px-5 py-2 mr-2 rounded-md w-full"
                    />
                    <input
                      name="time"
                      type="time"
                      className="bg-[#CCCDDF] px-5 py-2 mr-2 rounded-md w-full"
                    />
                  </div>
                  <Button type="submit">Create</Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
          <div className="flex items-center justify-between gap-2">
            <input
              type="text"
              className="bg-[#CCCDDF] px-5 py-2 mr-2 rounded-md max-w-48"
            />
            <select className="bg-[#CCCDDF] px-2 py-2 rounded-md">
              <option>Sort by</option>
              <option>Oldest</option>
              <option>Most recent</option>
              <option>Name (A-Z)</option>
              <option>Name (Z-A)</option>
            </select>
            <select className="bg-[#CCCDDF] px-2 py-2 rounded-md">
              <option>Show All</option>
              <option>Show To do</option>
              <option>Show Completed</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col w-full p-4 bg-[#EDEDF7] rounded-md space-y-4">
          <div className="flex items-center justify-between bg-white p-4 rounded-md cursor-grab">
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                className="w-8 h-8 checked:font-thin bg-[#CCCDDF]"
              />
              <div className="flex flex-col">
                <span>Create a react project</span>
                <span className="text-gray-500">5:23 AM, 01/06/2022</span>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="bg-[#EFEFEF] rounded-md p-2">
                <Trash fill="#555555" className="text-[#555555]" />
              </div>
              <div className="bg-[#EFEFEF] rounded-md p-2">
                <Pencil fill="#555555" className="text-[#555555]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
