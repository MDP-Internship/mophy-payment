import styled from "styled-components";
import { Text } from "../assets/styled";
import PaymentHistoryTableStatus from "./PaymentHistoryTableStatus";

const PaymentHistoryTable = (props) => {
  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <td>
              <Text weight="500" size="18px" lineHeight="27px">
                Invoice ID
              </Text>
            </td>
            <td>
              <Text weight="500" size="18px" lineHeight="27px">
                Date
              </Text>
            </td>
            <td>
              <Text weight="500" size="18px" lineHeight="27px">
                Recipent
              </Text>
            </td>
            <td>
              <Text weight="500" size="18px" lineHeight="27px">
                Email
              </Text>
            </td>
            <td>
              <Text weight="500" size="18px" lineHeight="27px">
                Service Type
              </Text>
            </td>
            <td>
              <Text weight="500" size="18px" lineHeight="27px">
                Status
              </Text>
            </td>
          </tr>
        </thead>
        <tbody>
          {props.payments.map((payment) => {
            return (
              <tr key={payment.id}>
                <td>
                  <Text weight="500" size="16px" lineHeight="24px">
                    {payment.id}
                  </Text>
                </td>
                <td>
                  <Text weight="400" size="16px" lineHeight="24px">
                    {payment.date}
                  </Text>
                </td>
                <td>
                  <RecipentContainer>
                    <img
                      src="https://via.placeholder.com/150"
                      alt="img"
                      width={50}
                      height={50}
                    />
                    <TextArea>
                      <Text weight="600" size="16px" lineHeight="24px">
                        {payment.recipent.name}
                      </Text>
                      <Text weight="400" size="14px" lineHeight="21px">
                        {payment.recipent.description}
                      </Text>
                    </TextArea>
                  </RecipentContainer>
                </td>
                <td>
                  <Text weight="400" size="16px" lineHeight="24px">
                    {payment.email}
                  </Text>
                </td>
                <td>
                  <Text weight="400" size="16px" lineHeight="24px">
                    {payment.serviceType}
                  </Text>
                </td>
                <td>
                  <PaymentHistoryTableStatus payment={payment} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default PaymentHistoryTable;

const Container = styled.div`
  margin: 20px 0;
  overflow: auto;
  background: white;
  border-radius: 30px;
  box-shadow: 0 4px 6px rgba(62, 73, 84, 0.04);
`;
const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  table-layout: auto;
  text-align: left;
  thead {
    border-bottom: 2px solid #f4f4f4;
  }
  tr {
    border-bottom: 1px solid #f4f4f4;
    height: 90px;
  }
  td {
    min-width: 180px;
  }
  td:first-child {
    padding-left: 15px;
  }
  img {
    background: #969ba0;
    border-radius: 50px;
  }
`;
const RecipentContainer = styled.div`
  display: flex;
  align-items: center;
`;
const TextArea = styled.div`
  margin-left: 20px;
`;
