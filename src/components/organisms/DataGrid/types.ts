export enum Alignment {
  left,
  center,
  right,
}

export type Column = {
  name: string;
  header: string;
  path?: string;
  align?: Alignment;
  width?: string;
  generateLink?: (row: RowData) => string;
  formatValue?: (value: any) => string;
  customCell?: (value: any, row: RowData) => JSX.Element;
  supportSorting?: boolean;
  filter?: Filter;
};

export type RowData = {
  [column: string]: any;
};

export type CustomCell = {
  row: RowData;
  value: any;
  generateLink?: (row: RowData) => string;
};

export type DataGridProps<T extends RowData = RowData> = {
  isLoading?: boolean;
  columns: Column[];
  data: T[];
  state: Context["state"];
  subscriber?: StateChanged;
};

export type State = {
  filter: Record<string, string>;
  openedFilters: string[];
};

export type Context = {
  setFilter: (column: Column, value: any) => void;
  toggleFilter: (column: Column) => void;
  state: State;
};

export enum ActionTypes {
  setFilter = "setFilter",
  toggleFilter = "toggleFilter",
}

export type Action = Record<"type", ActionTypes> & Record<string, any>;

export type StateChanged = (action: Action) => void;

export enum FilterTypes {
  text = "text",
  select = "select",
}

export type TextFilter = {
  type: FilterTypes.text;
};

export type SelectFilter = {
  type: FilterTypes.select;
  options: { value: string | undefined; label: string }[];
};

export type Filter = TextFilter | SelectFilter;
