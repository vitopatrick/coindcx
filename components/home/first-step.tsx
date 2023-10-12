import React from "react";

type Props = {};

const steps = [
  {
    id: 1,
    stepHeader: "Quality crypto assets listed",
    stepBody:
      "With investor protection always at the forefront, we use a 7m framework to select crypto tokens before listing them.",
  },
  {
    id: 3,
    stepHeader: "Array of investment products",
    stepBody:
      "CoinDCX has products for every investor type - Explore products like Buy/Sell, Learn, CIP, Earn, Futures, Margin and more.",
  },
  {
    id: 5,
    stepHeader: "A Larger Vision",
    stepBody:
      "As one of the most valued crypto company, we are building the Indian Crypto Ecosystem with Ventures, Learn, etc.",
  },
];

const FirstStep = (props: Props) => {
  return (
    <section className="mt-10">
      {/* container & Also flex container*/}
      <div className="w-[90%] md:w-[70%] flex mx-auto p-4 flex-col md:flex-row items-center gap-5">
        <div className="flex-1 space-y-4">
          {/* Header container */}
          <div className="space-y-5">
            <h2 className="font-body text-3xl font-bold text-slate-800 text-center md:text-left">
              Take the first step towards building your crypto portfolio
            </h2>
            <h4 className="font-bold text-slate-800 font-body text-sm text-center md:text-left">
              Here's why you should choose CoinDCX
            </h4>
          </div>
          {/* Steps container */}
          <div className="space-y-3 hidden md:block">
            {steps.map((step) => (
              <div key={step.id}>
                <div className="font-body space-y-4">
                  <h4 className="font-bold text-slate-800 font-bold">
                    {step.stepHeader}
                  </h4>
                  <h4 className="font-light">{step.stepBody}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
        <img
          className="md:w-[700px] w-full"
          src="/portfolio-display.svg"
          alt=""
        />
      </div>
    </section>
  );
};

export default FirstStep;
