import { getFilteredTasks } from "@/helpers/get-filtered-tasks";
import { getSortedTasks } from "@/helpers/get-sorted-tasks";
import { Task } from "@/interface/Task";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  deleteTask,
  editTask,
  reOrderTasks,
  setDnD,
} from "@/redux/slices/task-slice";
import React, { useState } from "react";
import TaskItem from "./task-item";

export function TaskList() {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector((state) => state.tasks);
  const filter = useAppSelector((state) => state.filter);
  const sort = useAppSelector((state) => state.sort);
  const showDnD = useAppSelector((state) => state.showDnD);
  const [dragId, setDragId] = useState<string>();
  const [searchQuery, setSearchQuery] = useState<string>();
  const filteredTasks = getFilteredTasks(tasks, filter);
  const sortedTasks = getSortedTasks(filteredTasks, sort);

  const searchedTasks = sortedTasks.filter((task) =>
    searchQuery
      ? task.description.toLowerCase().includes(searchQuery.toLowerCase())
      : sortedTasks
  );

  const handleTrash = (id: string) => {
    dispatch(deleteTask(id));
  };
  const handleEdit = (updatedTask: Partial<Task>) => {
    dispatch(editTask(updatedTask));
  };

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    setDragId(e.currentTarget.id);
  };
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    const draggedTask = searchedTasks.find((task) => task.id === dragId);
    const droppedTask = searchedTasks.find(
      (task) => task.id === e.currentTarget.id
    );
    if (!draggedTask || !droppedTask) return;

    const draggedTaskOrder = draggedTask.order;
    const droppedTaskOrder = droppedTask.order;

    const newTaskState = searchedTasks.map((task) => {
      if (task.id === dragId) {
        return { ...task, order: droppedTaskOrder };
      }
      if (task.id === e.currentTarget.id) {
        return { ...task, order: draggedTaskOrder };
      }
      return task;
    });

    dispatch(setDnD(true));
    dispatch(reOrderTasks(newTaskState));
  };

  return (
    <>
      <input
        type="text"
        className="bg-[#EDEDF7] px-2 py-2 mr-2 rounded-md w-full mb-2"
        placeholder="Search tasks..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="flex flex-col w-full p-4 bg-[#EDEDF7] rounded-md space-y-4">
        {searchedTasks.length ? (
          showDnD ? (
            searchedTasks
              .sort((a, b) => a.order - b.order)
              .map((task) => (
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
            searchedTasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                handleDrag={handleDrag}
                handleDrop={handleDrop}
                handleEdit={handleEdit}
                handleTrash={handleTrash}
              />
            ))
          )
        ) : (
          <>
            <p className="text-sm text-gray-500">No tasks yet</p>
            <p className="text-sm text-gray-500">Press "Add Task" to begin</p>
          </>
        )}
      </div>
    </>
  );
}
