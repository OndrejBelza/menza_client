import Page from "@blocks/Page";
import Category from "@elements/Category";
import { MealQuery } from "@generated/graphql";
import React, { FC } from "react";
import ImageCard from "./components/ImageCard";
import PricesGraph from "./components/PricesGraph";

export type MealProps = {
  isLoading?: boolean;
  error?: string;
  meal?: MealQuery["meal"];
};

const Meal: FC<MealProps> = ({ isLoading, error, meal }) => {
  return (
    <Page isLoading={isLoading} error={error}>
      <div className="max-w-5xl mx-2 lg:mx-auto mt-10">
        <div>
          <h1 className="text-blue-500 text-2xl mb-2">{meal?.name}</h1>
          {meal?.category && <Category name={meal.category.name} />}
        </div>

        {meal?.pictures && meal.pictures.length > 0 && (
          <div className="mt-4">
            <h2 className="text-xl">Obrázky</h2>
            <div className="grid grid-cols-3 gap-4">
              {meal.pictures.map((picture) => (
                <ImageCard key={picture.id} {...picture} />
              ))}
            </div>
          </div>
        )}

        {meal?.prices && meal.prices.length > 0 && (
          <div className="mt-4">
            <h2 className="text-xl">Historie cen</h2>

            <PricesGraph prices={meal.prices} />
          </div>
        )}
      </div>
    </Page>
  );
};

export default Meal;
