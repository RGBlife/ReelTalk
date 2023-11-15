import TrendingSection from "~/components/TrendingSection";
import PopularReview from "~/components/PopularReview";

export default function HomePage() {
  return (
    <div className="min-h-screen flex-grow">
      <TrendingSection />
      <PopularReview />
    </div>
  );
}
