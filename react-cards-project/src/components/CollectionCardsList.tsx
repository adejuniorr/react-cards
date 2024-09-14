import { Dispatch, SetStateAction } from "react";
import { Card } from "./Card";

interface CardsListProps {
  isOpen: boolean;
  collectionBackImg: string | undefined;
  collectionData: Array<object>;
  setSelectedCollectionId: Dispatch<SetStateAction<number>>;
}

type CardType = {
  name: string;
  power: number;
  ultimate: string;
  primarySkill: string;
  image: string;
  shadowColor: string;
  borderColor: string;
  nameColor: string;
  nameDarkColor: string;
  fontTop: string;
  fontBottom: string;
};

export const CardsList = ({
  isOpen,
  collectionBackImg,
  collectionData,
  setSelectedCollectionId,
}: CardsListProps) => {
  return (
    <>
      {isOpen ? (
        <div className="absolute top-0 left-0 w-[100%] py-[150px] flex flex-col justify-center items-center bg-black/[.85]">
          <h1 className="font-details text-center text-6xl text-white">
            Clique na carta para revelar
          </h1>

          <div className="flex flex-wrap justify-center items-center">
            {collectionData.slice(1).map((card, index) => {
              const {
                name,
                power,
                ultimate,
                primarySkill,
                image,
                shadowColor,
                borderColor,
                nameColor,
                nameDarkColor,
                fontTop,
                fontBottom,
              } = card as CardType;

              return (
                <Card
                  key={index}
                  backImg={collectionBackImg}
                  name={name}
                  power={power}
                  ultimate={ultimate}
                  primarySkill={primarySkill}
                  frontImg={image}
                  shadowColor={shadowColor}
                  borderColor={borderColor}
                  nameColor={nameColor}
                  nameDarkColor={nameDarkColor}
                  fontTop={fontTop}
                  fontBottom={fontBottom}
                />
              );
            })}
          </div>

          <button
            onClick={() => setSelectedCollectionId(-1)}
            className="  bg-black border-white border-2 text-white text-3xl font-detailsSolid mx-auto px-4 py-2 rounded hover:shadow-white hover:shadow-md hover:translate-y-[-2px] active:translate-y-0 transition-all"
          >
            Fechar
          </button>
        </div>
      ) : (
        <div className="static"></div>
      )}
    </>
  );
};
