import React, { Suspense, lazy } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { history } from "./history";
import { connect } from "react-redux";
import Spinner from "./components/@vuexy/spinner/Loading-spinner";
import { ContextLayout } from "./utility/context/Layout";

import homeroute from "./configs/homeroute";

// Route-based code splitting
const Home = lazy(() => import("./views/pages/Home"));

const Analytic = lazy(() => import("./views/pages/Anal"));
const Product = lazy(() => import("./views/pages/Product"));
const Payment = lazy(() => import("./views/pages/Payment"));
const Ticket = lazy(() => import("./views/pages/Ticket"));
const Feedback = lazy(() => import("./views/pages/Feedback"));
const Blacklist = lazy(() => import("./views/pages/Blacklist"));
const Fraud = lazy(() => import("./views/pages/Fraud"));

const login = lazy(() => import("./views/pages/authentication/login/Login"));

// Set Layout and Component Using App Route
const RouteConfig = ({
  component: Component,
  fullLayout,
  permission,
  user,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) => {
      return (
        <ContextLayout.Consumer>
          {(context) => {
            let LayoutTag =
              fullLayout === true
                ? context.fullLayout
                : context.state.activeLayout === "horizontal"
                ? context.horizontalLayout
                : context.VerticalLayout;
            return (
              <LayoutTag {...props} permission={props.user}>
                <Suspense fallback={<Spinner />}>
                  <Component {...props} />
                </Suspense>
              </LayoutTag>
            );
          }}
        </ContextLayout.Consumer>
      );
    }}
  />
);
const mapStateToProps = (state) => {
  return {
    user: state.auth.login.userRole,
  };
};

const AppRoute = connect(mapStateToProps)(RouteConfig);

class AppRouter extends React.Component {
  render() {
    return (
      // Set the directory path if you are deploying in sub-folder
      <Router history={history}>
        <Switch>
          <AppRoute exact path={homeroute} component={Home} />
          <AppRoute path={homeroute + "/analytics"} component={Analytic} />
          <AppRoute path={homeroute + "/products"} component={Product} />
          <AppRoute path={homeroute + "/payments"} component={Payment} />
          <AppRoute path={homeroute + "/tickets"} component={Ticket} />
          <AppRoute path={homeroute + "/feedback"} component={Feedback} />
          <AppRoute path={homeroute + "/blacklists"} component={Blacklist} />
          <AppRoute path={homeroute + "/fraud"} component={Fraud} />

          <AppRoute path="/pages/login" component={login} fullLayout />
        </Switch>
      </Router>
    );
  }
}

export default AppRouter;
