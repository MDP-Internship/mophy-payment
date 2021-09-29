import styled from "styled-components";
import { Text } from "../assets/styled";
import Pagination from "./Pagination";

const PaymentHistoryFooter = (props) => {
  const { index, setIndex, length } = props;
  const totalPageCount = Math.ceil(length / 10);

  const showing =
    totalPageCount === 0
      ? "0"
      : totalPageCount !== index
      ? `${index * 10 - 9} - ${index * 10}`
      : `${index * 10 - 9} - ${index * 10 - 10 + (length % 10)}`;

  return (
    <Container>
      <Text weight="500" size="16px" lineHeight="24px" color="#353751">
        Showing <BoldText>{showing}</BoldText> from{" "}
        <BoldText>{props.length}</BoldText> data
      </Text>
      <Pagination totalPageCount={totalPageCount} setIndex={setIndex} />
    </Container>
  );
};

export default PaymentHistoryFooter;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const BoldText = styled.span`
  color: black;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`;
