export type BarStatus = "unordered" | "ordered" | "current";
export interface IBarItem {
  id: string;
  value: number;
  type: BarStatus;
}

export interface BarView {
  height: number;
  type: BarStatus;
}
