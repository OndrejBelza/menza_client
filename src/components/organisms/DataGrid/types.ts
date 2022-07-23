export enum Alignment {
  left,
  center,
  right,
}

export type Column = {
  key: string;
  header: string;
  path?: string;
  align?: Alignment;
  width?: string;
  generateLink?: (row: RowData) => string;
  formatValue?: (value: any) => string;
  customCell?: (value: any, row: RowData) => JSX.Element;
  supportsFiltering?: boolean;
};

export type RowData = {
  [column: string]: any;
};

export type CustomCell = {
  row: RowData;
  value: any;
  subscriber?: (event: string, row: RowData) => void;
  generateLink?: (row: RowData) => string;
};

export type DataGridProps<T extends RowData = RowData> = {
  columns: Column[];
  data: T[];
  subscriber?: (event: string, row: T) => void;
};
