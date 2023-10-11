import React from "react";

type Props = {};

const AboutHero = (props: Props) => {
  return (
    <section className="mb-10 bg-blue-950 md:h-[300px] h-[400px]">
      <div className="w-[90%] md:w-[50%] mx-auto p-3 md:p-6 translate-y-1/2">
        <h1 className="text-white text-center font-body text-3xl p-5">
          CoinDCX:Most Valued Crypto Company
        </h1>
        <p className="text-white text-center font-body">
          Enjoy the ride to pioneering the Crypto and Web3 Industry with CoinDCX
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
