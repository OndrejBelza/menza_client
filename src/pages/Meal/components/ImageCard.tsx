import { FC } from "react";

export type ImageCardProps = {
  img: string;
  restaurant?: {
    name: string;
  } | null;
};

const ImageCard: FC<ImageCardProps> = ({ img, restaurant }) => {
  return (
    <div className="border rounded-md drop-shadow-sm p-4">
      <img
        src={process.env.REACT_APP_BASE_IMG_URL + img}
        alt="meal"
        className="rounded-md"
      />
      {restaurant && <p className="text-center mt-2">{restaurant.name}</p>}
    </div>
  );
};

export default ImageCard;
