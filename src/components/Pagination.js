import { usePagination } from "@material-ui/lab/Pagination";
import styled from "styled-components";
import { ChevronRight, ChevronLeft } from "../assets/icons";

const Pagination = (props) => {
  const { items } = usePagination({
    count: props.totalPageCount,
    onChange: (event, page) => {
      if (page > 0 && page <= props.totalPageCount) {
        props.setIndex(page);
      }
    },
  });

  return (
    <Container>
      {items.map(({ page, type, selected, ...item }, index) => {
        let children = null;
        if (type === "start-ellipsis" || type === "end-ellipsis") {
          children = <PaginationButton>…</PaginationButton>;
        } else if (type === "page") {
          children = (
            <PaginationButton active={selected} type="button" {...item}>
              {page}
            </PaginationButton>
          );
        } else {
          children = (
            <IconButton type="button" item={item} {...item}>
              {type === "previous" ? (
                <ChevronLeft disable={item.disabled} />
              ) : (
                <ChevronRight disable={item.disabled} />
              )}
            </IconButton>
          );
        }
        return <div key={index}>{children}</div>;
      })}
    </Container>
  );
};

export default Pagination;

const Container = styled.div`
  display: flex;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    cursor: ${(props) => (props.item.disabled ? "auto" : "pointer")};
  }
`;

const PaginationButton = styled.div`
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.active ? "#353751" : "#1eaae7")};
  box-shadow: ${(props) =>
    props.active ? "0 7px 16px rgba(0, 0, 0, 0.14)" : "none"};
  background: ${(props) => (props.active ? "#ffffff" : "none")};
  :hover {
    cursor: ${(props) => (props.active ? "" : "pointer")};
  }
`;
