import React from "react";

type Props = {};

const HomeHero = (props: Props) => {
  return (
    <section className="bg-neutral-100 relative">
      {/* container */}
      <div className="w-full md:w-[80%] md:p-3 mx-auto">
        {/* header container */}
        <div className="text-center p-4 space-y-5">
          <h2 className="font-bold text-3xl font-body">
            Trust of 1.4Cr+ registered users
          </h2>
          <p className="font-body text-sm font-light w-full md:w-[30%] mx-auto">
            Invest in Bitcoin, Ethereum, & other 500+ crypto assets. Download
            the app now, register & start with as low as $100.
          </p>
        </div>
        {/* Phone Image */}
        <div className="flex relative py-10">
          <div className="z-50">
            <img src="/mobile_bg.png" alt="" />
          </div>
          {/* Color */}
          <div className="absolute top-[5%] bottom-[5%]">
            <img src="/colors_bg.png" alt="" />
          </div>
          <div className="absolute top-[5%] bottom-[5%]">
            <img src="/axis_bg.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
