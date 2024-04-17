import { FormEventHandler } from "react";
import { Button } from "./ui/button";

interface CreateTaskFormProps {
  handleSubmit: FormEventHandler<HTMLFormElement>;
}

export function CreateTaskForm({ handleSubmit }: CreateTaskFormProps) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4">
        <label>What</label>
        <input
          required
          name="description"
          type="text"
          placeholder="Do laundry"
          className="bg-[#EDEDF7] px-5 py-2 mr-2 rounded-md"
        />
        <label>When</label>
        <div className="flex gap-2 items-center justify-between">
          <input
            required
            name="date"
            type="date"
            className="bg-[#EDEDF7] px-5 py-2 mr-2 rounded-md w-full"
          />
          <input
            required
            name="time"
            type="time"
            className="bg-[#EDEDF7] px-5 py-2 mr-2 rounded-md w-full"
          />
        </div>
        <Button type="submit">Create</Button>
      </div>
    </form>
  );
}
