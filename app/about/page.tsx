import AboutHero from "@/components/about/about-hero";
import Credits from "@/components/about/credits";
import OurAbout from "@/components/about/our-about";
import OurAchievements from "@/components/about/our-achivements";

export default function AboutPage() {
  return (
    <section>
      {/* container for the about page */}
      <AboutHero />
      <Credits />
      <OurAbout />
      <main className="w-4/5 mx-auto py-8">
        <OurAchievements />
      </main>
      {/* end of container for the about page */}
    </section>
  );
}
