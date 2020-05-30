import * as React from "react";
import BarComponent from "shared/components/bar.component";

const array = [
  6,
  26,
  30,
  29,
  19,
  36,
  2,
  41,
  33,
  11,
  18,
  23,
  44,
  9,
  48,
  50,
  35,
  3,
  12,
  31,
  45,
  32,
  42,
  37,
  21,
  7,
  4,
  25,
  34,
  15,
  43,
  14,
  1,
  28,
  10,
  16,
  17,
  49,
  39,
  5,
  47,
  40,
  27,
  22,
  13,
  24,
  38,
  20,
  46,
  8,
];

const ChartComponent: React.FC = () => {
  return (
    <React.Fragment>
      {array.map((i: any) => (
        <BarComponent height={i} />
      ))}
    </React.Fragment>
  );
};

export default ChartComponent;
