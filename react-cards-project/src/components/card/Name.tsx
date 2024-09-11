import clsx from "clsx";

interface NameProps {
  name: string | undefined;
  nameColor: string | undefined;
  nameDarkColor: string | undefined;
}

export const Name = ({ name, nameColor, nameDarkColor }: NameProps) => {
  return (
    <>
      <div
        className={clsx("relative bottom-[200px] text-4xl w-fit px-6 py-1", {
          "bg-purple-500": nameColor === "purple-500",
          "bg-yellow-500": nameColor === "yellow-500",
          "bg-red-500": nameColor === "red-500",
          "bg-white": nameColor === "white",
        })}
      >
        {name}
      </div>
      <div
        className={clsx(
          "relative bottom-[222px] left-[4px] rotate-[20deg] z-[-1] w-[100px] h-[40px]",
          {
            "bg-purple-900": nameDarkColor === "purple-900",
            "bg-yellow-900": nameDarkColor === "yellow-900",
            "bg-red-900": nameDarkColor === "red-900",
            "bg-gray-400": nameDarkColor === "gray-400",
          }
        )}
      ></div>
    </>
  );
};
