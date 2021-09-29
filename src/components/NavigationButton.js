import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavigationButton = (props) => {
  return (
    <NavigationStyle
      onClick={() => {
        if (props.closeDrawer) {
          props.closeDrawer();
        }
      }}
    >
      <NavLink to={props.to} exact activeClassName="active">
        <div>{props.icon()}</div>
        <h1>{props.name}</h1>
      </NavLink>
    </NavigationStyle>
  );
};

export default NavigationButton;

const NavigationStyle = styled.div`
  padding-left: 50px;
  .active {
    h1 {
      color: #353751;
      font-weight: 600;
    }
    div {
      background: #1eaae7;
      box-shadow: 0 16px 31px rgba(0, 96, 137, 0.16);
    }
    svg {
      background: #1eaae7;
      path {
        fill: white;
      }
    }
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    border-radius: 67px;
    background: none;
  }
  a {
    text-decoration: none;
    display: flex;
    align-items: center;
  }
  h1 {
    margin-left: 10px;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    color: #969ba0;
  }
`;
