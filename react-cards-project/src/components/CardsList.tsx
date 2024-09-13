import { Dispatch, SetStateAction } from "react";

interface CardsListProps {
  selectedCollectionId: number;
  isOpen: boolean;
  setSelectedCollectionId: Dispatch<SetStateAction<number>>;
}

export const CardsList = ({
  isOpen,
  selectedCollectionId,
  setSelectedCollectionId,
}: CardsListProps) => {
  return (
    <>
      {isOpen ? (
        <div className="absolute top-0 left-0 w-[100vw] h-[100vh] flex justify-center items-center bg-black/[.54] text-2xl text-red-500">
          <button onClick={() => setSelectedCollectionId(-1)}>
            {selectedCollectionId}
          </button>
        </div>
      ) : (
        <div className="static flex">
            
        </div>
      )}
    </>
  );
};
