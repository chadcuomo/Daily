import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import TaskContainer from "./TaskContainer";
import FilterInput from "./FIlterInput";

const TodaysTasks = ({ list, setList }) => {
  const [search, setSearch] = useState("");
  const selectedItems = list.filter((item) => item.selected);

  const filteredList = selectedItems.filter((item) =>
    item.item.toLowerCase().includes(search.toLowerCase())
  );

  const handleComplete = (id) => {
    list.find((item) => item.id === id && (item.complete = !item.complete));
    setList([...list]);
  };

  const handleRemoveAll = () => {
    list.forEach((item) => ((item.selected = false), (item.complete = false)));
    setList([...list]);
  };

  const handleRemove = (id) => {
    list.find((item) => item.id === id && (item.selected = false));
    setList([...list]);
  };

  return (
    <TaskContainer heading="Today's tasks.">
      {selectedItems.length > 0 ? (
        <>
          <div className="flex flex-col gap-4">
            <FilterInput setSearch={setSearch} />
            <button
              className="text-sm w-36 bg-[#F04244] text-white px-2 h-8 rounded-md"
              onClick={() => handleRemoveAll()}
            >
              Remove all items.
            </button>
          </div>
          {filteredList.map((item) => (
            <div
              key={item.id}
              className="sm:flex w-full justify-between items-center"
            >
              <div
                className={`ml-3 text-sm leading-6 ${
                  item.complete && "line-through"
                }`}
              >
                <label htmlFor="comments" className="font-medium text-gray-900">
                  {item.item}
                </label>
                <p id="comments-description" className="text-gray-500">
                  {item.description}
                </p>
              </div>
              <div className="pl-3 pt-2 sm:p-0 flex items-center gap-4">
                <button
                  className={`text-sm ${
                    item.complete ? "bg-green-600" : "bg-[#F04244]"
                  } text-white px-2 h-8 rounded-md`}
                  onClick={() => handleComplete(item.id)}
                >
                  done{item.complete ? "." : "?"}
                </button>
                <XMarkIcon
                  className="w-5 h-5"
                  onClick={() => handleRemove(item.id)}
                />
              </div>
            </div>
          ))}
        </>
      ) : (
        <p className="text-center mt-20 text-lg font-medium text-slate-600">
          No items selected.
        </p>
      )}
    </TaskContainer>
  );
};

export default TodaysTasks;
