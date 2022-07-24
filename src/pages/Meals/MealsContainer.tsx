import { useCategoriesQuery, useMealsQuery } from "@generated/graphql";
import { Action, ActionTypes, State } from "@organisms/DataGrid";
import produce from "immer";
import debounce from "lodash/debounce";
import { FC, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Meals from "./Meals";
import getFilter from "./utils/getFilter";

const MealsContainer: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data: categories, error: categoriesError } = useCategoriesQuery();

  const [dataGridState, setDataGridState] = useState<State>(() => {
    const filter = getFilter({
      name: searchParams.get("name"),
      category: searchParams.get("category"),
    });
    return {
      filter,
      openedFilters: Object.keys(filter),
    };
  });

  const { data, loading, error, refetch } = useMealsQuery({
    variables: {
      filter: dataGridState.filter,
    },
  });

  const subscriber = (action: Action) => {
    setDataGridState(
      produce(dataGridState, (draft) => {
        if (action.type === ActionTypes.setFilter) {
          if (action.value) draft.filter[action.column] = action.value;
          else delete draft.filter[action.column];
          setSearchParams(draft.filter);
        }
        if (action.type === ActionTypes.toggleFilter) {
          if (!draft.openedFilters.includes(action.column))
            draft.openedFilters = [...draft.openedFilters, action.column];
          else
            draft.openedFilters = draft.openedFilters.filter(
              (column) => column !== action.column
            );
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
      categories={categoriesOptions}
      dataGridSubscriber={subscriber}
    />
  );
};

export default MealsContainer;
