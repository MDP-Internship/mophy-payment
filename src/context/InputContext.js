import { useState, createContext } from "react";

export const InputContext = createContext();

const InputContextComponent = (props) => {
  const [state, setState] = useState([]);

  const value = { state, setState };

  return (
    <InputContext.Provider value={value}>
      {props.children}
    </InputContext.Provider>
  );
};

export default InputContextComponent;
