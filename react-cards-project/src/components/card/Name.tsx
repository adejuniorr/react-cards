export const Name = ({ name }: { name: string | undefined }) => {
  return (
    <>
      <div className="relative bottom-[200px] text-4xl w-fit px-6 py-1 bg-purple-500">
        {name}
      </div>
      <div className="relative bottom-[222px] left-[4px] rotate-[20deg] z-[-1] w-[100px] h-[40px] bg-purple-900"></div>
    </>
  );
};
