import styled from "styled-components";
import { Text } from "../assets/styled";
import FluidBarChart from "../charts/FluidBarChart";
const FluidBar = () => {
  return (
    <Container>
      <ChartContainer>
        <FluidBarChart />
      </ChartContainer>
      <Text weight="400" size="16px" lineHeight="24px" color="#353751">
        Limit
      </Text>
      <Text weight="600" size="24px" lineHeight="36px" color="#353751">
        $4000
      </Text>
    </Container>
  );
};

export default FluidBar;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ChartContainer = styled.div`
  width: 60%;
  height: 100%;
  border-radius: 30px;
  overflow: hidden;
  margin-bottom: 5px;
`;
