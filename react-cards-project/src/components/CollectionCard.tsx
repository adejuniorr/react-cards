import clsx from "clsx";

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
  const showCollection = () => {
    setSelectedCollection(collectionId);
  };

  return (
    <div
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
        "w-[160px] h-[246px] rounded-[8px] outline outline-8 m-10"
      )}
    >
      <img src={backCardImg} className="w-full h-full" alt="" />
    </div>
  );
};
