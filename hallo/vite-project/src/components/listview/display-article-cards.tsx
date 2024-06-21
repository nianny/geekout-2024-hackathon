import { AppStates, Article } from "@/lib/utils.ts";
import ArticleCard from "../ArticleCard";
export default function DisplayArticleCards(props: {
  articles: Article[];
  setAppState: (value: AppStates) => void;
  setCurArticle: (value: Article) => void;
}) {
  return (
    <div className="flex flex-col items-center justify-start mx-12">
      {Object.values(props.articles).map((article) => (
        <ArticleCard
          article={article}
          setAppState={props.setAppState}
          setCurArticle={props.setCurArticle}
        />
      ))}
    </div>
  );
}
