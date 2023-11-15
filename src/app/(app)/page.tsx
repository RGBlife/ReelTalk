import TrendingSection from "~/components/TrendingSection";
import PopularReview from "~/components/PopularReview";

export default function HomePage() {
  return (
    <main>
      <div className="min-h-screen flex-grow border-x">
        <TrendingSection />
        <PopularReview />
      </div>
    </main>
  );
}
