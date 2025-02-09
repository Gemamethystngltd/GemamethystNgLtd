const Search = ({ searchQuery, handlesearch }) => {
  return (
    <div className="seach border-1 border  border-black overflow-hidden rounded-md shadow-sm ">
      <input
        type="text"
        className="p-3 w-full tablet:p-2 tablet:placeholder:text-[14px]"
        name="search"
        value={searchQuery}
        onChange={handlesearch}
        placeholder="Search..."
      />
    </div>
  );
};

export default Search;
