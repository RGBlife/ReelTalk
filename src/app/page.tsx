import TrendingSection from "~/components/TrendingSection";
import PopularReview from "~/components/PopularReview";
import SideNav from "~/components/SideNav";

export default function HomePage() {
  return (
    <main>
      <h1>Reel Talk</h1>
      <div className="container flex items-start">
        <SideNav />
        <div className="min-h-screen flex-grow border-x">
          <TrendingSection />
          <PopularReview />
        </div>
      </div>
    </main>
  );
}
