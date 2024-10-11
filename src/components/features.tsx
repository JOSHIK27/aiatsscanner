import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Features() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
        Powerful Features
      </h2>
      <div className="grid gap-6 lg:grid-cols-3 px-4 md:px-6">
        <Card>
          <CardHeader>
            <CardTitle>Bulk Resume Processing</CardTitle>
          </CardHeader>
          <CardContent>
            Upload and analyze hundreds of resumes simultaneously, saving you
            countless hours of manual review.x
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>AI-Powered Matching</CardTitle>
          </CardHeader>
          <CardContent>
            Our advanced AI algorithms match resumes to your job descriptions
            with incredible accuracy.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Customizable Filters</CardTitle>
          </CardHeader>
          <CardContent>
            Set custom criteria and weightings to find candidates that perfectly
            match your needs.
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
