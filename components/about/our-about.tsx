import React from "react";

type Props = {};

const abouts = [
  {
    id: 1,
    name: "CoinDCX App",
    img: "https://info.coindcx.com/wp-content/uploads/2021/09/CoinDCX-1.svg",
    about: "Simple crypto investing app for beginners",
  },
  {
    id: 2,
    name: "CoinDCX Pro",
    img: "https://info.coindcx.com/wp-content/uploads/2021/09/CoinDCX-Pro.svg",
    about: "Advanced Trading Product",
  },
  {
    id: 4,
    name: "DCX Learn",
    img: "https://info.coindcx.com/wp-content/uploads/2021/09/DCX-Learn.svg",
    about: "Crypto education initiative, in depth crypto courses for free",
  },
];

const OurAbout = (props: Props) => {
  return (
    <section className="mb-10">
      {/* container */}
      <div>
        {/* first Write Up */}
        <div className="flex flex-col items-center justify-center gap-3 text-center">
          <h4 className="font-bold font-body text-2xl md:text-3xl capitalize">
            CoinDCX is making crypto accessible
          </h4>
          <p className="w-[60%] mx-auto text-center text-sm text-neutral-700 leading-loose font-body">
            CoinDCX, India's most valuable crypto investment app, is dedicated
            to make crypto accessible in a simple way. Established in 2018,
            CoinDCX has solved numerous problems faced by the Indian crypto
            community with solutions around crypto investing, crypto trading &
            crypto literacy.
          </p>
        </div>
        {/* Image */}
        <div className="my-10">
          {/* flex container */}
          <div className="flex w-[90%] md:w-[40%] mx-auto p-4 justify-evenly items-center">
            <div className="flex flex-col items-center justify-center gap-2">
              <img
                src="https://info.coindcx.com/wp-content/uploads/2023/07/Web3-startups.svg"
                alt=""
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <img
                src="https://info.coindcx.com/wp-content/uploads/2023/07/AML.svg"
                alt=""
              />
            </div>
          </div>
          <p className="p-4 text-center font-body text-neutral-300">
            Simple, secure & compliant solutions
          </p>
        </div>
        {/* About Features */}
        <div className="bg-blue-950">
          {/* container */}
          <div className="w-[90%] mx-auto p-6 font-body flex items-center justify-evenly md:flex-row flex-col">
            {abouts.map((about) => (
              <div
                key={about.id}
                className="flex flex-col items-center justify-center gap-3"
              >
                {/* image */}
                <div>
                  <img src={about.img} alt={about.name} />
                </div>
                <div className="text-center space-y-3 w-[80%] mx-auto">
                  <h4 className="text-white">{about.name}</h4>
                  <h4 className="text-neutral-400 mx-auto text-sm">
                    {about.about}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurAbout;
