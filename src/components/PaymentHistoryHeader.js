import { useState } from "react";
import styled from "styled-components";
import { Text } from "../assets/styled";
import { ChevronBottom, DateIcon } from "../assets/icons";
import { Popover } from "@material-ui/core";
import { DatePicker } from "@material-ui/pickers";

const PaymentHistoryHeader = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const dateToString = (date) => {
    const day = ("0" + date.getDate()).slice(-2);
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

  return (
    <Container>
      <TextArea>
        <Text weight="500" size="20px" lineHeight="30px" color="#353751">
          Payment History
        </Text>
        <Text size="12px" lineHeight="18px" color="#969ba0">
          Lorem ipsum dolor sit amet
        </Text>
      </TextArea>
      <Filter onClick={handleClick}>
        <DateIcon />
        <Text weight="500" size="14px" lineHeight="21px" color="#353751">
          {props.selectedDate == null
            ? "Filter Date"
            : dateToString(props.selectedDate)}
        </Text>
        <ChevronBottom />
      </Filter>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <DatePicker
          value={props.selectedDate}
          onChange={(date) => {
            props.setSelectedDate(date);
            handleClose();
          }}
          variant="static"
        ></DatePicker>
        <ClearButton
          onClick={() => {
            props.setSelectedDate(null);
            handleClose();
          }}
        >
          Filtreyi Temizle
        </ClearButton>
      </Popover>
    </Container>
  );
};

export default PaymentHistoryHeader;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 150px;
  position: relative;

  :hover {
    cursor: pointer;
  }
`;

const TextArea = styled.div``;

const ClearButton = styled.div`
  background: #1eaae7;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  color: #ffffff;
  :hover {
    cursor: pointer;
  }
  margin: 0 20px 10px;
`;
