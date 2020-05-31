import * as React from "react";
import ChartComponent from "shared/components/chart/chart.component";
import { createArray } from "helper/array-generator";

const InsertionSortComponent = () => {
  const array = createArray();

  return <ChartComponent title='Insertion Sort' items={array} />;
};

export default InsertionSortComponent;
