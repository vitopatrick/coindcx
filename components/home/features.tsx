import React from "react";

type Props = {};

const SecurityFeatures = [
  {
    id: 1,
    icon: "/Fast_Simple.svg",
    heading: "Simple & Quick",
    body: "Download the CoinDCX app, complete KYC and deposit Coin to start investing",
  },
  {
    id: 2,
    icon: "/Transactions_card.svg",
    heading: "Valuing Risk Appetite",
    body: "We value your risk appetite and enable you to invest with amount as low as $100",
  },
  {
    id: 3,
    icon: "/Security.svg",
    heading: "Safe & secure",
    body: "Covered by leading risk monitoring & asset insurance providers",
  },
];

const Features = (props: Props) => {
  return (
    <section className="mt-6">
      {/* container */}
      <div className="w-[80%] p-4 mx-auto">
        {/* flex container */}
        <div className="flex justify-between flex-col md:flex-row my-[5rem] gap-4">
          {SecurityFeatures.map((features) => (
            <div
              key={features.id}
              className="flex flex-col items-center justify-between gap-4"
            >
              <img src={features.icon} alt="s" className="w-[80px]" />

              <div className="text-center font-body">
                <h4 className="font-bold text-slate-800 text-lg">
                  {features.heading}
                </h4>
                <p className="text-neutral-500 font-light">{features.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
