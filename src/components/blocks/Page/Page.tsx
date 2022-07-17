import Error from "@pages/Error";
import Loading from "@pages/Loading";
import { FC, ReactNode } from "react";

export type PageProps = {
  isLoading?: boolean;
  error?: string;
  children?: ReactNode;
};

const Page: FC<PageProps> = ({ children, isLoading, error }) => {
  if (isLoading) return <Loading />;
  if (error) return <Error error={error} />;
  return <>{children}</>;
};

export default Page;
