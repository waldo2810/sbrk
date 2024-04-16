import { Task } from "@/interface/Task";
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

interface TaskItemProps {
  task: Task;
  handleDrop: React.DragEventHandler<HTMLDivElement>;
  handleDrag: React.DragEventHandler<HTMLDivElement>;
  handleTrash: (id: string) => void;
  handleEdit: (id: string) => void;
}

export default function TaskItem(props: TaskItemProps) {
  const [open, setOpen] = useState(false);

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
        />
        <div className="flex flex-col items-start">
          <span>{props.task.description}</span>
          <span className="text-gray-500">
            {props.task.time}, {new Date(props.task.date).toDateString()}
          </span>
        </div>
      </div>
      <div className="flex gap-2">
        <div
          className="bg-[#EFEFEF] rounded-md p-1"
          onClick={() => props.handleTrash(props.task.id)}
        >
          <Trash fill="#555555" className="text-[#555555]" />
        </div>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <div className="bg-[#EFEFEF] rounded-md p-1">
              <Pencil fill="#555555" className="text-[#555555]" />
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit Task</DialogTitle>
            </DialogHeader>
            <EditTaskForm
              task={props.task}
              handleSubmit={() => props.handleEdit}
            />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
