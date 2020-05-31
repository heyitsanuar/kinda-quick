import * as React from "react";
import { BarView } from "shared/models/bar";
import { createUseStyles } from "react-jss";

const BAR_HEIGHT_SCALE = 6;

const useStyles = createUseStyles({
  bar: {
    width: 10,
    background: "#002C3E",
    margin: "0px 1px",
  },
});

const BarComponent: React.FC<BarView> = (props) => {
  const classes = useStyles();

  return <div className={classes.bar} style={{ height: props.height * BAR_HEIGHT_SCALE }} />;
};

export default BarComponent;
