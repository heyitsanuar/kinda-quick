import * as React from "react";
import ChartComponent from "shared/components/chart/chart.component";
import { createArray } from "helper/array-generator";

const BubbleSortComponent = () => {
  const array = createArray();

  return <ChartComponent title='Bluble Sort' items={array} />;
};

export default BubbleSortComponent;
