import clsx from "clsx";

interface InfoLineProps {
  title: string;
  value: string | number | undefined;
  fontTop: string | undefined;
  fontBottom: string | undefined;
}

export const InfoLine = ({ title, value, fontTop, fontBottom }: InfoLineProps) => {
  return (
    <p className="m-0">
      <span className="text-3xl bg-clip-text text-transparent bg-gradient-to-b from-white from-50% to-gray">
        {title}:{" "}
      </span>
      <span
        className={clsx(
          "text-3xl bg-clip-text text-transparent bg-gradient-to-b",
          {
            "from-purple-500": fontTop === "purple-500",
            "from-red-500": fontTop === "red-500",
            "from-yellow-500": fontTop === "yellow-500",
            "from-marine-blue-500": fontTop === "marine-blue-500",
          },
          "from-40%",
          {
            "to-purple-900": fontBottom === "purple-900",
            "to-red-900": fontBottom === "red-900",
            "to-yellow-900": fontBottom === "yellow-900",
            "to-marine-blue-900": fontBottom === "marine-blue-900",
          }
        )}
      >
        {value}
      </span>
    </p>
  );
};
