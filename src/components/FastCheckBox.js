import React, { useMemo, useContext } from "react";
import { InputContext } from "../context/InputContext";
import { FormControlLabel, Checkbox } from "@mui/material";

const FastCheckbox = (props) => {
  const { setState } = useContext(InputContext);
  const { index, inputObject } = props;

  return useMemo(() => {
    const handleChange = (e) => {
      setState((prevState) => {
        let array = [...prevState];
        array[index].value = e.target.checked;
        return array;
      });
    };
    console.log("FastCheckbox Rendered");
    return (
      <FormControlLabel
        control={
          <Checkbox checked={inputObject.value} onChange={handleChange} />
        }
        label={inputObject.name.toUpperCase()}
      />
    );
  }, [inputObject.name, inputObject.value, setState, index]);
};

export default FastCheckbox;
