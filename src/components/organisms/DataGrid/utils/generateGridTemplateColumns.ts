import { Column } from "../types";

const generateGridTemplateColumns = (columns: Column[]): string => {
  if (columns.every((column) => typeof column.width === "undefined"))
    return `repeat(${columns.length},minmax(200px,1fr))`;

  let template = "";
  columns.forEach((column) => {
    if (column.width) template += ` ${column.width}`;
    else template += ` minmax(200px,1fr)`;
  });

  return template;
};

export default generateGridTemplateColumns;
