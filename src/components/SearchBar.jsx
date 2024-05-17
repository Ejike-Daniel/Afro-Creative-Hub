import { IoSearchSharp } from "react-icons/io5";
const SearchBar = () => {
  return (
    <form className="w-[80%] mx-auto" >
      <div className="relative flex items-center w-full">
        <IoSearchSharp
          className={
            "w-6 absolute left-2 bottom-[11px] md:left-2 h-6 text-smokeyGrey focus-within:text-smokeyGrey pointer-events-none"
          }
        />
        <input
          type="search"
          placeholder="Search for creative work"
          name="Search"
          className="pr-3 pl-10 md:px-12 py-3 w-full placeholder:text-smokeyGrey font-semibold rounded-2xl text-midnight"
          style={{
            outline: "none",
            WebkitAppearance: "none",
            appearance: "none",
          }}
        />
      </div>
    </form>
  );
};

export default SearchBar;
