import { useAppDispatch } from "@/redux/hooks";
import { InitialState, setFilter, setSort } from "@/redux/slices/task-slice";

export function Filters() {
  const dispatch = useAppDispatch();
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setFilter(e.target.value as InitialState["filter"]));
  };
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSort(e.target.value as InitialState["sort"]));
  };

  return (
    <div className="flex items-center justify-between gap-2">
      <select
        className="bg-[#CCCDDF] px-2 py-2 rounded-md"
        onChange={handleSortChange}
      >
        <option>Sort by</option>
        <option value="Oldest">Oldest</option>
        <option value="MostRecent">Most recent</option>
        <option value="NameAsc">Name (asc)</option>
        <option value="NameDesc">Name (desc)</option>
      </select>
      <select
        className="bg-[#CCCDDF] px-2 py-2 rounded-md"
        onChange={handleFilterChange}
      >
        <option>Show</option>
        <option value="All">All</option>
        <option value="ToDo">To do</option>
        <option value="Completed">Completed</option>
      </select>
    </div>
  );
}
