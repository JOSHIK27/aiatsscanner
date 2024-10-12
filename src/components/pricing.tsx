import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Pricing() {
  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
        Simple, Transparent Pricing
      </h2>
      <div className="grid gap-6 lg:grid-cols-2 px-4 md:px-6">
        <Card>
          <CardHeader>
            <CardTitle>Free</CardTitle>
            <CardDescription>For individuals</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">$0/mo</p>
            <ul className="mt-4 space-y-2">
              <li>Up to 10 resumes/month</li>
              <li>Basic AI matching</li>
              <li>Email support</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Get Started</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Pro</CardTitle>
            <CardDescription>Coming Soon</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">TBA</p>
            <ul className="mt-4 space-y-2">
              <li>Unlimited resumes</li>
              <li>Advanced AI matching</li>
              <li>Priority support</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full" disabled>
              Coming Soon
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
