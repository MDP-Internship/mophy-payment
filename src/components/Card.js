import styled from "styled-components";
import { Text } from "../assets/styled";

const Card = (props) => {
  return (
    <Container columnStart={props.columnStart} columnEnd={props.columnEnd}>
      <TextArea>
        <Text weight="600" size="38px" lineHeight="57px" color="#353751">
          {props.number}
        </Text>
        <Text size="18px" lineHeight="27px" color="#353751" opacity="0.7">
          {props.title}
        </Text>
      </TextArea>
      <IconContainer>{props.icon()}</IconContainer>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #ffffff;
  box-shadow: 0 12px 23px rgba(62, 73, 84, 0.04);
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const IconContainer = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #f4f4f4;
  box-sizing: border-box;
  border-radius: 50px;
  padding: 20px;
`;
const TextArea = styled.div`
  margin-left: 10px;
`;
