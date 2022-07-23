import Page from "@blocks/Page";
import { MenuQuery } from "@generated/graphql";
import DataGridContainer, { Column } from "@organisms/DataGrid";
import { FC } from "react";
import Banner from "./components/Banner";

const formatCurrency = (value: string) => `${value} Kč`;

const columns: Column[] = [
  {
    key: "name",
    header: "Název",
    path: "meal.name",
  },
  {
    key: "category",
    header: "Kategorie",
    path: "meal.category.name",
  },
  {
    key: "priceStudent",
    header: "Cena student",
    path: "priceStudent",
    formatValue: formatCurrency,
  },
  {
    key: "priceRegular",
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
  if (!menu?.restaurant && !isLoading) return <>restaurant not found</>;

  return (
    <Page isLoading={isLoading} error={error}>
      <div className="max-w-5xl mx-auto space-y-4 mt-10">
        {menu?.restaurant && <Banner {...menu.restaurant} />}
        {(menu?.mealPrices?.length || 0) > 1 ? (
          <DataGridContainer columns={columns} data={menu?.mealPrices || []} />
        ) : (
          <p className="text-center mt-4 text-lg">
            <span className="italic ">žádné informace</span> 😥
          </p>
        )}
      </div>
    </Page>
  );
};

export default Menu;
