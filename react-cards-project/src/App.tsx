import { Card } from "./components/Card";
import QueenBandImg from "./images/queen-band.svg";
import FreddieMercuryImg from "./images/freddie-mercury.svg";

export default function App() {
  return (
    <>
      <Card
        backImg={QueenBandImg}
        frontImg={FreddieMercuryImg}
        name="Freddie Mercury"
        power={896}
        ultimate="Killer Queen"
        primarySkill="Vocal"
      />
    </>
  );
}
