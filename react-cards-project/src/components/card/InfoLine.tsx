interface InfoLineProps {
  title: string;
  value: string | number | undefined;
}

export const InfoLine = ({ title, value }: InfoLineProps) => {
  return (
    <p className="m-0">
      <span className="text-3xl bg-clip-text text-transparent bg-gradient-to-b from-white from-50% to-gray">
        {title}:{" "}
      </span>
      <span className="text-3xl bg-clip-text text-transparent bg-gradient-to-b from-purple-500 from-40% to-purple-900">
        {value}
      </span>
    </p>
  );
};
