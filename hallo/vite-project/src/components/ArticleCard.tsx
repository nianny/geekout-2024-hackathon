import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";
import {Article, AppStates} from "@/lib/utils.ts";
export default function ArticleCard(props: {
  article: Article | null,
  setAppState: (value: AppStates) => void,
  setCurArticle: (value: Article) => void,
}) {
  if (!props.article) {
    return <p>Peepeepoopoo!</p>;
  }

  const onClick = () => {
    props.setCurArticle(props.article!);
    props.setAppState("articleView");
  }
  const isDesktop = useMediaQuery("(min-width: 768px)");
  if (isDesktop){
    return (
      <Button variant="outline" size="card" className="rounded-lg border bg-card text-card-foreground shadow-sm flex-col space-y-1.5 p-6 m-4 items-start justify-start whitespace-normal" onClick={onClick}>
        <p className="text-5xl font-semibold leading-none tracking-tight">
          {props.article.title}
        </p>
        <p className="text-2xl text-muted-foreground text-left">
          {props.article.description}
        </p>
      </Button>
    );
  }
  else {
    return (
      <Button variant="outline" size="card" className="rounded-lg border bg-card text-card-foreground shadow-sm flex-col space-y-1.5 p-4 m-2 items-start justify-start whitespace-normal" onClick={onClick}>
        <p className="text-3xl font-semibold leading-none tracking-tight">
          {props.article.title}
        </p>
        <p className="text-l text-muted-foreground text-left">
          {props.article.description}
        </p>
      </Button>
    );
  }
}
