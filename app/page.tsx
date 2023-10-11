import BackedByInvestors from "@/components/home/back-investors";
import Features from "@/components/home/features";
import FirstStep from "@/components/home/first-step";
import HomeHero from "@/components/home/hero";
import RegisteredUsers from "@/components/home/registered-user";
import Secure from "@/components/home/secure";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <FirstStep />
      <Features />
      <RegisteredUsers />
      <Secure />
      <BackedByInvestors />
    </main>
  );
}
