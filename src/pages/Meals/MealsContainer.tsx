import { useCategoriesQuery, useMealsQuery } from "@generated/graphql";
import { Action, ActionTypes, State } from "@organisms/DataGrid";
import produce from "immer";
import { FC, useEffect, useMemo, useState } from "react";
import Meals from "./Meals";
import debounce from "lodash/debounce";

const MealsContainer: FC = () => {
  const { data, loading, error, refetch } = useMealsQuery();
  const {
    data: categories,
    error: categoriesError,
    loading: categoriesLoading,
  } = useCategoriesQuery();

  const [dataGridState, setDataGridState] = useState<State>({ filter: {} });

  const subscriber = (action: Action) => {
    setDataGridState(
      produce(dataGridState, (draft) => {
        if (action.type === ActionTypes.setFilter) {
          if (action.value) draft.filter[action.column] = action.value;
          else delete draft.filter[action.column];
        }
        return draft;
      })
    );
  };

  const refetchDebounced = useMemo(
    () => debounce(refetch, 300, { trailing: true }),
    [refetch]
  );

  useEffect(() => {
    refetchDebounced({ filter: dataGridState.filter });
  }, [dataGridState.filter, refetch, refetchDebounced]);

  const categoriesOptions = useMemo(
    () =>
      categories?.categories
        ? [
            { value: undefined, label: "Vyberte..." },
            ...categories.categories.map((category) => ({
              label: category.name,
              value: category.name,
            })),
          ]
        : [{ value: undefined, label: "Vyberte..." }],
    [categories?.categories]
  );

  return (
    <Meals
      meals={data?.meals}
      isLoading={loading}
      error={error?.message || categoriesError?.message}
      dataGridState={dataGridState}
      categoriesLoading={categoriesLoading}
      categories={categoriesOptions}
      dataGridSubscriber={subscriber}
    />
  );
};

export default MealsContainer;
