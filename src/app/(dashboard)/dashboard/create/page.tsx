import { ContentGenerator } from '@/components/content/content-generator';

export default function CreateContentPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Create Content</h1>
        <p className="text-muted-foreground mt-1">
          Generate stunning social media content with a single sentence
        </p>
      </div>

      <ContentGenerator />
    </div>
  );
}