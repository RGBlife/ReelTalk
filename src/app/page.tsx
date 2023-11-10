import recommendation from "backend/recommendation";
import { LoginLink, LogoutButton } from "~/components/AuthButtons";
import TrendingSection from "~/components/TrendingSection";

export default function HomePage() {
  // recommendation();
  return (
    <>
      <main className="">Reel Talk</main>
      <TrendingSection />
      <LoginLink />
      <LogoutButton />
    </>
  );
}
