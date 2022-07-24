import Page from "@blocks/Page";
import { MenuQuery, RestaurantQuery } from "@generated/graphql";
import DataGridContainer, { Alignment, Column } from "@organisms/DataGrid";
import { FC } from "react";
import { DateChangeCallBack, DatePicker } from "react-nice-dates";
import Banner from "./components/Banner";
import { cs } from "date-fns/locale";
import Input from "@elements/Input";
import { PuffLoader } from "react-spinners";
import MobileMenu from "./components/MobileMenu";
import CategoryCell from "./components/CategoryCell";
import MealNameCell from "./components/MealNameCell";
import { getDay, isAfter, isBefore } from "date-fns";

const formatCurrency = (value: string) => `${parseFloat(value).toFixed(2)} Kč`;

const columns: Column[] = [
  {
    name: "name",
    header: "Název",
    path: "meal.name",
    customCell: MealNameCell,
    generateLink: (row) => `/meal/${row.meal.id}`,
  },
  {
    name: "category",
    header: "Kategorie",
    width: "150px",
    path: "meal.category.name",
    customCell: CategoryCell,
  },
  {
    name: "priceStudent",
    header: "Cena student",
    width: "150px",
    path: "priceStudent",
    formatValue: formatCurrency,
    align: Alignment.right,
  },
  {
    name: "priceRegular",
    header: "Cena normální",
    width: "150px",
    path: "priceRegular",
    formatValue: formatCurrency,
    align: Alignment.right,
  },
];

const modifiers = {
  disabled: (date: Date) => {
    if (isAfter(date, new Date())) return true;
    if (isBefore(date, new Date("2022-05-23"))) return true;
    const day = getDay(date);
    return [6, 0].includes(day);
  },
};

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
        <DatePicker
          locale={cs}
          onDateChange={onDateChange}
          date={date}
          modifiers={modifiers}
        >
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
                state={{ filter: {}, openedFilters: [] }}
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
