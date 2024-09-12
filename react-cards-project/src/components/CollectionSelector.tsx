import data from "../data/cards.json";
import { CollectionCard } from "./CollectionCard";

export const CollectionSelector = () => {
  return (
    <div className="flex flex-wrap justify-center mt-[150px]">
      {Object.values(data).map((collection, index) => {
        const { backCardImg, mainShadowColor } = collection[0];

        return (
          <CollectionCard
            key={index}
            backCardImg={backCardImg}
            shadowColor={mainShadowColor}
            handleOnClick={undefined}
            floatOnHover
          />
        );
      })}
    </div>
  );
};
