import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, Brain, Filter } from "lucide-react";

export default function Features() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
        Features
      </h2>
      <div className="grid gap-6 lg:grid-cols-3 px-4 md:px-6">
        <Card>
          <CardHeader>
            <Upload className="w-8 h-8 mb-2" />
            <CardTitle>Multiple Resume Upload</CardTitle>
          </CardHeader>
          <CardContent>
            Upload multiple resumes in PDF format simultaneously, streamlining
            your candidate evaluation process.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Brain className="w-8 h-8 mb-2" />
            <CardTitle>AI-Powered Matching</CardTitle>
          </CardHeader>
          <CardContent>
            Our advanced AI algorithms use OpenAI embeddings to match resumes to
            your job descriptions with high accuracy.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Filter className="w-8 h-8 mb-2" />
            <CardTitle>Top N Filtering</CardTitle>
          </CardHeader>
          <CardContent>
            Specify the number of top-matching resumes you want to see, allowing
            you to focus on the most relevant candidates quickly.
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
