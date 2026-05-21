import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { ScrollReveal } from "@/components/scroll-reveal";
import { FoundersStory } from "@/components/founders-story";
import { Manifesto } from "@/components/manifesto";
import { RealProblems } from "@/components/real-problems";
import { BookletGallery } from "@/components/booklet-gallery";
import { Confrontation } from "@/components/confrontation";
import { Symbolism } from "@/components/symbolism";
import { TransparencyDashboard } from "@/components/transparency-dashboard";
import { VoiceForm } from "@/components/voice-form";
import { NewsFeed } from "@/components/news-feed";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <ScrollReveal />
      <Header />
      <Hero />
      <FoundersStory />
      <RealProblems />
      <BookletGallery />
      <Manifesto />
      <Confrontation />
      <Symbolism />
      <TransparencyDashboard />
      <VoiceForm />
      <NewsFeed />
      <Footer />
    </main>
  );
}
