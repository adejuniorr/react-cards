import { QueenCards } from "./QueenCards";
import { GunsNRosesCards } from "./GunsNRosesCards";
import { MichaelJacksonCards } from "./MichaelJacksonCards";

export default function App() {
  return (
    <div>
      <div className="flex gap-[20px]">
        <QueenCards />
      </div>
      <div className="flex gap-[20px]">
        <GunsNRosesCards />
      </div>
      <div className="flex gap-[20px]">
        <MichaelJacksonCards />
      </div>
    </div>
  );
}
