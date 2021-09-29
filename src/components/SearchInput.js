import { useContext } from "react";
import styled from "styled-components";
import { SearchIcon } from "../assets/icons";
import { SearchContext } from "../context/SearchContext";

const SearchInput = () => {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  return (
    <Container>
      <SearchIcon />
      <Input
        type="text"
        placeholder="Search here ..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
    </Container>
  );
};

export default SearchInput;

const Container = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const Input = styled.input`
  background-color: #f4f4f4;
  padding-left: 20px;
  border: none;
  outline: none;
`;
