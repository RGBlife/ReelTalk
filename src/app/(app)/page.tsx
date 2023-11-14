import TrendingSection from "~/components/TrendingSection";
import PopularReview from "~/components/PopularReview";

export default function HomePage() {
  return (
    <main>
      <h1>Reel Talk</h1>
      <div className="min-h-screen flex-grow border-x">
        <TrendingSection />
        <PopularReview />
      </div>
    </main>
  );
}
