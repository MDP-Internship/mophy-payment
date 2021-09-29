import React from "react";
import { Route, Switch } from "react-router-dom";

import CardsPage from "../pages/CardsPage";
import DashboardPage from "../pages/DashboardPage";
import InvoicesPage from "../pages/InvoicesPage";
import MyWalletPage from "../pages/MyWalletPage";
import SettingsPage from "../pages/SettingsPage";
import TransactionsPage from "../pages/TransactionsPage";
import FormsPage from "../pages/FormsPage";

import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";

export const AppRoutes = () => (
  <Switch>
    <Route path="/cards" exact component={CardsPage} />
    <Route path="/invoices" exact component={InvoicesPage} />
    <Route path="/my-wallet" exact component={MyWalletPage} />
    <Route path="/settings" exact component={SettingsPage} />
    <Route path="/transactions" exact component={TransactionsPage} />
    <Route path="/form" exact component={FormsPage} />
    <Route path="/" component={DashboardPage} />
  </Switch>
);

export const LoginRoutes = () => (
  <Switch>
    <Route path="/signup" exact component={SignUpPage} />
    <Route path="/" exact component={SignInPage} />
  </Switch>
);
