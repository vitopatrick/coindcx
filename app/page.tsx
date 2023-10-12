import Footer from "@/components/footer/Footer";
import BackedByInvestors from "@/components/home/back-investors";
import Features from "@/components/home/features";
import FirstStep from "@/components/home/first-step";
import HomeHero from "@/components/home/HeroHome";
import RegisteredUsers from "@/components/home/registered-user";
import Secure from "@/components/home/secure";
import Nav from "@/components/nav/Nav";

export default function Home() {
  return (
    <>
      <Nav />
      <HomeHero />
      <FirstStep />
      <Features />
      <RegisteredUsers />
      <Secure />
      <BackedByInvestors />
      <Footer />
    </>
  );
}
