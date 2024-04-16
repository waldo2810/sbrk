import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { deleteTask, reOrderTasks } from "@/redux/slices/task-slice";
import React, { useState } from "react";
import TaskItem from "./task-item";

export function TaskList() {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector((state) => state.tasks);
  const [dragId, setDragId] = useState<string>();

  const handleTrash = (id: string) => {
    dispatch(deleteTask(id));
  };

  const handleEdit = (id: string) => {
    dispatch(deleteTask(id));
  };
  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    setDragId(e.currentTarget.id);
  };
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    const dragTask = tasks.find((box) => box.id === dragId);
    const dropTask = tasks.find((box) => box.id === e.currentTarget.id);
    if (!dragTask || !dropTask) return;

    const dragBoxOrder = dragTask.order;
    const dropBoxOrder = dropTask.order;

    const newTaskState = tasks.map((box) => {
      if (box.id === dragId) {
        box.order = dropBoxOrder;
      }
      if (box.id === e.currentTarget.id) {
        box.order = dragBoxOrder;
      }
      return box;
    });

    dispatch(reOrderTasks(newTaskState));
  };

  return (
    <div className="flex flex-col w-full p-4 bg-[#EDEDF7] rounded-md space-y-4">
      {tasks.length ? (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            handleDrag={handleDrag}
            handleDrop={handleDrop}
            handleEdit={handleEdit}
            handleTrash={handleTrash}
          />
        ))
      ) : (
        <>
          <p className="text-sm text-gray-500">No tasks yet</p>
          <p className="text-sm text-gray-500">Press "Add Task" to begin</p>
        </>
      )}
    </div>
  );
}
