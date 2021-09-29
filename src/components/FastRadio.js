import React, { useMemo, useContext } from "react";
import { InputContext } from "../context/InputContext";
import { RadioGroup, FormLabel, FormControlLabel, Radio } from "@mui/material";

const FastRadio = (props) => {
  const { setState } = useContext(InputContext);
  const { value, index, options, label } = props;

  return useMemo(() => {
    const handleChange = (e) => {
      setState((prevState) => {
        let array = [...prevState];
        array[index].value = e.target.value;
        return array;
      });
    };
    //console.log("FastRadio Rendered");
    return (
      <RadioGroup row value={value} onChange={handleChange}>
        <FormLabel
          sx={{
            marginRight: 2,
            padding: "10px 0",
          }}
          component="legend"
        >
          {label}
        </FormLabel>
        {options.map((option, index) => {
          return (
            <FormControlLabel
              key={index}
              value={option}
              control={<Radio />}
              label={option}
            />
          );
        })}
      </RadioGroup>
    );
  }, [index, label, options, setState, value]);
};

export default FastRadio;
