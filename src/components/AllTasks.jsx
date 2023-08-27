import { useState } from "react";

import TaskContainer from "./TaskContainer";
import CheckboxInput from "./CheckboxInput";
import FilterInput from "./FIlterInput";

const AllTasks = ({ list, setList }) => {
  const [search, setSearch] = useState("");

  const filteredList = list.filter((item) =>
    item.item.toLowerCase().includes(search.toLowerCase())
  );

  const handleAddAll = () => {
    list.forEach((item) => (item.selected = !item.selected));
    setList([...list]);
  };

  return (
    <TaskContainer heading="All tasks.">
      <div className="flex flex-col gap-4">
        <FilterInput setSearch={setSearch} />
        <button
          className="text-sm w-36 bg-[#F04244] text-white px-2 h-8 rounded-md"
          onClick={() => handleAddAll()}
        >
          Add all items.
        </button>
      </div>
      <p className="text-center text-sm text-slate-600">
        Select items from the list below to add to your daily task list.
      </p>
      {filteredList.map((item) => (
        <div key={item.id}>
          <CheckboxInput listItem={item} list={list} setList={setList} />
        </div>
      ))}
    </TaskContainer>
  );
};

export default AllTasks;
