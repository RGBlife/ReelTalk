import recommendation from "backend/recommendation";
import TrendingSection from "~/components/TrendingSection";
import PopularReview from "~/components/PopularReview";
import SideNav from "~/components/SideNav";

export default function HomePage() {
  recommendation();
  return (
    <>
      <main className="">Reel Talk</main>
      <div className="container flex items-start">
        <SideNav />
        <div className="min-h-screen flex-grow border-x">
          <TrendingSection />
          <PopularReview />
        </div>
      </div>
    </>
  );
}
