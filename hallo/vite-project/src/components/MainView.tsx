import { useEffect, useState } from "react";

import { AppStates, Article } from "@/lib/utils.ts";
import ArticleView from "./ArticleView";
import ListView from "./listview/ListView";

function MainView() {
  const [appState, setAppState] = useState<AppStates>("listView");
  const [topics, setTopics] = useState<object>({});
  const [articles, setArticles] = useState<Article[]>([]);
  const [curArticle, setCurArticle] = useState<Article | null>(null);

  useEffect(() => {
    setArticles([
      { title: "title1", description: "description1", content: "content1" },
      { title: "title2", description: "description2", content: "content2" },
    ]);
  }, []);

  if (appState === "listView") {
    return (
      <ListView
        articles={articles}
        setAppState={setAppState}
        setCurArticle={setCurArticle}
      />
    );
  } else if (appState === "articleView") {
    return (
      <>
        <ArticleView
          article={curArticle}
          setAppState={setAppState}
          setCurArticle={setCurArticle}
        />
      </>
    );
  }
}

export default MainView;
