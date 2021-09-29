import { createContext, useState } from "react";

export const SearchContext = createContext();

const SearchContextComponent = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const value = {
    searchTerm,
    setSearchTerm,
  };

  return (
    <SearchContext.Provider value={value}>
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchContextComponent;
