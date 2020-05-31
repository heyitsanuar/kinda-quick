import * as React from "react";
import { BarView, BarStatus } from "shared/models/bar";
import { createUseStyles } from "react-jss";
import { colors } from "shared/theme/colors";

const BAR_HEIGHT_SCALE = 6;

const useStyles = createUseStyles({
  bar: {
    width: 10,
    margin: "0px 1px",
  },
});

const getBarColor = (type: BarStatus) => {
  switch (type) {
    case "unordered":
      return colors.dark;
    default:
      return colors.dark;
  }
};

const BarComponent: React.FC<BarView> = (props) => {
  const classes = useStyles();

  return (
    <div
      className={classes.bar}
      style={{ height: props.height * BAR_HEIGHT_SCALE, background: getBarColor(props.type) }}
    />
  );
};

export default BarComponent;
