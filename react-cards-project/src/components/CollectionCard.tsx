import clsx from "clsx";

interface CollectionCardProps {
  backCardImg: string | undefined;
  shadowColor: string | undefined;
  floatOnHover?: boolean | undefined;
  handleOnClick: void;
}

export const CollectionCard = ({
  backCardImg,
  shadowColor,
  floatOnHover,
  handleOnClick,
}: CollectionCardProps) => {
  return (
    <div
      onClick={() => handleOnClick}
      className={clsx(
        "cursor-pointer transition-all hover:shadow-2xl",
        {
          "hover:shadow-purple-500": shadowColor === "purple-500",
          "hover:shadow-yellow-500": shadowColor === "yellow-500",
          "hover:shadow-red-500": shadowColor === "red-500",
          "hover:shadow-marine-blue-500": shadowColor === "marine-blue-500",
          "hover:translate-y-[-50px]": floatOnHover,
        },
        "w-[250px] h-[385px] rounded-[8px] outline outline-8 m-10"
      )}
    >
      <img src={backCardImg} className="w-full h-full" alt="" />
    </div>
  );
};
