import { useState } from "react";

import { initialList } from "./mocks";
import AllTasks from "./components/AllTasks";
import TodaysTasks from "./components/TodaysTask";

const App = () => {
  const [list, setList] = useState(initialList);

  return (
    <div className="p-4">
      <h4 className="font-bold text-3xl text-[#F04244]">daily.</h4>
      <h1 className="py-5 text-center text-transparent mt-20 text-6xl font-bold bg-clip-text bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500">
        Let's get things done.
      </h1>
      <div className="flex w-full justify-center">
        <div className="flex w-full max-w-[1300px] mt-12 sm:flex-row sm:gap-4 flex-col justify-center gap-8">
          <AllTasks list={list} setList={setList} />
          <TodaysTasks list={list} setList={setList} />
        </div>
      </div>
    </div>
  );
};

export default App;
