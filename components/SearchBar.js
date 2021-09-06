function SearchBar({ ...rest }) {
  return (
    <div className="flex items-center mb-16 w-72 bg-gray-900">
      <input
        className="bg-gray-700 text-white border-none p-4 rounded-md outline-none h-full w-full placeholder-white"
        type="text"
        {...rest}
      />
    </div>
  );
}

export default SearchBar;
