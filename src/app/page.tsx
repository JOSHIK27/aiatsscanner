import Hero from "@/components/hero";
import Features from "@/components/features";
import Pricing from "@/components/pricing";
import Faqs from "@/components/faqs";
import Footer from "@/components/footer";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <CheckCircle className="h-6 w-6" />
            <span className="font-bold">ResumeFilter</span>
          </Link>
          <nav className="ml-auto flex items-center space-x-4 sm:space-x-6">
            <Link
              href="#features"
              className="text-sm font-medium hover:underline"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium hover:underline"
            >
              Pricing
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:underline">
              FAQ
            </Link>
            <Button>Get Started</Button>
          </nav>
        </div>
      </header>
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
