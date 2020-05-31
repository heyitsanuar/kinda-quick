import * as React from "react";
import ChartComponent from "shared/components/chart/chart.component";
import { createArray } from "helper/array-generator";

const SelectionSortComponent = () => {
  const array = createArray();

  return <ChartComponent title='Selection Sort' items={array} />;
};

export default SelectionSortComponent;
