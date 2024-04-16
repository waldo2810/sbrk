export function Filters() {
  return (
    <div className="flex items-center justify-between gap-2">
      <select className="bg-[#CCCDDF] px-2 py-2 rounded-md">
        <option>Sort by</option>
        <option>Oldest</option>
        <option>Most recent</option>
        <option>Name (asc)</option>
        <option>Name (desc)</option>
      </select>
      <select className="bg-[#CCCDDF] px-2 py-2 rounded-md">
        <option>Show</option>
        <option>All</option>
        <option>To do</option>
        <option>Completed</option>
      </select>
    </div>
  );
}
