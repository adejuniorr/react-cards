export const Name = ({ name }: { name: string }) => {
  return (
    <>
      <div className="relative bottom-[200px] text-4xl w-fit px-6 py-1 bg-pink">
        {name}
      </div>
      <div className="relative bottom-[223px] rotate-[20deg] z-[-1] w-[100px] h-[40px] bg-darkPurple"></div>
    </>
  );
};
