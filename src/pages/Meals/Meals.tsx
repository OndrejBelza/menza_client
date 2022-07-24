import Page from "@blocks/Page";
import { MealsQuery } from "@generated/graphql";
import DataGridContainer, {
  Column,
  FilterTypes,
  State,
  StateChanged,
} from "@organisms/DataGrid";
import { FC, useMemo } from "react";
import CategoryCell from "./components/CategoryCell";
import MealNameCell from "./components/MealNameCell";

export type MealsProps = {
  isLoading?: boolean;
  categoriesLoading?: boolean;
  error?: string;
  meals?: MealsQuery["meals"];
  categories: { label: string; value: string | undefined }[];
  dataGridState: State;
  dataGridSubscriber?: StateChanged;
};

const Meals: FC<MealsProps> = ({
  isLoading,
  error,
  meals,
  dataGridState,
  categories,
  categoriesLoading,
  dataGridSubscriber,
}) => {
  const columns = useMemo<Column[]>(
    () => [
      {
        name: "name",
        header: "Název",
        path: "name",
        generateLink: ({ id }) => `/meal/${id}`,
        customCell: MealNameCell,
        filter: { type: FilterTypes.text },
      },
      {
        name: "category",
        header: "Kategorie",
        path: "category.name",
        width: "150px",
        customCell: CategoryCell,
        filter: { type: FilterTypes.select, options: categories },
      },
    ],
    [categories]
  );

  return (
    <Page error={error}>
      <div className="max-w-5xl mx-2 lg:mx-auto mt-10">
        <div className="flex flex-col space-y-4">
          <DataGridContainer
            columns={columns}
            data={meals || []}
            state={dataGridState}
            isLoading={isLoading}
            subscriber={dataGridSubscriber}
          />
        </div>
      </div>
    </Page>
  );
};

export default Meals;
