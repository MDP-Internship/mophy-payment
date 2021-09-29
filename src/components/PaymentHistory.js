import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import PaymentHistoryHeader from "./PaymentHistoryHeader";
import PaymentHistoryFooter from "./PaymentHistoryFooter";
import PaymentHistoryTable from "./PaymentHistoryTable";

import { SearchContext } from "../context/SearchContext";

const PaymentHistory = () => {
  const paymentHistory = useSelector((state) => state.paymentHistory);
  const [index, setIndex] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);
  const { searchTerm } = useContext(SearchContext);

  const filterPayments = () => {
    if (searchTerm === "" && selectedDate == null) {
      // Filtreleme Yok
      return paymentHistory;
    } else if (searchTerm === "" && selectedDate != null) {
      // Sadece Tarih Filtrele
      return dateFilter(paymentHistory, selectedDate);
    } else if (searchTerm !== "" && selectedDate == null) {
      // Sadece String Filtrele
      return stringFilter(paymentHistory, searchTerm);
    } else {
      // Hem Tarih Hem String Filtrele
      const dateFilteredArray = dateFilter(paymentHistory, selectedDate);
      return stringFilter(dateFilteredArray, searchTerm);
    }
  };

  const filteredPayments = filterPayments();
  const payments = filteredPayments.slice(index * 10 - 10, index * 10);

  return (
    <Container>
      <PaymentHistoryHeader
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <PaymentHistoryTable payments={payments} />
      <PaymentHistoryFooter
        index={index}
        setIndex={setIndex}
        length={filteredPayments.length}
      />
    </Container>
  );
};

export default PaymentHistory;

const Container = styled.div`
  padding-top: 30px;
`;

const dateFilter = (array, date) => {
  return array.filter(
    (payment) =>
      payment.date ===
      `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
  );
};

const stringFilter = (array, searchTerm) => {
  const stringFilteredArray = [];
  for (let i = 0; i < array.length; i++) {
    const payment = array[i];
    if (
      payment.id.toString().toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      stringFilteredArray.push(payment);
      continue;
    }
    if (payment.date.toLowerCase().includes(searchTerm.toLowerCase())) {
      stringFilteredArray.push(payment);
      continue;
    }
    if (
      payment.recipent.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      stringFilteredArray.push(payment);
      continue;
    }
    if (payment.email.toLowerCase().includes(searchTerm.toLowerCase())) {
      stringFilteredArray.push(payment);
      continue;
    }
    if (payment.serviceType.toLowerCase().includes(searchTerm.toLowerCase())) {
      stringFilteredArray.push(payment);
      continue;
    }
    if (payment.status.toLowerCase().includes(searchTerm.toLowerCase())) {
      stringFilteredArray.push(payment);
      continue;
    }
  }
  return stringFilteredArray;
};
