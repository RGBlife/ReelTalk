import TrendingSection from "~/components/TrendingSection";
import PopularReview from "~/components/PopularReview";
import { ReviewPreviewSection } from "~/components/ReviewPreviewSection";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-7xl flex-grow p-10">
      <TrendingSection />
      {/* <PopularReview /> */}
      <ReviewPreviewSection />
    </div>
  );
}
