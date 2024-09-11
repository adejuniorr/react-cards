import { Card } from "./components/Card";
import cards from "./data/cards.json";

export const QueenCards = () => {
  return (
    <>
      <Card
        shadowColor={cards.queen[1].shadowColor}
        borderColor={cards.queen[1].borderColor}
        nameColor={cards.queen[1].nameColor}
        nameDarkColor={cards.queen[1].nameDarkColor}
        fontTop={cards.queen[1].fontTop}
        fontBottom={cards.queen[1].fontBottom}
        backImg={cards.queen[0].backCardImg}
        frontImg={cards.queen[1].image}
        name={cards.queen[1].name}
        power={parseInt(cards.queen[1].power as string)}
        ultimate={cards.queen[1].ultimate}
        primarySkill={cards.queen[1].primarySkill}
      />
      <Card
        shadowColor={cards.queen[1].shadowColor}
        borderColor={cards.queen[1].borderColor}
        nameColor={cards.queen[1].nameColor}
        nameDarkColor={cards.queen[1].nameDarkColor}
        fontTop={cards.queen[1].fontTop}
        fontBottom={cards.queen[1].fontBottom}
        backImg={cards.queen[0].backCardImg}
        frontImg={cards.queen[2].image}
        name={cards.queen[2].name}
        power={parseInt(cards.queen[2].power as string)}
        ultimate={cards.queen[2].ultimate}
        primarySkill={cards.queen[2].primarySkill}
      />
      <Card
        shadowColor={cards.queen[1].shadowColor}
        borderColor={cards.queen[1].borderColor}
        nameColor={cards.queen[1].nameColor}
        nameDarkColor={cards.queen[1].nameDarkColor}
        fontTop={cards.queen[1].fontTop}
        fontBottom={cards.queen[1].fontBottom}
        backImg={cards.queen[0].backCardImg}
        frontImg={cards.queen[3].image}
        name={cards.queen[3].name}
        power={parseInt(cards.queen[3].power as string)}
        ultimate={cards.queen[3].ultimate}
        primarySkill={cards.queen[3].primarySkill}
      />
      <Card
        shadowColor={cards.queen[1].shadowColor}
        borderColor={cards.queen[1].borderColor}
        nameColor={cards.queen[1].nameColor}
        nameDarkColor={cards.queen[1].nameDarkColor}
        fontTop={cards.queen[1].fontTop}
        fontBottom={cards.queen[1].fontBottom}
        backImg={cards.queen[0].backCardImg}
        frontImg={cards.queen[4].image}
        name={cards.queen[4].name}
        power={parseInt(cards.queen[4].power as string)}
        ultimate={cards.queen[4].ultimate}
        primarySkill={cards.queen[4].primarySkill}
      />
    </>
  );
};
