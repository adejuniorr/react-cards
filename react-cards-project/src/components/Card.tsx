import { InfoLine } from "./card/InfoLine";
import { Name } from "./card/Name";
import { memo, useState } from "react";
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

export const Card = memo(function Card({
  backImg,
  name,
  power,
  ultimate,
  primarySkill,
  frontImg,
  shadowColor,
  borderColor,
  nameColor,
  nameDarkColor,
  fontTop,
  fontBottom,
}: CardProps) {
  const [isFlipped, setIsFlipped] = useState<boolean>(true);

  return (
    <>
      <div className="font-detailsSolid h-[340px] overflow-y-hidden border-solid">
        {isFlipped ? (
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className={clsx(
              "cursor-pointer transition-all hover:shadow-xl",
              {
                "hover:shadow-purple-500": shadowColor === "purple-500",
                "hover:shadow-yellow-500": shadowColor === "yellow-500",
                "hover:shadow-red-500": shadowColor === "red-500",
                "hover:shadow-marine-blue-500":
                  shadowColor === "marine-blue-500",
              },
              "w-[160px] h-[246px] rounded-[8px] outline outline-8 m-10"
            )}
          >
            <img src={backImg} className="w-[100%]" alt="" />
          </div>
        ) : (
          <>
            <div
              onClick={() => setIsFlipped(!isFlipped)}
              className={clsx(
                "relative z-20 cursor-pointer transition-all hover:shadow-xl",
                {
                  "hover:shadow-purple-500": shadowColor === "purple-500",
                  "hover:shadow-yellow-500": shadowColor === "yellow-500",
                  "hover:shadow-red-500": shadowColor === "red-500",
                  "hover:shadow-marine-blue-500":
                    shadowColor === "marine-blue-500",
                },
                "flex items-end w-[160px] h-[246px] rounded-[8px] border-white outline outline-8",
                {
                  "outline-purple-800": borderColor === "purple-800",
                  "outline-red-800": borderColor === "red-800",
                  "outline-gray-200": borderColor === "gray-200",
                },
                "m-10"
              )}
            >
              <img
                src={frontImg}
                className="w-[100%] rounded-[8px]"
                alt={name}
              />
              <div className="absolute bg-gradient-to-t from-black from-[20%] to-transparent w-[160px] rounded-[8px] p-3">
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
});
