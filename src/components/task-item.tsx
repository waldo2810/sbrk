import { Task } from "@/interface/Task";
import { cn } from "@/lib/utils";
import { useAppDispatch } from "@/redux/hooks";
import { Pencil, Trash } from "lucide-react";
import { useState } from "react";
import { EditTaskForm } from "./edit-task-form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { editTask } from "@/redux/slices/task-slice";

interface TaskItemProps {
  task: Task;
  handleDrop: React.DragEventHandler<HTMLDivElement>;
  handleDrag: React.DragEventHandler<HTMLDivElement>;
  handleEdit: (updatedTask: Partial<Task>) => void;
  handleTrash: (id: string) => void;
}

export default function TaskItem(props: TaskItemProps) {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const handleCheck: React.ChangeEventHandler<HTMLInputElement> = () => {
    dispatch(editTask({ id: props.task.id, checked: !props.task.checked }));
  };

  return (
    <div
      draggable
      id={props.task.id}
      onDrop={props.handleDrop}
      onDragStart={props.handleDrag}
      className="flex items-center justify-between bg-white p-4 rounded-md cursor-grab"
    >
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          className="w-6 h-6 checked:font-thin bg-[#CCCDDF]"
          onChange={handleCheck}
        />
        <div className="flex flex-col items-start">
          <span
            className={props.task.checked ? "line-through text-gray-300" : ""}
          >
            {props.task.description}
          </span>
          <span
            className={cn(
              "text-gray-500",
              props.task.checked ? "line-through text-gray-300" : "",
            )}
          >
            {props.task.time}, {props.task.date}
          </span>
        </div>
      </div>
      <div className="flex gap-2">
        <div
          className="bg-[#EFEFEF] rounded-md p-1"
          onClick={() => props.handleTrash(props.task.id)}
        >
          <Trash className="text-[#555555] cursor-default hover:text-red-500" />
        </div>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <div className="bg-[#EFEFEF] rounded-md p-1">
              <Pencil className="text-[#555555] cursor-default" />
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit Task</DialogTitle>
            </DialogHeader>
            <EditTaskForm
              task={props.task}
              handleSubmit={props.handleEdit}
              setOpen={setOpen}
            />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
