export const showToast = (data) => ({
  type: "SHOW_TOAST",
  data,
});
export const setPaymentHistory = (data) => ({
  type: "SET_PAYMENT_HISTORY",
  data,
});
export const getPaymentHistory = () => ({
  type: "GET_PAYMENT_HISTORY",
});
export const setNotifications = (data) => ({
  type: "SET_NOTIFICATIONS",
  data,
});
export const getNotifications = () => ({
  type: "GET_NOTIFICATIONS",
});
export const editPayment = (data) => ({
  type: "EDIT_PAYMENT",
  data,
});
export const deletePayment = (id) => ({
  type: "DELETE_PAYMENT",
  id,
});
export const doLogin = (data) => ({
  type: "DO_LOGIN",
  data,
});
export const doLogout = () => ({
  type: "DO_LOGOUT",
});
export const signIn = (data) => ({
  type: "SIGN_IN",
  data,
});
export const signUp = (data) => ({
  type: "SIGN_UP",
  data,
});
export const getInputs = () => ({
  type: "GET_INPUTS",
});
export const setInputs = (data) => ({
  type: "SET_INPUTS",
  data,
});
