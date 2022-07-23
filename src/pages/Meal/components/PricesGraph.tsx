import dayjs from "dayjs";
import { FC } from "react";
import groupBy from "lodash/groupBy";
import { ResponsiveLine, Serie } from "@nivo/line";
import max from "lodash/max";

export type PricesGraphProps = {
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

const PricesGraph: FC<PricesGraphProps> = ({ prices }) => {
  const maxPrice = max(prices.map((price) => price.priceRegular));
  const yScaleMax = maxPrice ? maxPrice + 10 : undefined;
  const groupedByRestaurant = groupBy(prices, "restaurant.name");
  const data: Serie[] = [];
  Object.keys(groupedByRestaurant).forEach((restaurant) => {
    data.push({
      id: `${restaurant} - student`,
      data: groupedByRestaurant[restaurant].map((price) => ({
        x: dayjs(price.date).format("DD.MM.YYYY"),
        y: price.priceStudent,
      })),
    });
    data.push({
      id: `${restaurant} - normální`,
      data: groupedByRestaurant[restaurant].map((price) => ({
        x: dayjs(price.date).format("DD.MM.YYYY"),
        y: price.priceRegular,
      })),
    });
  });
  console.log(groupedByRestaurant);
  return (
    <div className="w-full h-60">
      <ResponsiveLine
        data={data}
        enableArea={true}
        yScale={{ type: "linear", min: 0, max: yScaleMax }}
        curve="linear"
        animate={true}
        margin={{ top: 20, right: 20, bottom: 60, left: 80 }}
        enableSlices="x"
      />
    </div>
  );
};

export default PricesGraph;
