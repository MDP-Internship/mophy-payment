import styled from "styled-components";
import { Text, PageStyle } from "../assets/styled";
import {
  PaidInvoicesIcon,
  TotalInvoicesIcon,
  TotalInvoicesSentIcon,
  TotalUnpaidInvoicesIcon,
} from "../assets/icons";
import ChartLine from "../charts/LineChart";
import ChartArea from "../charts/AreaChart";

import Card from "../components/Card";
import CardGraph from "../components/CardGraph";
import CreditCard from "../components/CreditCard";
import PaymentHistory from "../components/PaymentHistory";
import FluidBar from "../components/FluidBar";

const DashboardPage = () => {
  return (
    <PageStyle>
      <Text weight="600" size="32px" lineHeight="48px" color="#353751">
        Dashboard
      </Text>
      <GridArea>
        <GridItem columnSpan={2}>
          <Card number="582" title="Total Invoices" icon={TotalInvoicesIcon} />
        </GridItem>
        <GridItem columnSpan={2}>
          <Card number="346" title="Paid Invoices" icon={PaidInvoicesIcon} />
        </GridItem>
        <GridItem columnSpan={2}>
          <Card
            number="236"
            title="Total Unpaid Invoices"
            icon={TotalUnpaidInvoicesIcon}
          />
        </GridItem>
        <GridItem columnSpan={2}>
          <Card
            number="126"
            title="Total Invoices Sent"
            icon={TotalInvoicesSentIcon}
          />
        </GridItem>
        <GridItem columnSpan={3} rowSpan={2}>
          <CreditCard />
        </GridItem>
        <GridItem columnSpan={1} rowSpan={2}>
          <FluidBar />
        </GridItem>
        <GridItem columnSpan={2}>
          <CardGraph title="Income" number="65,123" graph={<ChartLine />} />
        </GridItem>
        <GridItem columnSpan={2}>
          <CardGraph title="Outome" number="24,551" graph={<ChartLine />} />
        </GridItem>
        <GridItem columnSpan={4}>
          <CardGraph
            title="Weekly Wallet Usage"
            number="65,123"
            graph={<ChartArea />}
          />
        </GridItem>
      </GridArea>
      <PaymentHistory />
    </PageStyle>
  );
};

export default DashboardPage;

const GridArea = styled.div`
  width: 100%;
  padding-top: 20px;
  column-gap: 50px;
  row-gap: 30px;
  display: grid;
  grid-template-columns: repeat(8, minmax(10px, 1fr));
  grid-auto-rows: 160px;
  @media (max-width: 1024px) {
  }
`;
const GridItem = styled.div`
  grid-column: ${(props) => `span ${props.columnSpan}`};
  grid-row: ${(props) => `span ${props.rowSpan}`};

  @media (max-width: 1024px) {
    grid-column: ${(props) => {
      switch (props.columnSpan) {
        case 2:
          return "span 4";
        case 3:
          return "span 3";
        case 1:
          return "span 1";
        case 4:
          return "span 8";
        default:
          return "span 1";
      }
    }};
  }
  @media (max-width: 500px) {
    grid-column: span 8;
  }
`;
