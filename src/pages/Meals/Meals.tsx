import Page from "@blocks/Page";
import { MealsQuery } from "@generated/graphql";
import DataGridContainer, { Column, RowData } from "@organisms/DataGrid";
import { FC } from "react";
import CategoryCell from "./components/CategoryCell";
import MealNameCell from "./components/MealNameCell";

const columns: Column[] = [
  {
    key: "name",
    header: "Název",
    path: "name",
    generateLink: ({ id }) => `/meal/${id}`,
    customCell: MealNameCell,
  },
  {
    key: "category",
    header: "Kategorie",
    path: "category.name",
    width: "150px",
    customCell: CategoryCell,
  },
];

export type MealsProps = {
  isLoading?: boolean;
  error?: string;
  meals?: MealsQuery["meals"];
  dataGridSubscriber?: (event: string, row: RowData) => void;
};

const Meals: FC<MealsProps> = ({
  isLoading,
  error,
  meals,
  dataGridSubscriber,
}) => {
  return (
    <Page isLoading={isLoading} error={error}>
      <div className="max-w-5xl mx-auto mt-10">
        <div className="flex flex-col space-y-4">
          <DataGridContainer
            columns={columns}
            data={meals || []}
            subscriber={dataGridSubscriber}
          />
        </div>
      </div>
    </Page>
  );
};

export default Meals;
