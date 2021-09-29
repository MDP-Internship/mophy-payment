import { all, call, put, take } from "redux-saga/effects";

import { request } from "../commons/utils";
import * as actions from "../store/actions";

const url = "http://localhost:3001";

function* getPaymentHistory() {
  const result = yield call(request, `${url}/paymentHistory`, "GET");
  if (result) {
    if (result !== "invalid") {
      yield put(actions.setPaymentHistory(result));
      yield put(actions.showToast("Paymentlar Getirildi"));
    }
  }
}
function* getNotifications() {
  const result = yield call(request, `${url}/notifications`, "GET");
  if (result) {
    if (result !== "invalid") {
      yield put(actions.setNotifications(result));
      yield put(actions.showToast("Bildirimler Getirildi"));
    }
  }
}
function* editPayment(data) {
  const result = yield call(
    request,
    `${url}/paymentHistory/${data.id}`,
    "PUT",
    JSON.stringify(data)
  );
  if (result) {
    if (result !== "invalid") {
      yield call(getPaymentHistory);
      yield put(actions.showToast("Düzenleme Başarılı"));
    }
  }
}
function* deletePayment(id) {
  const result = yield call(request, `${url}/paymentHistory/${id}`, "DELETE");
  if (result) {
    if (result !== "invalid") {
      yield call(getPaymentHistory);
      yield put(actions.showToast("Silme Başarılı"));
    }
  }
}
function* signIn(data) {
  const result = yield call(
    request,
    `${url}/loginUser`,
    "POST",
    JSON.stringify(data)
  );
  if (result) {
    if (result !== "invalid") {
      yield put(actions.doLogin(result));
      yield put(actions.showToast("Giriş Yap Başarılı"));
    }
  }
}
function* signUp(data) {
  const result = yield call(
    request,
    `${url}/users`,
    "POST",
    JSON.stringify(data)
  );
  if (result) {
    if (result !== "invalid") {
      yield put(actions.doLogin(result));
      yield put(actions.showToast("Kayıt Ol Başarılı"));
    }
  }
}

function* getInputs() {
  const result = yield call(request, `${url}/inputs`, "GET");
  if (result) {
    if (result !== "invalid") {
      yield put(actions.setInputs(result));
      yield put(actions.showToast("Inputlar Getirildi"));
    }
  }
}

function* getPaymentHistoryWatcher() {
  while (true) {
    yield take("GET_PAYMENT_HISTORY");
    yield call(getPaymentHistory);
  }
}
function* getNotificationsWatcher() {
  while (true) {
    yield take("GET_NOTIFICATIONS");
    yield call(getNotifications);
  }
}
function* editPaymentWatcher() {
  while (true) {
    const action = yield take("EDIT_PAYMENT");
    yield call(editPayment, action.data);
  }
}
function* deletePaymentWatcher() {
  while (true) {
    const action = yield take("DELETE_PAYMENT");
    yield call(deletePayment, action.id);
  }
}
function* signInWatcher() {
  while (true) {
    const action = yield take("SIGN_IN");
    yield call(signIn, action.data);
  }
}
function* signUpWatcher() {
  while (true) {
    const action = yield take("SIGN_UP");
    yield call(signUp, action.data);
  }
}
function* getInputsWatcher() {
  while (true) {
    yield take("GET_INPUTS");
    yield call(getInputs);
  }
}

export default function* rootSaga() {
  yield all([
    getPaymentHistoryWatcher(),
    getNotificationsWatcher(),
    editPaymentWatcher(),
    deletePaymentWatcher(),
    signInWatcher(),
    signUpWatcher(),
    getInputsWatcher(),
  ]);
}
