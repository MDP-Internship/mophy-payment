import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { signIn } from "../store/actions";
import { Link } from "react-router-dom";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    dispatch(
      signIn({
        email,
        password,
      })
    );
    event.preventDefault();
  };

  return (
    <Container>
      <SideBarContainer></SideBarContainer>
      <ContentContainer>
        <Header>
          <h4>
            You don't have an account? <Link to="/signup">Sign Up</Link>
          </h4>
        </Header>
        <div
          style={{
            paddingTop: "100px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <FormContainer>
            <h1>Sign In</h1>
            <h2>
              For the purpose of industry regulation, your details are required.
            </h2>
            <div
              style={{ border: "1px solid #F5F5F5", marginBottom: "24px" }}
            />
            <form>
              <h3>Email address*</h3>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <h3>Create password*</h3>
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <Button type="submit" onClick={handleSubmit}>
                Sign In
              </Button>
            </form>
          </FormContainer>
        </div>
      </ContentContainer>
    </Container>
  );
};

export default SignInPage;

const Container = styled.div`
  display: flex;
`;

const SideBarContainer = styled.div`
  min-height: 100vh;
  width: 700px;
  background: #1eaae7;
`;

const ContentContainer = styled.div`
  width: calc(100% - 700px);

  h4 {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 28px;
    color: #8692a6;
    a {
      text-decoration: none;
      color: #1eaae7;
    }
  }
`;

const Header = styled.div`
  padding-right: 20px;
  text-align: right;
`;

const FormContainer = styled.div`
  width: 435px;
  h1 {
    color: #000000;
    font-size: 30px;
    font-weight: 700;
    line-height: 36px;
    margin-bottom: 10px;
  }

  h2 {
    color: #8692a6;
    font-size: 18px;
    font-weight: 400;
    line-height: 28px;
    margin-bottom: 16px;
  }

  h3 {
    color: #696f79;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    margin-bottom: 14px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #8692a6;
  :focus {
    outline: none;
    border: 1px solid #1565d8;
  }
  box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.11);
  border-radius: 6px;
  box-sizing: border-box;
  margin-bottom: 24px;
`;

const Button = styled.button`
  :hover {
    cursor: pointer;
  }
  width: 100%;
  color: white;
  border: none;
  padding: 20px;
  background: #1eaae7;
`;
