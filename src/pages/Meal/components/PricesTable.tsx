import dayjs from "dayjs";
import { FC } from "react";

export type PricesTableProps = {
  prices: {
    id: string;
    date: Date;
    priceRegular: number;
    priceStudent: number;
    restaurant?: {
      id: string;
      name: string;
    } | null;
  }[];
};

const PricesTable: FC<PricesTableProps> = ({ prices }) => {
  return (
    <div className="flex flex-col space-y-4">
      {prices.map((price) => (
        <div key={price.id} className="p-4 border rounded-md drop-shadow-sm">
          <p>Datum: {dayjs(price.date).format("DD.MM.YYYY")}</p>
          {price.restaurant && <p>Restaurace: {price.restaurant.name}</p>}
          <p>Cena student: {price.priceStudent} Kč</p>
          <p>Cena normální: {price.priceRegular} Kč</p>
        </div>
      ))}
    </div>
  );
};

export default PricesTable;
