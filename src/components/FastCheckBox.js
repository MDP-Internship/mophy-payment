import React, { useMemo, useContext } from "react";
import { InputContext } from "../context/InputContext";
import { FormControlLabel, Checkbox } from "@mui/material";

const FastCheckbox = (props) => {
  const { setState } = useContext(InputContext);
  const { label, value, index } = props;

  return useMemo(() => {
    const handleChange = (e) => {
      setState((prevState) => {
        let array = [...prevState];
        array[index].value = e.target.checked;
        return array;
      });
    };
    //console.log("FastCheckbox Rendered");
    return (
      <FormControlLabel
        control={<Checkbox checked={value} onChange={handleChange} />}
        label={label}
      />
    );
  }, [index, label, setState, value]);
};

export default FastCheckbox;
