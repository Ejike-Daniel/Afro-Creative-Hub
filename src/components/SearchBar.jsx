import { IoSearchSharp } from "react-icons/io5";
const SearchBar = () => {
  return (
    <form action="">
      <div className=" relative flex items-center ">
        <IoSearchSharp
          className={
            "w-6 absolute left-2 bottom-[11px] md:left-2 h-6 text-smokeyGrey focus-within:text-smokeyGrey pointer-events-none"
          }
        />
        <input
          type="search"
          placeholder="Search for creative work"
          name="Search"
          className="pr-3 pl-10 md:px-12 py-3 w-[70%] placeholder:text-smokeyGrey font-semibold rounded-2xl text-midnight"
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
