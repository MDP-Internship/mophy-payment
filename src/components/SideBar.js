import styled from "styled-components";
import { Text } from "../assets/styled";
import {
  AppLogo,
  CardsIcon,
  DashboardIcon,
  InvoicesIcon,
  SettingsIcon,
  TransactionsIcon,
  WalletIcon,
} from "../assets/icons";
import NavigationButton from "./NavigationButton";

const SideBar = (props) => {
  return (
    <Container showDrawer={props.showDrawer}>
      <HeaderContainer>
        <AppLogo />
        <HeaderTextArea>
          <Text weight="900" size="34px" lineHeight="46px" color="#353751">
            MOPHY
          </Text>
          <Text weight="400" size="14px" lineHeight="19px" color="#969ba0">
            Payment Admin
          </Text>
        </HeaderTextArea>
      </HeaderContainer>
      <NavigationButton
        to="/"
        icon={DashboardIcon}
        name="Dashboard"
        closeDrawer={props.closeDrawer}
      />
      <NavigationButton
        to="/form"
        icon={SettingsIcon}
        name="Form"
        closeDrawer={props.closeDrawer}
      />
      <NavigationButton
        to="/my-wallet"
        icon={WalletIcon}
        name="My Wallet"
        closeDrawer={props.closeDrawer}
      />
      <NavigationButton
        to="/transactions"
        icon={TransactionsIcon}
        name="Transactions"
        closeDrawer={props.closeDrawer}
      />
      <NavigationButton
        to="/invoices"
        icon={InvoicesIcon}
        name="Invoices"
        closeDrawer={props.closeDrawer}
      />
      <NavigationButton
        to="/cards"
        icon={CardsIcon}
        name="Cards"
        closeDrawer={props.closeDrawer}
      />
      <NavigationButton
        to="/settings"
        icon={SettingsIcon}
        name="Settings"
        closeDrawer={props.closeDrawer}
      />
      <TextArea>
        <Text weight="600" size="14px" lineHeight="25px" color="#969ba0">
          Mophy Payment Admin Dashboard
        </Text>
        <Text weight="400" size="12px" lineHeight="21px" color="#969ba0">
          © 2021 All Rights Reserved
        </Text>
        <Text
          weight="400"
          size="14px"
          lineHeight="21px"
          color="#969ba0"
          margin="25px 0"
        >
          Made with mdpgroup
        </Text>
      </TextArea>
    </Container>
  );
};

export default SideBar;

const Container = styled.div`
  background-color: #f4f4f4;
  position: fixed;
  height: 100vh;
  overflow: auto;
  z-index: 1;
  width: 350px;

  @media (max-width: 1024px) {
    display: ${(props) => (props.showDrawer ? "" : "none")};
  }
`;

const TextArea = styled.div`
  margin-top: 80px;
  padding-left: 50px;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 35px 0;
  margin-bottom: 65px;
`;

const HeaderTextArea = styled.div`
  margin-left: 25px;
`;
