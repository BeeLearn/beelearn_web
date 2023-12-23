import Image from "next/image";

import { join } from "@/scripts";
import { learnerChoiceReasons } from "@/data";

export default function HomeLearnerChoiceReason() {
  return (
    <div className="flex flex-col space-y-16 p-8 md:px-32 md:py-16">
      {learnerChoiceReasons.map((reason, index) => (
        <div
          key={index}
          className="flex flex-col items-center space-y-16 text-center md:flex-row  md:space-y-0  md:items-start md:text-start"
        >
          <div className="flex-1">
            <h1 className="text-4xl text-violet-700 uppercase font-extrabold">
              {reason.title}
            </h1>
            <p className="text-stone-700">{reason.content}</p>
          </div>
          <div
            className={join(
              "flex-1 flex flex-col items-end",
              index % 2 === 1 ? "md:order-first md:items-start" : undefined
            )}
          >
            <Image
              src={reason.illustration}
              alt={reason.title}
              className="object-cover"  />
          </div>
        </div>
      ))}
    </div>
  );
}
