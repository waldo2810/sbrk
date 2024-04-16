import { useAppDispatch } from "@/redux/hooks";
import { createTask } from "@/redux/slices/task-slice";
import { Plus } from "lucide-react";
import { FormEventHandler } from "react";
import { v4 as uuidv4 } from "uuid";
import { CreateTaskForm } from "./create-task-form";
import { Filters } from "./filters";
import Button from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

export function AddTask() {
  const dispatch = useAppDispatch();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const what = formData.get("what") as string;
    const date = formData.get("date") as string;
    const time = formData.get("time") as string;
    if (!what || !date || !time) return;

    const id = uuidv4();
    dispatch(createTask({ id, what, date: new Date(date), time }));
  };

  return (
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
            <DialogDescription>What do you want to complete?</DialogDescription>
          </DialogHeader>
          <CreateTaskForm handleSubmit={handleSubmit} />
        </DialogContent>
      </Dialog>
      <Filters />
    </div>
  );
}
