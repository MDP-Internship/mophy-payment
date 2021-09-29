import styled from "styled-components";
import { Text } from "../assets/styled";
import { NotificationIcon } from "../assets/icons";
import Popover from "../commons/Popover";

import { useState } from "react";
import { useSelector } from "react-redux";

const Notifications = () => {
  const notifications = useSelector((state) => state.notifications);

  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  let i = 0;

  return (
    <>
      <Container onClick={handleClick}>
        <NotificationIcon />
        <Number>
          <Text weight="600" size="14px" lineHeight="21px" color="#ffffff">
            {notifications.length}
          </Text>
        </Number>
      </Container>
      <Popover anchorEl={anchorEl} handleClose={handleClose}>
        <NotificationsArea>
          {notifications.map((item) => {
            i = i + 1;
            return (
              <NotificationContainer
                key={item.id}
                lastItem={i === notifications.length}
              >
                <Text
                  weight="600"
                  size="22px"
                  color="#353751"
                  margin="5px 20px"
                >
                  {item.title}
                </Text>
                <Text
                  weight="normal"
                  size="12px"
                  color="#353751"
                  opacity="0.9"
                  margin="5px 20px"
                >
                  {item.description}
                </Text>
              </NotificationContainer>
            );
          })}
        </NotificationsArea>
      </Popover>
    </>
  );
};

export default Notifications;

const NotificationContainer = styled.div`
  border-bottom: ${(props) => (props.lastItem ? "" : "2px solid #f4f4f4")};
`;
const NotificationsArea = styled.div`
  padding: 10px 0;
  border-radius: 20px;
  box-shadow: 0px 5px 5px -3px rgb(0 0 0 / 20%),
    0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%);
  width: 300px;
  background: white;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  width: 55px;
  height: 55px;
  background: #ffffff;
  position: relative;
  :hover {
    cursor: pointer;
  }
`;
const Number = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  width: 25px;
  height: 25px;
  background: #1eaae7;
  position: absolute;
  right: -5px;
  top: -5px;
  box-shadow: 0px 6px 8px rgba(43, 152, 214, 0.26);
`;
