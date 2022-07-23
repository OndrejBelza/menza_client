import { MenuQuery } from "@generated/graphql";
import { FC } from "react";

export type MenuItemCardProps = {
  mealPrice: MenuQuery["menu"]["mealPrices"][0];
};

const MenuItemCard: FC<MenuItemCardProps> = ({ mealPrice }) => (
  <div className="bg-white border drop-shadow-sm rounded-md p-4 flex flex-col space-y-2">
    <p className="font-semibold text-lg text-blue-500">
      {mealPrice.meal?.name}
    </p>
    <p>
      Cena student:
      <span className="ml-2 p-1 bg-black rounded-md text-white">
        {mealPrice.priceStudent} Kč
      </span>
    </p>
    <p>
      Cena normální:
      <span className="ml-2 p-1 bg-black rounded-md text-white">
        {mealPrice.priceRegular} Kč
      </span>
    </p>
  </div>
);

export default MenuItemCard;
