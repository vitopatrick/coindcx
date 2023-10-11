import React from "react";

type Props = {};

const credits = [
  {
    id: 1,
    title: "Trust of",
    subTitle: "REGISTERED USERS",
    ans: "1.4Cr+",
  },
  {
    id: 2,
    title: "HOME TO",
    subTitle: "CRYPTO ASSETS",
    ans: "500+",
  },
  {
    id: 3,
    title: "QUARTERLY",
    subTitle: "TRADING VOLUME",
    ans: "16.5K Cr+",
  },
];

const Credits = (props: Props) => {
  return (
    <section className="my-10">
      <div className="md:w-[70%] w-[90%] p-5 mx-auto shadow-md rounded-lg flex flex-col md:flex-row gap-8  md:gap-0  justify-between">
        {credits.map((credit) => (
          <div
            key={credit.id}
            className="flex font-body flex-col gap-2 items-center"
          >
            <h5 className="uppercase text-xs">{credit.title}</h5>
            <h1 className="md:text-4xl text-3xl text-slate-900 font-semibold">
              {credit.ans}
            </h1>
            <h5 className="font-bold text-xs">{credit.subTitle}</h5>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Credits;
