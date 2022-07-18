export enum Alignment {
  left,
  center,
  right,
}

export type Column = {
  header: string;
  path: string;
  align?: Alignment;
  formatValue?: (value: any) => string;
  supportsFiltering?: boolean;
};

export type RowData = {
  [column: string]: any;
};

export type DataGridProps<T extends RowData = RowData> = {
  columns: Column[];
  data: T[];
};
