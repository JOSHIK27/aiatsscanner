import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="flex flex-col items-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            Find the Perfect Candidate, Faster
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Our AI-powered resume filtering system matches the best candidates
            to your job descriptions, saving you time and ensuring quality
            hires.
          </p>
        </div>
        <div className="space-x-4">
          <Link href="/submit">
            <Button size="lg">Start for Free</Button>
          </Link>
          <Link href="/pricing">
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
