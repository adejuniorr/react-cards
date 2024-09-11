import { Card } from "./components/Card";
import cards from "./data/cards.json";

export const MichaelJacksonCards = () => {
  return (
    <>
      <Card
        backImg={cards.mj[0].backCardImg}
        frontImg={cards.mj[1].image}
        name={cards.mj[1].name}
        power={parseInt(cards.mj[1].power as string)}
        ultimate={cards.mj[1].ultimate}
        primarySkill={cards.mj[1].primarySkill}
      />
      <Card
        backImg={cards.mj[0].backCardImg}
        frontImg={cards.mj[2].image}
        name={cards.mj[2].name}
        power={parseInt(cards.mj[2].power as string)}
        ultimate={cards.mj[2].ultimate}
        primarySkill={cards.mj[2].primarySkill}
      />
    </>
  );
};
