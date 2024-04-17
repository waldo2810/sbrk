import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { createTask } from "@/redux/slices/task-slice";
import { Plus } from "lucide-react";
import { FormEventHandler, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { CreateTaskForm } from "./create-task-form";
import { Filters } from "./filters";
import { Button } from "./ui/button";
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
  const currentOrder = useAppSelector((state) => state.currentOrder);
  const [open, setOpen] = useState(false);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const description = formData.get("description") as string;
    const date = formData.get("date") as string;
    const time = formData.get("time") as string;

    if (!description || !date || !time) return;

    const id = uuidv4();
    dispatch(
      createTask({
        id,
        description,
        date,
        time,
        order: currentOrder,
        checked: false,
      }),
    );
    setOpen(false);
  };

  return (
    <div className="flex items-center justify-between w-full my-2">
      <Dialog open={open} onOpenChange={setOpen}>
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
