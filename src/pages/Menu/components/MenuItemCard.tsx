import { MenuQuery } from "@generated/graphql";
import { FC, useMemo } from "react";
import { Link } from "react-router-dom";

export type MenuItemCardProps = {
  mealPrice: MenuQuery["menu"]["mealPrices"][0];
  generateLink: (id: string) => string;
};

const MenuItemCard: FC<MenuItemCardProps> = ({ mealPrice, generateLink }) => (
  <Link
    to={useMemo(
      () => generateLink(mealPrice.meal?.id),
      [generateLink, mealPrice.meal?.id]
    )}
    className="bg-white border drop-shadow-sm rounded-md p-4 flex flex-col space-y-2 "
  >
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
  </Link>
);

export default MenuItemCard;
