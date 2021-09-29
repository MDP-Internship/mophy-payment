import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Text } from "../assets/styled";
import { doLogout } from "../store/actions";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Popover from "../commons/Popover";

const Profile = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(doLogout());
  };

  return (
    <>
      <Container>
        <TextArea>
          <Text
            weight="400"
            size="16px"
            lineHeight="24px"
            align="right"
            color="#353751"
          >
            {user.name}
          </Text>
          <Text
            weight="400"
            size="12px"
            lineHeight="18px"
            align="right"
            color="#353751"
          >
            {user.email}
          </Text>
        </TextArea>
        <ProfilePicture src={user.profileURL} onClick={handleClick} />
      </Container>
      <Popover
        arrow="right"
        anchorEl={anchorEl}
        handleClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: 37,
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <PopupContainer>
          <PopupTextArea>
            <Text size="14px" color="#353751">
              {user.name}
            </Text>
            <Text size="12px" color="#353751">
              {user.email}
            </Text>
          </PopupTextArea>
          <Logout onClick={handleLogout}>
            <Text size="16px">Logout</Text>
            <ExitToAppIcon />
          </Logout>
        </PopupContainer>
      </Popover>
    </>
  );
};

export default Profile;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
const TextArea = styled.div`
  margin: 0 35px 0 50px;
  @media (max-width: 700px) {
    display: none;
  }
`;

const PopupTextArea = styled.div`
  display: none;
  @media (max-width: 700px) {
    display: block;
  }
`;
const ProfilePicture = styled.img`
  object-fit: cover;
  border-radius: 50px;
  width: 55px;
  height: 55px;
  :hover {
    cursor: pointer;
  }
`;

const PopupContainer = styled.div`
  padding: 10px 10px;
  border-radius: 0px;
  box-shadow: 0px 5px 5px -3px rgb(0 0 0 / 20%),
    0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%);
  background: white;
`;

const Logout = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  :hover {
    cursor: pointer;
  }
`;
