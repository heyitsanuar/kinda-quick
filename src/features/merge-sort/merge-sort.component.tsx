import * as React from "react";
import ChartComponent from "shared/components/chart/chart.component";
import { createArray } from "helper/array-generator";

const MergeSortComponent = () => {
  const array = createArray();

  return <ChartComponent title='Merge Sort' items={array} />;
};

export default MergeSortComponent;
