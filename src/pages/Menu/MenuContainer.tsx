import { useMenuQuery } from "@generated/graphql";
import { FC } from "react";
import { useParams } from "react-router-dom";
import Menu from "./Menu";

export type MenuContainerProps = {};

const MenuContainer: FC = () => {
  const { restaurantId, date } =
    useParams<{ restaurantId: string; date: string }>();

  const { data, loading, error } = useMenuQuery({
    variables: { restaurantId, date },
  });

  return <Menu isLoading={loading} error={error?.message} menu={data?.menu} />;
};

export default MenuContainer;
