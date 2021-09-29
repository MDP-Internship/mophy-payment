import React, { useMemo, useContext } from "react";
import { InputContext } from "../context/InputContext";
import { TextField } from "@mui/material";

const FastTextField = (props) => {
  const { setState } = useContext(InputContext);
  const { index, inputObject, validator } = props;

  return useMemo(() => {
    const handleChange = (e) => {
      setState((prevState) => {
        let array = [...prevState];
        array[index].value = e.target.value;
        return array;
      });
    };

    return (
      <TextField
        name={inputObject.name}
        error={Boolean(
          validator.current.message(
            inputObject.name,
            inputObject.value,
            "required|alpha"
          )
        )}
        helperText={validator.current.message(
          inputObject.name,
          inputObject.value,
          "required|alpha"
        )}
        variant="outlined"
        label={inputObject.name.toUpperCase()}
        value={inputObject.value}
        type={inputObject.textType}
        onChange={handleChange}
        onBlur={() => validator.current.showMessageFor(inputObject.name)}
      />
    );
  }, [
    validator,
    inputObject.name,
    inputObject.value,
    inputObject.textType,
    setState,
    index,
  ]);
};

export default FastTextField;
