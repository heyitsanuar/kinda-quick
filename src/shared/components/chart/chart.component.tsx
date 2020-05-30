import * as React from "react";
import BarComponent from "shared/components/bar.component";
import { ChartView } from "shared/models/chart";

const ChartComponent: React.FC<ChartView> = (props) => {
  const { items } = props;

  return (
    <React.Fragment>
      {items.map((i: any) => (
        <BarComponent height={i} />
      ))}
    </React.Fragment>
  );
};

export default ChartComponent;
