"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Submit() {
  const [files, setFiles] = useState<File[]>([]);
  const [jobDescription, setJobDescription] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Files:", files);
    console.log("Job Description:", jobDescription);
    // You would typically send this data to your backend here
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">
        Submit Resumes and Job Description
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="resumes" className="block text-sm font-medium mb-2">
            Upload Resumes (PDF)
          </label>
          <Input
            id="resumes"
            type="file"
            accept=".pdf"
            multiple
            onChange={handleFileChange}
            className="w-full"
          />
        </div>
        <div>
          <label
            htmlFor="jobDescription"
            className="block text-sm font-medium mb-2"
          >
            Job Description
          </label>
          <Textarea
            id="jobDescription"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            className="w-full h-32"
            placeholder="Enter the job description here..."
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
