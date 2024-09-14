import { Card } from "../Card";
import cards from "../../data/cards.json";

export const MichaelJacksonCards = () => {
  return (
    <>
      <Card
        shadowColor={cards.mj[1].shadowColor}
        borderColor={cards.mj[1].borderColor}
        nameColor={cards.mj[1].nameColor}
        nameDarkColor={cards.mj[1].nameDarkColor}
        fontTop={cards.mj[1].fontTop}
        fontBottom={cards.mj[1].fontBottom}
        backImg={cards.mj[0].backCardImg}
        frontImg={cards.mj[1].image}
        name={cards.mj[1].name}
        power={cards.mj[1].power}
        ultimate={cards.mj[1].ultimate}
        primarySkill={cards.mj[1].primarySkill}
      />
      <Card
        shadowColor={cards.mj[2].shadowColor}
        borderColor={cards.mj[2].borderColor}
        nameColor={cards.mj[2].nameColor}
        nameDarkColor={cards.mj[2].nameDarkColor}
        fontTop={cards.mj[2].fontTop}
        fontBottom={cards.mj[2].fontBottom}
        backImg={cards.mj[0].backCardImg}
        frontImg={cards.mj[2].image}
        name={cards.mj[2].name}
        power={cards.mj[2].power}
        ultimate={cards.mj[2].ultimate}
        primarySkill={cards.mj[2].primarySkill}
      />
    </>
  );
};
