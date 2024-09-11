import { InfoLine } from "./card/InfoLine";
import { Name } from "./card/Name";
import { useState } from "react";
import clsx from "clsx";

interface CardProps {
  shadowColor: string | undefined;
  borderColor: string | undefined;
  nameColor: string | undefined;
  nameDarkColor: string | undefined;
  fontTop: string | undefined;
  fontBottom: string | undefined;
  backImg: string | undefined;
  frontImg: string | undefined;
  name: string | undefined;
  power: number | undefined;
  ultimate: string | undefined;
  primarySkill: string | undefined;
}

export const Card = ({
  shadowColor,
  borderColor,
  nameColor,
  nameDarkColor,
  fontTop,
  fontBottom,
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
          <div
            className={clsx(
              "cursor-pointer transition-all hover:shadow-2xl",
              {
                "hover:shadow-purple-500": shadowColor === "purple-500",
                "hover:shadow-yellow-500": shadowColor === "yellow-500",
                "hover:shadow-red-500": shadowColor === "red-500",
                "hover:shadow-marine-blue-500": shadowColor === "marine-blue-500",
              },
              "w-[250px] h-[385px] rounded-[8px] outline outline-8 m-2 ml-10"
            )}
          >
            <img src={backImg} className="w-full h-full" alt="" />
          </div>
        ) : (
          <>
            <div
              className={clsx(
                "cursor-pointer transition-all hover:shadow-2xl",
                {
                  "hover:shadow-purple-500": shadowColor === "purple-500",
                  "hover:shadow-yellow-500": shadowColor === "yellow-500",
                  "hover:shadow-red-500": shadowColor === "red-500",
                  "hover:shadow-marine-blue-500": shadowColor === "marine-blue-500",
                },
                "flex z-20 items-end w-[250px] h-[385px] rounded-[8px] border-white outline outline-8",
                {
                  "outline-purple-800": borderColor === "purple-800",
                  "outline-red-800": borderColor === "red-800",
                  "outline-gray-100": borderColor === "gray-100",
                },
                "m-2 ml-10"
              )}
            >
              <img /* LEMBRETE: Reimportar as imagens com opacidade 100% */
                src={frontImg}
                className="w-full h-full rounded-[8px]"
                alt=""
              />
              <div className="absolute bg-gradient-to-t from-black from-[20%] to-transparent w-[250px] rounded-[8px] px-4 py-5">
                <InfoLine
                  title="Power"
                  value={power}
                  fontTop={fontTop}
                  fontBottom={fontBottom}
                />
                <InfoLine
                  title="Ultimate"
                  value={ultimate}
                  fontTop={fontTop}
                  fontBottom={fontBottom}
                />
                <InfoLine
                  title="Primary Skill"
                  value={primarySkill}
                  fontTop={fontTop}
                  fontBottom={fontBottom}
                />
              </div>
            </div>
            <Name
              name={name}
              nameColor={nameColor}
              nameDarkColor={nameDarkColor}
            />
          </>
        )}
      </div>
    </>
  );
};
