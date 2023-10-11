import Link from "next/link";
import React from "react";

type Props = {};

const usersFeatures = [
  {
    id: 1,
    icon: "/Add_Account.svg",
    heading: "1. Create your CoinDCX account",
    body: "Download the app, keep your documents handy & complete the KYC",
  },
  {
    id: 2,
    icon: "/Bank_Account.svg",
    heading: "2. Add funds",
    body: "Deposit Coin by choosing from one of our many payment methods.",
  },
  {
    id: 3,
    icon: "/Deposit.svg",
    heading: "3. Start investing",
    body: "Choose from Buy, Sell, CIP, Earn, Futures, Margin products to start investing.",
  },
];

const RegisteredUsers = (props: Props) => {
  return (
    <section className="my-[4rem] bg-neutral-100 p-3">
      {/* Container */}
      <div className="w-[80%] mx-auto">
        {/* Heading */}
        <h4 className="text-center text-slate-700 font-body capitalize text-3xl font-bold">
          Investing in crypto will be easier than ever.
        </h4>
        {/* Flex container */}
        <div className="flex justify-between flex-col md:flex-row my-[5rem]">
          {usersFeatures.map((features) => (
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

export default RegisteredUsers;
