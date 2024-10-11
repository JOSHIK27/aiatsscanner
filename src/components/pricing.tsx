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
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
          Simple, Transparent Pricing
        </h2>
        <div className="grid gap-6 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Starter</CardTitle>
              <CardDescription>For small businesses</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">$49/mo</p>
              <ul className="mt-4 space-y-2">
                <li>Up to 100 resumes/month</li>
                <li>Basic AI matching</li>
                <li>Email support</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Choose Plan</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Pro</CardTitle>
              <CardDescription>For growing teams</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">$99/mo</p>
              <ul className="mt-4 space-y-2">
                <li>Up to 500 resumes/month</li>
                <li>Advanced AI matching</li>
                <li>Priority support</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Choose Plan</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Enterprise</CardTitle>
              <CardDescription>For large organizations</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">Custom</p>
              <ul className="mt-4 space-y-2">
                <li>Unlimited resumes</li>
                <li>Custom AI models</li>
                <li>24/7 dedicated support</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Contact Sales</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
