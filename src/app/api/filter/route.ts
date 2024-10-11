import { NextRequest, NextResponse } from "next/server";
import pdf from "pdf-parse";
import { render_page } from "@/lib/utils";
import { openai } from "@/lib/openai";
import index from "@/lib/pinecone";

interface ResumeData {
  name: string;
  content: Buffer;
}

export async function POST(request: NextRequest) {
  try {
    const { resumeData, jobDescription, topN } = await request.json();

    const resumesContent = await Promise.all(
      resumeData.map(async (item: ResumeData) => {
        const pdfData = await pdf(item.content, {
          pagerender: render_page,
        });
        return {
          name: item.name,
          content: pdfData.text,
        };
      })
    );

    const resumeEmbeddingVectors = [];

    for (const resumeContent of resumesContent) {
      const embedding = await openai.embeddings.create({
        input: resumeContent.content,
        model: "text-embedding-3-small",
      });
      resumeEmbeddingVectors.push({
        id: resumeContent.name,
        values: embedding.data[0].embedding,
      });
    }

    const jobDescriptionEmbedding = await openai.embeddings.create({
      input: jobDescription,
      model: "text-embedding-3-small",
    });

    await index.namespace("resumes").upsert(resumeEmbeddingVectors);

    const resp = await index.namespace("resumes").query({
      vector: jobDescriptionEmbedding.data[0].embedding,
      topK: topN,
      includeMetadata: true,
    });

    console.log(resp);

    const shortlisted = resp.matches.map((match) => match.id);

    return NextResponse.json({ shortlisted }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
