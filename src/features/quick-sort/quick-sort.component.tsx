import * as React from "react";
import ChartComponent from "shared/components/chart/chart.component";
import { createArray } from "helper/array-generator";

const QuickSortComponent = () => {
  const array = createArray();

  return <ChartComponent title='Quick Sort' items={array} />;
};

export default QuickSortComponent;
