import { FC } from "react";

export type DefaultLayoutProps = {
  children?: React.ReactNode;
};

const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
  return <>hello world {children} </>;
};

export default DefaultLayout;
