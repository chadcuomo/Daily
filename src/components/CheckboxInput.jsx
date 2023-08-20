const CheckboxInput = ({ listItem, list, setList }) => {
  const { id, item, description, selected } = listItem;
  const handleCheckbox = (e) => {
    list.find((item) => item.id === id && (item.selected = !item.selected));
    setList([...list]);
  };

  return (
    <div key={id} className="relative flex items-start">
      <div className="flex h-6 items-center">
        <input
          id="comments"
          aria-describedby="comments-description"
          name="comments"
          type="checkbox"
          onChange={(e) => handleCheckbox(e)}
          checked={selected}
          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
        />
      </div>
      <div className="ml-3 text-sm leading-6">
        <label htmlFor="comments" className="font-medium text-gray-900">
          {item}
        </label>
        <p id="comments-description" className="text-gray-500">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CheckboxInput;
