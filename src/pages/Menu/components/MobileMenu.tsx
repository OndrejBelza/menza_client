import { MenuQuery } from "@generated/graphql";
import { FC, useCallback, useMemo } from "react";
import groupBy from "lodash/groupBy";
import MenuItemCard from "./MenuItemCard";
import Category from "@elements/Category";

export type MobileMenuProps = {
  menu: MenuQuery["menu"];
};

const MobileMenu: FC<MobileMenuProps> = ({ menu }) => {
  const groupedMealPrices = useMemo(
    () => groupBy(menu.mealPrices, "meal.category.name"),
    [menu.mealPrices]
  );

  const generateLink = useCallback((id: string) => `/meal/${id}`, []);

  return (
    <div className="space-y-4">
      {Object.keys(groupedMealPrices).map((category) => (
        <div key={category} className="space-y-2">
          <p className="text-lg font-semibold">
            <Category name={category} />
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {groupedMealPrices[category].map((mealPrice) => (
              <MenuItemCard
                mealPrice={mealPrice}
                key={mealPrice.id}
                generateLink={generateLink}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MobileMenu;
