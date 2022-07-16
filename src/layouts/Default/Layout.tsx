import { FC } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

export type DefaultLayoutProps = {
  children?: React.ReactNode;
};

const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">{children}</div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
