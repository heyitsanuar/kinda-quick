import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBarComponent from "shared/components/navigation/nav-bar.component";
import LoaderComponent from "app/components/loader.component";
import BubbleSortComponent from "features/bubble-sort/bubble-sort.component";
import SelectionSortComponent from "features/selection-sort/selection-sort.component";
import InsertionSortComponent from "features/insertion-sort/insertion-sort.component";
import MergeSortComponent from "features/merge-sort/merge-sort.component";
import QuickSortComponent from "features/quick-sort/quick-sort.component";
import RadixSortComponent from "features/radix-sort/radix-sort.component";

import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    width: "90%",
    height: 300,
    maxWidth: 1283,
    margin: "auto",
    padding: "100px 0px",
  },
});

const AppRoutes = () => {
  const classes = useStyles();

  return (
    <Router>
      <NavBarComponent />
      <LoaderComponent />
      <Switch>
        <div className={classes.container}>
          <Route path='/' exact component={BubbleSortComponent} />
          <Route path='/bubble-sort' component={BubbleSortComponent} />
          <Route path='/insertion-sort' component={InsertionSortComponent} />
          <Route path='/selection-sort' component={SelectionSortComponent} />
          <Route path='/merge-sort' component={MergeSortComponent} />
          <Route path='/quick-sort' component={QuickSortComponent} />
          <Route path='/radix-sort' component={RadixSortComponent} />
        </div>
      </Switch>
    </Router>
  );
};

export default AppRoutes;
