import clsx from "clsx";
import { useState } from "react";

interface CollectionCardProps {
  backCardImg: string | undefined;
  shadowColor: string | undefined;
  collectionId: number;
  setSelectedCollection: (num: number) => void;
  floatOnHover?: boolean;
}

export const CollectionCard = ({
  backCardImg,
  shadowColor,
  collectionId,
  setSelectedCollection,
  floatOnHover,
}: CollectionCardProps) => {
  const [isHovered, setIsHovered] = useState<[boolean, string | undefined]>([
    false,
    shadowColor,
  ]);
  const showCollection = () => {
    setSelectedCollection(collectionId);
  };

  return (
    <>
      <div
        onMouseEnter={() => setIsHovered([true, shadowColor])}
        onMouseLeave={() => setIsHovered([false, shadowColor])}
        onClick={showCollection}
        className={clsx(
          "cursor-pointer transition-all hover:shadow-2xl",
          {
            "hover:shadow-purple-500": shadowColor === "purple-500",
            "hover:shadow-yellow-500": shadowColor === "yellow-500",
            "hover:shadow-red-500": shadowColor === "red-500",
            "hover:shadow-marine-blue-500": shadowColor === "marine-blue-500",
            "hover:translate-y-[-50px]": floatOnHover,
          },
          "w-[200px] rounded-[8px] outline outline-8 m-10"
        )}
      >
        <img src={backCardImg} className="w-[100%]" alt="" />
      </div>
      <div
        className={clsx(
          "absolute top-0 z-[-1] w-full h-[100vh] bg-gradient-to-b from-[#303030]",
          {
            "to-purple-500": shadowColor === "purple-500" && isHovered[0],
            "to-yellow-500": shadowColor === "yellow-500" && isHovered[0],
            "to-red-500": shadowColor === "red-500" && isHovered[0],
            "to-marine-blue-500":
              shadowColor === "marine-blue-500" && isHovered[0],
          }
        )}
      ></div>
    </>
  );
};
