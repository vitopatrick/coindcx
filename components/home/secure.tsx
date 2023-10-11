import React from "react";

type Props = {};

const SecurityFeatures = [
  {
    id: 1,
    icon: "/Bitgo-updated.svg",
    heading: "Multilayer Security",
    body: "Enhanced yet simple user authentication for complete account safety.",
  },
  {
    id: 2,
    icon: "/Transactions.svg",
    heading: "Deep Encryption",
    body: "All data is encrypted to secure your passwords & personal data.",
  },
  {
    id: 3,
    icon: "/Secure_Safe.svg",
    heading: "Safe & Secure",
    body: "~95% of all funds on CoinDCX are stored in multi-sig cold wallets.",
  },
];

const Secure = (props: Props) => {
  return (
    <section>
      {/* container */}
      <div className="w-[80%] p-4 mx-auto">
        {/* header */}
        <h4 className="text-center font-bold text-3xl capitalize text-slate-800 font-body">
          Security above everything
        </h4>
        {/* flex container */}
        <div className="flex justify-between flex-col md:flex-row my-[5rem] gap-4">
          {SecurityFeatures.map((features) => (
            <div className="flex flex-col items-center justify-between gap-4">
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

export default Secure;
