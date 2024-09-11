import { Card } from "./components/Card";
import cards from "./data/cards.json";

export const GunsNRosesCards = () => {
  return (
    <>
      <Card
        shadowColor={cards.gnr[1].shadowColor}
        borderColor={cards.gnr[1].borderColor}
        nameColor={cards.gnr[1].nameColor}
        nameDarkColor={cards.gnr[1].nameDarkColor}
        fontTop={cards.gnr[1].fontTop}
        fontBottom={cards.gnr[1].fontBottom}
        backImg={cards.gnr[0].backCardImg}
        frontImg={cards.gnr[1].image}
        name={cards.gnr[1].name}
        power={parseInt(cards.gnr[1].power as string)}
        ultimate={cards.gnr[1].ultimate}
        primarySkill={cards.gnr[1].primarySkill}
      />
      <Card
        shadowColor={cards.gnr[1].shadowColor}
        borderColor={cards.gnr[1].borderColor}
        nameColor={cards.gnr[1].nameColor}
        nameDarkColor={cards.gnr[1].nameDarkColor}
        fontTop={cards.gnr[1].fontTop}
        fontBottom={cards.gnr[1].fontBottom}
        backImg={cards.gnr[0].backCardImg}
        frontImg={cards.gnr[2].image}
        name={cards.gnr[2].name}
        power={parseInt(cards.gnr[2].power as string)}
        ultimate={cards.gnr[2].ultimate}
        primarySkill={cards.gnr[2].primarySkill}
      />
      <Card
        shadowColor={cards.gnr[1].shadowColor}
        borderColor={cards.gnr[1].borderColor}
        nameColor={cards.gnr[1].nameColor}
        nameDarkColor={cards.gnr[1].nameDarkColor}
        fontTop={cards.gnr[1].fontTop}
        fontBottom={cards.gnr[1].fontBottom}
        backImg={cards.gnr[0].backCardImg}
        frontImg={cards.gnr[3].image}
        name={cards.gnr[3].name}
        power={parseInt(cards.gnr[3].power as string)}
        ultimate={cards.gnr[3].ultimate}
        primarySkill={cards.gnr[3].primarySkill}
      />
      <Card
        shadowColor={cards.gnr[1].shadowColor}
        borderColor={cards.gnr[1].borderColor}
        nameColor={cards.gnr[1].nameColor}
        nameDarkColor={cards.gnr[1].nameDarkColor}
        fontTop={cards.gnr[1].fontTop}
        fontBottom={cards.gnr[1].fontBottom}
        backImg={cards.gnr[0].backCardImg}
        frontImg={cards.gnr[4].image}
        name={cards.gnr[4].name}
        power={parseInt(cards.gnr[4].power as string)}
        ultimate={cards.gnr[4].ultimate}
        primarySkill={cards.gnr[4].primarySkill}
      />
    </>
  );
};
