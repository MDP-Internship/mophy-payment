import { useState } from "react";
import styled from "styled-components";
import Notifications from "./Notifications";
import Profile from "./Profile";
import SearchInput from "./SearchInput";
import DehazeIcon from "@material-ui/icons/Dehaze";
import Drawer from "@material-ui/core/Drawer";
import SideBar from "./SideBar";

const Header = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  const closeDrawer = () => {
    setShowDrawer(false);
  };
  return (
    <Container>
      <Drawer anchor="left" open={showDrawer} onClose={closeDrawer}>
        <SideBar
          showDrawer={showDrawer}
          closeDrawer={showDrawer && closeDrawer}
        />
      </Drawer>

      <SideBarIcon onClick={() => setShowDrawer(true)}>
        <DehazeIcon />
      </SideBarIcon>
      <SearchInput />
      <RightArea>
        <Notifications />
        <Profile />
      </RightArea>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  background-color: #f4f4f4;
  padding: 25px calc(100% / 30);
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const RightArea = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const SideBarIcon = styled.div`
  align-items: center;
  justify-content: center;
  :hover {
    cursor: pointer;
  }
  display: none;
  @media (max-width: 1024px) {
    display: flex;
  }
`;
