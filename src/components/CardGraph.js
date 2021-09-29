import styled from "styled-components";
import { Text } from "../assets/styled";

const CardGraph = (props) => {
  return (
    <Container columnStart={props.columnStart} columnEnd={props.columnEnd}>
      <TextArea>
        <Text
          weight="400"
          size="14px"
          lineHeight="21px"
          color="#353751"
          opacity="0.7"
        >
          {props.title}
        </Text>
        <Text weight="600" size="24px" lineHeight="36px" color="#353751">
          {"$" + props.number}
        </Text>
      </TextArea>
      {props.graph}
    </Container>
  );
};

export default CardGraph;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #ffffff;
  box-shadow: 0 12px 23px rgba(62, 73, 84, 0.04);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
const TextArea = styled.div`
  margin: 20px 20px 0 20px;
`;
