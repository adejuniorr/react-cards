import { QueenCards } from "./QueenCards";
import { GunsNRosesCards } from "./GunsNRosesCards";
import { MichaelJacksonCards } from "./MichaelJacksonCards";

export default function App() {
  return (
    <div>
      <div className="flex gap-[20px] flex-wrap">
        <QueenCards />
      </div>
      <div className="flex gap-[20px] flex-wrap">
        <GunsNRosesCards />
      </div>
      <div className="flex gap-[20px] flex-wrap">
        <MichaelJacksonCards />
      </div>
    </div>
  );
}
