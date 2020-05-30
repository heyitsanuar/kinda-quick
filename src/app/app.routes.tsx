import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBarComponent from "shared/components/navigation/nav-bar.component";
import QuickSortComponent from "features/quick-sort/quick-sort.component";

import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    width: "90%",
    maxWidth: 1283,
    margin: "auto",
    padding: "200px 0px",
  },
});

const AppRoutes = () => {
  const classes = useStyles();

  return (
    <Router>
      <NavBarComponent />
      <Switch>
        <div className={classes.container}>
          <Route path='/quick-sort' component={QuickSortComponent} />
        </div>
      </Switch>
    </Router>
  );
};

export default AppRoutes;
