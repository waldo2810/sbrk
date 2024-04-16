import { Task } from "@/interface/Task";
import { FormEventHandler } from "react";
import { Button } from "./ui/button";

interface EditTaskFormProps {
  task: Task;
  handleSubmit: (updatedTask: Partial<Task>) => void;
  setOpen: any;
}

export function EditTaskForm({
  handleSubmit,
  task,
  setOpen,
}: EditTaskFormProps) {
  const submitForm: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const description = formData.get("description") as string;
    const date = formData.get("date") as string;
    const time = formData.get("time") as string;

    if (!description || !date || !time) return;

    handleSubmit({ id: task.id, description, date, time });
    setOpen(false);
  };
  return (
    <form onSubmit={submitForm}>
      <div className="flex flex-col gap-4">
        <label>What</label>
        <input
          name="description"
          type="text"
          placeholder="Do laundry"
          className="bg-[#CCCDDF] px-5 py-2 mr-2 rounded-md"
          defaultValue={task.description}
        />
        <label>When</label>
        <div className="flex gap-2 items-center justify-between">
          <input
            name="date"
            type="date"
            className="bg-[#CCCDDF] px-5 py-2 mr-2 rounded-md w-full"
            defaultValue={task.date}
          />
          <input
            name="time"
            type="time"
            className="bg-[#CCCDDF] px-5 py-2 mr-2 rounded-md w-full"
            defaultValue={task.time}
          />
        </div>
        <Button type="submit">Edit</Button>
      </div>
    </form>
  );
}
