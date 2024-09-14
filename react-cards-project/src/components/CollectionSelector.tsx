import { useState } from "react";
import data from "../data/cards.json";
import { CardsList } from "./CollectionCardsList";
import { CollectionCard } from "./CollectionCard";

export const CollectionSelector = () => {
  const [selectedCollectionId, setSelectedCollectionId] = useState<number>(-1);
  const collectionsArr = Object.values(data);

  return (
    <>
      <div className="flex flex-wrap justify-center mt-[280px]">
        {Object.values(data).map((collection) => {
          const { backCardImg, mainShadowColor, collectionId } = collection[0];

          return (
            <CollectionCard
              key={collectionId}
              backCardImg={backCardImg}
              shadowColor={mainShadowColor}
              collectionId={collectionId ?? -1}
              setSelectedCollection={setSelectedCollectionId}
              floatOnHover={selectedCollectionId !== collectionId}
            />
          );
        })}
      </div>

      <CardsList
        isOpen={selectedCollectionId > -1}
        collectionBackImg={
          collectionsArr[selectedCollectionId]?.[0].backCardImg
        }
        collectionData={collectionsArr[selectedCollectionId]}
        selectedCollectionId={selectedCollectionId}
        setSelectedCollectionId={setSelectedCollectionId}
      />
    </>
  );
};
