import React, { useMemo, useContext } from "react";
import { InputContext } from "../context/InputContext";
import { TextField } from "@mui/material";

const FastTextField = (props) => {
  const { setState } = useContext(InputContext);
  const { label, value, type, onBlur, index, error, helperText } = props;

  return useMemo(() => {
    const handleChange = (e) => {
      setState((prevState) => {
        let array = [...prevState];
        array[index].value = e.target.value;
        return array;
      });
    };

    //console.log("FastTextField Rendered");
    return (
      <TextField
        error={error}
        helperText={helperText}
        sx={{ margin: 1 }}
        variant="standard"
        label={label}
        value={value}
        type={type}
        onBlur={onBlur}
        onChange={handleChange}
      />
    );
  }, [error, helperText, label, value, type, onBlur, setState, index]);
};

export default FastTextField;
