import TrendingSection from "~/components/TrendingSection";
import PopularReview from "~/components/PopularReview";

export default function HomePage() {
  return (
    <main className="flex">
      <div className="min-h-screen flex-grow border-x">
        <h1>Reel Talk</h1>
        <TrendingSection />
        <PopularReview />
      </div>
    </main>
  );
}
