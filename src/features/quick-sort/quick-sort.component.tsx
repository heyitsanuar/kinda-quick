import * as React from "react";
import ChartComponent from "shared/components/chart/chart.component";

const QuickSortComponent = () => {
  const array = Array.from({ length: 50 }, () => Math.floor(Math.random() * 50) + 1);

  return <ChartComponent title='Quick Sort' items={array} />;
};

export default QuickSortComponent;
