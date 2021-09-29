const initialState = {
  paymentHistory: [],
  notifications: [],
  toast: false,
  toastMessage: "",
  login: false,
  user: {},
  inputs: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_PAYMENT_HISTORY": {
      return {
        ...state,
        paymentHistory: action.data,
      };
    }
    case "SET_NOTIFICATIONS": {
      return {
        ...state,
        notifications: action.data,
      };
    }
    case "SHOW_TOAST": {
      return {
        ...state,
        toast: true,
        toastMessage: action.data,
      };
    }
    case "HIDE_TOAST": {
      return {
        ...state,
        toast: false,
        toastMessage: "",
      };
    }
    case "DO_LOGIN": {
      localStorage.setItem("email", action.data.email);
      localStorage.setItem("password", action.data.password);
      return {
        ...state,
        login: true,
        user: action.data,
      };
    }
    case "DO_LOGOUT": {
      localStorage.removeItem("email");
      localStorage.removeItem("password");
      return {
        ...state,
        login: false,
        user: {},
      };
    }
    case "SET_INPUTS": {
      return {
        ...state,
        inputs: action.data,
      };
    }
    default: {
      return state;
    }
  }
}
