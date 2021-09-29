import React, { useContext, useEffect, useRef } from "react";
import { PageStyle } from "../assets/styled";
import { InputContext } from "../context/InputContext";
import { Button } from "@mui/material";
import styled from "styled-components";

import FastTextField from "../components/FastTextField";
import FastMultipleSelect from "../components/FastMultipleSelect";
import FastRadio from "../components/FastRadio";
import FastCheckbox from "../components/FastCheckBox";

import SimpleReactValidator from "simple-react-validator";
import { useDispatch, useSelector } from "react-redux";
import { getInputs } from "../store/actions";

const FormsPage = () => {
  const reduxInputs = useSelector((state) => state.inputs);
  const { state, setState } = useContext(InputContext);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInputs());
  }, [dispatch]);

  useEffect(() => {
    setState(reduxInputs);
  }, [reduxInputs, setState]);

  const validator = useRef(new SimpleReactValidator());

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(validator.current);
  };

  //console.log(state);

  return (
    <PageStyle>
      <Form onSubmit={handleSubmit}>
        {state.map((inputObject, index) => {
          return (
            <React.Fragment key={inputObject._id}>
              {InputSwitch(inputObject, index)}
            </React.Fragment>
          );
        })}
        {state.length === 0 ? null : (
          <Button
            sx={{ padding: 2, gridColumnStart: 1, gridColumnEnd: 4 }}
            type="submit"
          >
            Submit
          </Button>
        )}
      </Form>
    </PageStyle>
  );
};

export default FormsPage;

const Form = styled.form`
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 10px;
  border: 2px solid #1eaae7;
  border-radius: 30px;
  text-align: center;
`;

const InputContainer = styled.div`
  grid-column-start: ${(props) => (props.strech ? "1" : "auto")};
  grid-column-end: ${(props) => (props.strech ? "4" : "auto")};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InputSwitch = (inputObject, index) => {
  if (inputObject.type === "Text") {
    return (
      <InputContainer>
        <FastTextField
          helperText={validator.current.message(
            inputObject.name,
            inputObject.value,
            "required|alpha"
          )}
          label={inputObject.name.toUpperCase()}
          value={inputObject.value}
          index={index}
          type={inputObject.textType}
        />
      </InputContainer>
    );
  } else if (inputObject.type === "MultipleSelect") {
    return (
      <InputContainer>
        <FastMultipleSelect
          label={inputObject.name.toUpperCase()}
          value={inputObject.value}
          index={index}
          options={inputObject.options}
        />
      </InputContainer>
    );
  } else if (inputObject.type === "Radio") {
    return (
      <InputContainer strech>
        <FastRadio
          label={inputObject.name.toUpperCase()}
          value={inputObject.value}
          index={index}
          options={inputObject.options}
        />
      </InputContainer>
    );
  } else if (inputObject.type === "Checkbox") {
    return (
      <InputContainer strech>
        <FastCheckbox
          label={inputObject.name.toUpperCase()}
          value={inputObject.value}
          index={index}
        />
      </InputContainer>
    );
  } else {
    return null;
  }
};
