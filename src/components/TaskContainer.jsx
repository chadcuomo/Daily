const TaskContainer = ({ heading, children }) => {
  return (
    <div className="bg-white flex flex-col gap-8 shadow-lg border-gray-300 w-full rounded-xl px-6 py-10 max-h-[750px] overflow-hidden overflow-y-scroll">
      <h6 className="text-lg font-medium text-slate-600">{heading}</h6>
      {children}
    </div>
  );
};

export default TaskContainer;
