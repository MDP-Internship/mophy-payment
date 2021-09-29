import React, { useMemo, useContext } from "react";
import { InputContext } from "../context/InputContext";
import DatePicker from "@mui/lab/DatePicker";
import { TextField } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

const FastDatePicker = (props) => {
  const { setState } = useContext(InputContext);
  const { index, inputObject } = props;

  return useMemo(() => {
    const handleChange = (selectedDate) => {
      setState((prevState) => {
        let array = [...prevState];
        array[index].value = selectedDate;
        return array;
      });
    };

    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label={inputObject.name.toUpperCase()}
          value={inputObject.value}
          onChange={(selectedDate) => {
            handleChange(selectedDate);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    );
  }, [inputObject.name, inputObject.value, setState, index]);
};

export default FastDatePicker;
