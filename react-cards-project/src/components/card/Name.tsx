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
        className={clsx(
          "relative bottom-[190px] z-30 text-3xl w-fit px-4 py-0",
          {
            "bg-purple-500": nameColor === "purple-500",
            "bg-yellow-500": nameColor === "yellow-500",
            "bg-red-500": nameColor === "red-500",
            "bg-white": nameColor === "white",
          }
        )}
      >
        {name}
      </div>
      <div
        className={clsx(
          "relative bottom-[211px] left-[4px] rotate-[20deg] w-[100px] h-[40px]",
          {
            "bg-purple-900": nameDarkColor === "purple-900",
            "bg-yellow-900": nameDarkColor === "yellow-900",
            "bg-red-900": nameDarkColor === "red-900",
            "bg-gray-800": nameDarkColor === "gray-800",
          }
        )}
      ></div>
    </>
  );
};
