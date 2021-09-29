import styled from "styled-components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchContext from "./context/SearchContext";
import InputContext from "./context/InputContext";
import { getPaymentHistory, getNotifications, signIn } from "./store/actions";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import { AppRoutes, LoginRoutes } from "./commons/Routes";

const App = () => {
  useSelector((state) => state.login);
  const email = localStorage.getItem("email");
  return <>{email ? <AppFlow /> : <LoginFlow />}</>;
};

export default App;

const AppFlow = () => {
  const dispatch = useDispatch();
  const email = localStorage.getItem("email");
  const password = localStorage.getItem("password");
  useEffect(() => {
    dispatch(getPaymentHistory());
    dispatch(getNotifications());
    dispatch(
      signIn({
        email,
        password,
      })
    );
  }, [dispatch, email, password]);

  return (
    <SearchContext>
      <InputContext>
        <Container>
          <SideBar />
          <ContentContainer>
            <Header />
            <AppRoutes />
          </ContentContainer>
        </Container>
      </InputContext>
    </SearchContext>
  );
};

const LoginFlow = () => {
  return <LoginRoutes />;
};

const Container = styled.div`
  display: flex;
  background-color: #f4f4f4;
`;

const ContentContainer = styled.div`
  background-color: #f4f4f4;
  width: calc(100% - 350px);
  margin-left: 350px;
  min-height: 100vh;

  @media (max-width: 1024px) {
    width: 100%;
    margin-left: 0;
  }
`;
