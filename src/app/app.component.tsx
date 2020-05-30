import * as React from "react";
import AppRoutes from "app/app.routes";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    width: "90%",
    maxWidth: 1298,
    margin: "auto",
  },
});

const AppComponent: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppRoutes />
    </div>
  );
};

export default AppComponent;
