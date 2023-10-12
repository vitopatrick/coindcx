import React from "react";

type Props = {};

const images = [
  "/coinbase.svg",
  "/braincapital.svg",
  "/polychain.svg",
  "/bitmex.svg",
];

const BackedByInvestors = (props: Props) => {
  return (
    <section>
      {/* container */}
      <div className="w-[70%] mx-auto p-4">
        {/* Header */}
        <h4 className="text-center text-slate-700 font-body capitalize text-3xl font-bold">
          Backed by Top Investors
        </h4>
        {/* flex container */}
        <div className="flex justify-between flex-col items-center  md:flex-row my-5">
          {images.map((image) => (
            <div key={image}>
              <img src={image} alt="logos" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BackedByInvestors;
