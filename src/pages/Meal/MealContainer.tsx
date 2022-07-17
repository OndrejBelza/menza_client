import { useMealQuery } from "@generated/graphql";
import { FC } from "react";
import { useParams } from "react-router-dom";
import Meal from "./Meal";

const MealContainer: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, loading, error } = useMealQuery({ variables: { id } });
  return <Meal isLoading={loading} error={error?.message} meal={data?.meal} />;
};

export default MealContainer;
