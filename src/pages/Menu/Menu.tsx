import Page from "@blocks/Page";
import { MenuQuery, RestaurantQuery } from "@generated/graphql";
import DataGridContainer, { Column } from "@organisms/DataGrid";
import { FC } from "react";
import { DateChangeCallBack, DatePicker } from "react-nice-dates";
import Banner from "./components/Banner";
import { cs } from "date-fns/locale";
import Input from "@elements/Input";
import { PuffLoader } from "react-spinners";
import MobileMenu from "./components/MobileMenu";

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
  isMenuLoading?: boolean;
  isRestaurantLoading?: boolean;
  date: Date;
  onDateChange: DateChangeCallBack;
  error?: string;
  menu?: MenuQuery["menu"];
  restaurant?: RestaurantQuery["restaurant"];
};

const Menu: FC<MenuProps> = ({
  isMenuLoading,
  isRestaurantLoading,
  error,
  menu,
  restaurant,
  date,
  onDateChange,
}) => {
  return (
    <Page isLoading={isRestaurantLoading} error={error}>
      <div className="max-w-5xl mx-2  lg:mx-auto space-y-4 mt-10 ">
        {restaurant && <Banner {...restaurant} />}
        <DatePicker locale={cs} onDateChange={onDateChange} date={date}>
          {({ inputProps }) => (
            <Input {...inputProps} disabled={isMenuLoading} />
          )}
        </DatePicker>
        {isMenuLoading && (
          <div className="w-full flex flex-col items-center">
            <PuffLoader color="#3482F6" />
            <span className="mt-2">načítání...</span>
          </div>
        )}
        {!isMenuLoading && !!menu?.mealPrices?.length && (
          <>
            <div className="block lg:hidden">
              <MobileMenu menu={menu} />
            </div>
            <div className="hidden lg:block">
              <DataGridContainer
                columns={columns}
                data={menu?.mealPrices || []}
              />
            </div>
          </>
        )}
        {!isMenuLoading && !menu?.mealPrices.length && (
          <p className="text-center mt-4 text-lg">
            <span className="italic ">žádné informace</span> 😥
          </p>
        )}
      </div>
    </Page>
  );
};

export default Menu;
