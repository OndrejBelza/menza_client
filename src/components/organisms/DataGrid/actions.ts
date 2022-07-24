import { ActionTypes, Column } from "./types";

export const Actions: Record<ActionTypes, any> = {
  [ActionTypes.setFilter]: (column: Column, value: string) => ({
    type: ActionTypes.setFilter,
    column: column.name,
    value,
  }),
  [ActionTypes.toggleFilter]: (column: Column) => ({
    type: ActionTypes.toggleFilter,
    column: column.name,
  }),
};
