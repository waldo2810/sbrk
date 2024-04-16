import { Task } from "@/interface/Task";
import { Pencil, Trash } from "lucide-react";

interface TaskItemProps {
  task: Task;
  handleDrop: any;
  handleDrag: any;
}

export default function TaskItem(props: TaskItemProps) {
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
        <div className="bg-[#EFEFEF] rounded-md p-2">
          <Trash fill="#555555" className="text-[#555555]" />
        </div>
        <div className="bg-[#EFEFEF] rounded-md p-2">
          <Pencil fill="#555555" className="text-[#555555]" />
        </div>
      </div>
    </div>
  );
}
