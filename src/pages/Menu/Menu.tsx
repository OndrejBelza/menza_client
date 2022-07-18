import Page from "@blocks/Page";
import { MenuQuery } from "@generated/graphql";
import DataGridContainer, { Column } from "@organisms/DataGrid";
import { FC } from "react";
import Banner from "./components/Banner";

const formatCurrency = (value: string) => `${value} Kč`;

const columns: Column[] = [
  {
    header: "Název",
    path: "meal.name",
  },
  {
    header: "Kategorie",
    path: "meal.category.name",
  },
  {
    header: "Cena student",
    path: "priceStudent",
    formatValue: formatCurrency,
  },
  {
    header: "Cena normální",
    path: "priceRegular",
    formatValue: formatCurrency,
  },
];

export type MenuProps = {
  isLoading?: boolean;
  error?: string;
  menu?: MenuQuery["menu"];
};

const Menu: FC<MenuProps> = ({ isLoading, error, menu }) => {
  if (!menu?.restaurant) return <>restaurant not found</>;
  console.log(menu.mealPrices);
  return (
    <Page isLoading={isLoading} error={error}>
      <div className="max-w-5xl mx-auto space-y-4">
        <Banner {...menu.restaurant} />
        <DataGridContainer columns={columns} data={menu.mealPrices} />
      </div>
    </Page>
  );
};

export default Menu;
