export async function POST(req: Request) {
  const { resume, jobDescription } = await req.json();
}
