import { FC } from "react";
import DefaultLayout from "./DefaultLayout";

export type DefaultLayoutContainerProps = {
  children?: React.ReactNode;
};

const DefaultLayoutContainer: FC<DefaultLayoutContainerProps> = ({
  children,
}) => {
  return <DefaultLayout>{children}</DefaultLayout>;
};

export default DefaultLayoutContainer;
