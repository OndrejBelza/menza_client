import { useMenuQuery, useRestaurantQuery } from "@generated/graphql";
import dayjs from "dayjs";
import { FC, useCallback } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Menu from "./Menu";

export type MenuContainerProps = {};

const MenuContainer: FC = () => {
  const [currentQueryParameters, setSearchParams] = useSearchParams();
  const dateQuery = currentQueryParameters.get("date");
  const date = dateQuery ? dayjs(dateQuery).toDate() : new Date();

  const { restaurantId } = useParams<{ restaurantId: string }>();

  const { data, loading, error } = useMenuQuery({
    variables: { restaurantId, date: dayjs(date).format("YYYY-MM-DD") },
  });

  const {
    data: restaurant,
    loading: restaurantLoading,
    error: restaurantError,
  } = useRestaurantQuery({ variables: { restaurantId } });

  const onDateChange = useCallback(
    (date: Date | null) => {
      if (date) setSearchParams({ date: dayjs(date).format("YYYY-MM-DD") });
    },
    [setSearchParams]
  );

  return (
    <Menu
      isMenuLoading={loading}
      isRestaurantLoading={restaurantLoading}
      error={error?.message || restaurantError?.message}
      menu={data?.menu}
      restaurant={restaurant?.restaurant}
      date={date}
      onDateChange={onDateChange}
    />
  );
};

export default MenuContainer;
