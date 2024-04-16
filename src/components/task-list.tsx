import { Pencil, Trash } from "lucide-react";

export function TaskList() {
  return (
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
  );
}
