import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyle } from "./assets/styled";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "./store/reducers";
import sagas from "./store/sagas";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { tr } from "date-fns/locale";
import Toast from "./commons/Toast";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(sagas);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={tr}>
        <GlobalStyle />
        <App />
        <Toast />
      </MuiPickersUtilsProvider>
    </Router>
  </Provider>,
  document.getElementById("root")
);
