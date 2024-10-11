import Hero from "@/components/hero";
import Features from "@/components/features";
import Pricing from "@/components/pricing";
import Faqs from "@/components/faqs";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Faqs />
        <Footer />
      </main>
    </div>
  );
}
