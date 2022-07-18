import { FC } from "react";

export type BannerProps = {
  img: string;
  name: string;
  openingHours: string;
  address: string;
};

const Banner: FC<BannerProps> = ({ img, name, openingHours, address }) => (
  <div className="border rounded-md drop-shadow-sm overflow-hidden bg-white">
    <div
      style={{ backgroundImage: `url(${img})` }}
      className="h-32 bg-center bg-no-repeat bg-cover"
    />
    <div className="p-4">
      <p className="text-2xl font-semibold text-blue-500">{name}</p>
      <p className="text-gray-400">{address}</p>
      <p className="text-gray-400">{openingHours}</p>
    </div>
  </div>
);

export default Banner;
