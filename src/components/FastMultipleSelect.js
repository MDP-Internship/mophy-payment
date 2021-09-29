import React, { useMemo, useContext } from "react";
import { InputContext } from "../context/InputContext";
import {
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  Box,
  Chip,
  MenuItem,
} from "@mui/material";

const FastMultipleSelect = (props) => {
  const { setState } = useContext(InputContext);
  const { index, inputObject } = props;

  return useMemo(() => {
    const handleChange = (e) => {
      setState((prevState) => {
        let array = [...prevState];
        array[index].value = e.target.value;
        return array;
      });
    };
    console.log("FastMultipleSelect Rendered");
    return (
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel>{inputObject.name.toUpperCase()}</InputLabel>
        <Select
          multiple
          value={inputObject.value}
          onChange={handleChange}
          input={<OutlinedInput label={inputObject.name.toUpperCase()} />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
        >
          {inputObject.options.map((option, index) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }, [
    index,
    inputObject.name,
    inputObject.options,
    inputObject.value,
    setState,
  ]);
};

export default FastMultipleSelect;
