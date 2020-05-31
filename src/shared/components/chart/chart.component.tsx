import * as React from "react";
import BarComponent from "shared/components/bar.component";
import { ChartView } from "shared/models/chart";

import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    display: "flex",
  },
  container: {
    margin: "auto",
  },
  chart: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  title: {
    width: "100%",
    marginBottom: 60,
  },
});

const ChartComponent: React.FC<ChartView> = (props) => {
  const classes = useStyles();
  const { items, title } = props;

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <h1 className={classes.title}>{title}</h1>
        <div className={classes.chart}>
          {items.map((i: any) => (
            <BarComponent height={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChartComponent;
