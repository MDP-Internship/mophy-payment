import styled from "styled-components";
import { useState } from "react";
import { Text } from "../assets/styled";
import { OptionsIcon } from "../assets/icons";
import Popover from "@material-ui/core/Popover";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import EditModal from "../commons/EditModal";
import { useDispatch } from "react-redux";
import { deletePayment } from "../store/actions";

const PaymentHistoryTableStatus = (props) => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
    setAnchorEl(null);
  };
  const handleModalClose = () => {
    setModalOpen(false);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <StatusArea>
      <StatusContainer status={props.payment.status}>
        <Text weight="500" size="16px" lineHeight="24px" color="#ffffff">
          {props.payment.status.charAt(0).toUpperCase() +
            props.payment.status.slice(1)}
        </Text>
      </StatusContainer>
      <OptionsIconDiv onClick={handleClick}>
        <OptionsIcon />
      </OptionsIconDiv>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "center",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "right",
        }}
      >
        <PopoverContent>
          <ContentItem onClick={handleModalOpen}>
            <Text weight="400" size="20px" color="#353751">
              Edit
            </Text>
            <EditIcon htmlColor="#1EAAE7" />
          </ContentItem>
          <ContentItem
            onClick={() => dispatch(deletePayment(props.payment.id))}
          >
            <Text weight="400" size="20px" color="#353751">
              Delete
            </Text>
            <DeleteIcon htmlColor="red" />
          </ContentItem>
        </PopoverContent>
      </Popover>
      <EditModal
        open={modalOpen}
        handleClose={handleModalClose}
        payment={props.payment}
      />
    </StatusArea>
  );
};

export default PaymentHistoryTableStatus;

const PopoverContent = styled.div`
  padding: 10px 20px;
`;
const ContentItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #f4f4f4;
  :hover {
    cursor: pointer;
  }
`;
const StatusArea = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const StatusContainer = styled.div`
  background: ${(props) => {
    switch (props.status) {
      case "completed":
        return "#2BC155";
      case "pending":
        return "#FF9548";
      case "canceled":
        return "#969BA0";
      default:
        return "#000000";
    }
  }};
  width: 150px;
  height: 50px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const OptionsIconDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    cursor: pointer;
  }
`;
