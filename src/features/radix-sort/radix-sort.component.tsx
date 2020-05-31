import * as React from "react";
import ChartComponent from "shared/components/chart/chart.component";
import { createArray } from "helper/array-generator";

const RadixSortComponent = () => {
  const array = createArray();

  return <ChartComponent title='Radix Sort' items={array} />;
};

export default RadixSortComponent;
