import Page from "@blocks/Page";
import { MealsQuery } from "@generated/graphql";
import { FC } from "react";
import MealCard from "./components/MealCard";

export type MealsProps = {
  isLoading?: boolean;
  error?: string;
  meals?: MealsQuery["meals"];
  generateMealLink: (id: string) => string;
};

const Meals: FC<MealsProps> = ({
  isLoading,
  error,
  meals,
  generateMealLink,
}) => {
  return (
    <Page isLoading={isLoading} error={error}>
      <div className="max-w-5xl mx-auto mt-10">
        <div className="flex flex-col space-y-4">
          {meals?.map((meal) => (
            <MealCard
              key={meal.id}
              {...meal}
              category={meal.category?.name}
              generateMealLink={generateMealLink}
            />
          ))}
        </div>
      </div>
    </Page>
  );
};

export default Meals;
