import { IBarItem } from "shared/models/bar";
import { v4 as uuid } from "uuid";

export function createArray(): IBarItem[] {
  return Array.from({ length: 50 }, () => ({
    id: uuid(),
    value: Math.floor(Math.random() * 50) + 1,
    type: "unordered",
  }));
}
