import recommendation from "backend/recommendation";
import TrendingSection from "~/components/TrendingSection";


export default function HomePage() {
  recommendation();
  return (
    <><main className="">Reel Talk</main><TrendingSection /></>
  )
}
