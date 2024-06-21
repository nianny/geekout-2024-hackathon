import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AppStates, Article } from "@/lib/utils.ts";
import { X } from "lucide-react";
import { Button } from "./ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";

export default function ArticleView(props: {
  article: Article | null;
  setCurArticle: (value: Article | null) => void;
  setAppState: (value: AppStates) => void;
}) {
  if (!props.article) {
    return <p>Peepeepoopoo!</p>;
  }

  const handleBack = () => {
    props.setCurArticle(null);
    props.setAppState("listView");
  };

  const isDesktop = useMediaQuery("(min-width: 768px)");
  return (
    <div className="flex flex-col items-center justify-start p-12">
      <Card className="w-full sm:max-w-2xl">
        <CardHeader>
          <div className="flex flex-row justify-between">
            <CardTitle className={"text-5xl"}>{props.article.title}</CardTitle>
            <Button variant="ghost" size="icon" onClick={handleBack}>
              <X className="h-8 w-8" />
            </Button>
          </div>
          <CardDescription className="text-2xl">
            {props.article.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="text-2xl">
          <p>{props.article.content}</p>
        </CardContent>
      </Card>

      {/* 
      <Card variant="outline" size="card" className="m-4">
        <p className="text-5xl font-semibold leading-none tracking-tight">
          {props.article.title}
        </p>
        <p className="text-2xl text-muted-foreground text-left">
          {props.article.description}
        </p>
      </Button>
      <p className="text-2xl text-muted-foreground text-left">
        {props.article.content}
      </p> */}
    </div>
  );
}
