"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Sparkles,
  Link as LinkIcon,
  FileText,
  CheckCircle2,
  Code,
} from "lucide-react";

export default function Dashboard() {
  const [url, setUrl] = useState("");
  const [context, setContext] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<{
    titleTag: string;
    metaDescription: string;
    suggestedKeywords?: string[];
    schemaMarkup?: string;
  } | null>(null);

  const handleAudit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setResult(null);

    try {
      const response = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, context }),
      });

      if (!response.ok) throw new Error("Failed to generate SEO data");

      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Check the console for details.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4 sm:px-6 lg:px-8 text-slate-900">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Header Section */}
        <div className="text-center space-y-3">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Smart <span className="text-blue-600">SEO</span> Maker
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Drop your link and context. Our AI will analyze the page and
            generate production-ready meta tags, keywords, and rich-result
            schema.
          </p>
        </div>

        {/* Input Form */}
        <Card className="shadow-lg border-slate-200/60 backdrop-blur-sm">
          <CardHeader className="bg-slate-50/50 border-b border-slate-100 pb-6">
            <CardTitle className="flex items-center text-xl">
              <Sparkles className="w-5 h-5 mr-2 text-blue-500" />
              Start New Audit
            </CardTitle>
            <CardDescription className="text-base">
              Enter the target URL and any specific keywords you want to rank
              for.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <form onSubmit={handleAudit} className="space-y-6">
              <div className="space-y-3">
                <label className="text-sm font-semibold flex items-center text-slate-700">
                  <LinkIcon className="w-4 h-4 mr-2 text-slate-400" /> Target
                  URL
                </label>
                <Input
                  type="url"
                  placeholder="https://your-website.com/page"
                  className="h-12 text-md focus-visible:ring-blue-500"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-3">
                <label className="text-sm font-semibold flex items-center text-slate-700">
                  <FileText className="w-4 h-4 mr-2 text-slate-400" /> Necessary
                  Files / Context (Optional)
                </label>
                <Textarea
                  placeholder="Paste target keywords, competitor links, or brand guidelines here..."
                  className="resize-none focus-visible:ring-blue-500"
                  value={context}
                  onChange={(e) => setContext(e.target.value)}
                  rows={4}
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold h-12 text-md transition-all"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Analyzing & Optimizing...
                  </span>
                ) : (
                  "Run AI Audit"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Results Section */}
        {result && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-2xl font-bold flex items-center text-slate-900">
              <CheckCircle2 className="w-6 h-6 mr-2 text-green-500" />
              Optimization Complete
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Meta Data Card */}
              <Card className="border-blue-100 shadow-md">
                <CardHeader className="bg-blue-50/50 border-b border-blue-50 pb-4">
                  <CardTitle className="text-lg text-blue-900">
                    Meta Tags
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4 space-y-6">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 block">
                      Title Tag
                    </label>
                    <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 font-mono text-sm text-slate-800 break-words">
                      {result.titleTag}
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 block">
                      Meta Description
                    </label>
                    <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 font-mono text-sm text-slate-800 break-words">
                      {result.metaDescription}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Keywords Card */}
              <Card className="border-purple-100 shadow-md">
                <CardHeader className="bg-purple-50/50 border-b border-purple-50 pb-4">
                  <CardTitle className="text-lg text-purple-900">
                    Target Keywords
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  {result.suggestedKeywords &&
                  result.suggestedKeywords.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {result.suggestedKeywords.map((keyword, index) => (
                        <span
                          key={index}
                          className="px-3 py-1.5 bg-purple-100 text-purple-800 rounded-md text-sm font-medium border border-purple-200 shadow-sm"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-slate-500">
                      No keywords generated.
                    </p>
                  )}
                  <p className="text-xs text-slate-500 mt-4 leading-relaxed">
                    *Weave these exact phrases into your H1, H2s, and body text
                    to maximize ranking potential.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Schema Card */}
            {result.schemaMarkup && (
              <Card className="border-slate-800 shadow-xl overflow-hidden">
                <CardHeader className="bg-slate-900 border-b border-slate-800 pb-4">
                  <CardTitle className="text-lg flex items-center text-slate-100">
                    <Code className="w-5 h-5 mr-2 text-slate-400" />
                    JSON-LD Schema
                  </CardTitle>
                  <CardDescription className="text-slate-400">
                    Paste this directly into the <code>&lt;head&gt;</code> of
                    your document.
                  </CardDescription>
                </CardHeader>
                <div className="p-4 bg-slate-950 overflow-x-auto">
                  <pre className="text-green-400 font-mono text-sm leading-relaxed">
                    <code>
                      {`<script type="application/ld+json">
${result.schemaMarkup}
</script>`}
                    </code>
                  </pre>
                </div>
              </Card>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
