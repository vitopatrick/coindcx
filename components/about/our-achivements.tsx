import Link from "next/link";
import React from "react";

type Props = {};

const achievements = [
  {
    id: 1,
    image:
      "https://info.coindcx.com/wp-content/uploads/2021/09/Awards-great-place-to-work.png",
    title: "Great Place to work 2021 & 2022",
  },
  {
    id: 2,
    image:
      "https://info.coindcx.com/wp-content/uploads/2021/09/Awards-Entrepreneur-awards.png",
    title: "Tech Start-up of the year - Entrepreneur Awards",
  },
  {
    id: 3,
    image:
      "https://info.coindcx.com/wp-content/uploads/2021/09/Awards-Tracxn.png",
    title: "Elite list of Unicorns in India 2021 by Tracxn",
  },
  {
    id: 4,
    image:
      "https://info.coindcx.com/wp-content/uploads/2021/09/Awards-Amplitude.png",
    title: "Next Hottest Product by Amplitude",
  },
];

const OurAchievements = (props: Props) => {
  return (
    <section>
      <div className="flex items-center justify-center flex-col">
        <h4 className="font-body font-bold text-2xl md:text-4xl capitalize text-center">
          Join us to build the Crypto Ecosystem together
        </h4>
        <Link
          href="/get-started"
          className="block my-3 rounded-md px-6 py-3 hover:bg-orange-400 transition-all ease-in font-body text-white bg-orange-600"
        >
          Join Now
        </Link>
      </div>
      {/* Achievements */}
      <div className="my-5">
        <h4 className="text-center my-4 font-body text-3xl font-bold">
          Our Achievements
        </h4>
        {/* flex */}
        <div className="flex items-center justify-center flex-col md:flex-row gap-4">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className="flex flex-col items-center justify-around"
            >
              <div className="w-[150px]">
                <img src={achievement.image} alt={achievement.title} />
              </div>
              <h4 className="font-body font-bold my-2 w-[80%] mx-auto text-center">
                {achievement.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurAchievements;
