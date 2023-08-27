import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const FilterInput = ({ setSearch }) => {
  return (
    <div className="relative flex text-gray-400 focus-within:text-gray-600 w-full">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
      </div>
      <input
        id="search"
        className="block w-2/3 rounded-lg bg-white border py-1.5 pl-10 pr-3 text-gray-900 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 sm:text-sm sm:leading-6"
        placeholder="Search"
        type="search"
        name="search"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default FilterInput;
