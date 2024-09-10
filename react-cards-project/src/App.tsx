import { Card } from "./components/Card";
//import QueenBandLogo from "./images/queen-logo-small.svg";
import QueenBandImg from "./images/queen-band.svg";
import FreddieMercuryImg from "./images/freddie-mercury.svg";

export default function App() {
  return (
    <>
      <Card
        backImg={QueenBandImg}
        frontImg={FreddieMercuryImg}
        /* bandLogoImg={QueenBandLogo} */
        name="Freddie Mercury"
        power={896}
        ultimate="Killer Queen"
        primarySkill="Vocal"
      />
      <Card
        backImg={QueenBandImg}
        frontImg={FreddieMercuryImg}
        /* bandLogoImg={QueenBandLogo} */
        name="Freddie Mercury"
        power={896}
        ultimate="Killer Queen"
        primarySkill="Vocal"
      />
    </>
  );
}
