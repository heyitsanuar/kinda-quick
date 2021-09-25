import * as React from "react";
import { BarView } from "shared/models/chart";

import "./bar.styles.scss";

const BAR_HEIGHT_SCALE = 6;

const BarComponent: React.FC<BarView> = (props) => (<div className="bar" style={{ height: props.height * BAR_HEIGHT_SCALE }} />);

export default BarComponent;
