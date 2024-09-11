import { InfoLine } from "./card/InfoLine";
import { Name } from "./card/Name";
import { useState } from "react";

interface CardProps {
  backImg: string | undefined;
  frontImg: string | undefined;
  name: string | undefined;
  power: number | undefined;
  ultimate: string | undefined;
  primarySkill: string | undefined;
}

export const Card = ({
  backImg,
  frontImg,
  name,
  power,
  ultimate,
  primarySkill,
}: CardProps) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(true);

  return (
    <>
      <div
        className="font-details w-[340px] h-[460px] overflow-y-hidden"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {isFlipped ? (
          <div className="cursor-pointer transition-all hover:shadow-2xl hover:shadow-purple-500 w-[250px] h-[385px] rounded-[8px] outline outline-8 outline-back m-2 ml-10">
            <img src={backImg} className="w-full h-full" alt="" />
          </div>
        ) : (
          <>
            <div className="cursor-pointer transition-all hover:shadow-2xl hover:shadow-purple-500 flex z-20 items-end w-[250px] h-[385px] rounded-[8px] border-white outline outline-8 outline-purple-800 m-2 ml-10">
              <img
                src={frontImg}
                className="w-full h-full opacity-[90%] rounded-[8px]"
                alt=""
              />
              <div className="absolute bg-gradient-to-t from-black from-[20%] to-transparent w-[250px] rounded-[8px] px-4 py-5">
                <InfoLine title="Power" value={power} />
                <InfoLine title="Ultimate" value={ultimate} />
                <InfoLine title="Primary Skill" value={primarySkill} />
              </div>
            </div>
            <Name name={name} />
          </>
        )}
      </div>
    </>
  );
};
