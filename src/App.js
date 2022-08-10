import * as React from 'react';
import { HashRouter, Switch, Route } from "react-router-dom";

import Dashboard from "./views/Dashboard/Dashboard";
import Users from "./views/Users/Users";

import DrawerRouterContainer from "./navigators/DrawerRouterContainer";

const App = () => {
  return(
    <DrawerRouterContainer />
  // <HashRouter>
  //   <DrawerRouterContainer>
  //     <Switch>
  //       <Route exact={true} path="/" component={Dashboard} />
  //       <Route exact={true} path="/users" component={Users} />
  //     </Switch>
  //   </DrawerRouterContainer>
  //  </HashRouter>
  )
};

export default App;
