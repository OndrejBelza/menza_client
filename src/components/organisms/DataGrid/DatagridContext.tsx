import React, { createContext, useMemo } from "react";
import { Actions } from "./actions";
import { Column, Context, StateChanged } from "./types";

const defaultState: Context["state"] = {
  filter: {},
  openedFilters: [],
};
const context = createContext<Context>({
  state: defaultState,
  setFilter: () => null,
  toggleFilter: () => null,
});

export type ProviderProps = {
  state: Context["state"];
  onStateChange?: StateChanged;
  children: React.ReactNode;
};

const Provider = ({
  state,
  children,
  onStateChange,
}: ProviderProps): JSX.Element => {
  const value = useMemo(
    () => ({
      state,
      setFilter: (column: Column, value: string) =>
        onStateChange?.(Actions.setFilter(column, value)),
      toggleFilter: (column: Column) =>
        onStateChange?.(Actions.toggleFilter(column)),
    }),
    [onStateChange, state]
  );
  return <context.Provider value={value}>{children}</context.Provider>;
};

export const { Consumer } = context;

export default Provider;
