import { useEffect, useState } from "react";

import { AppStates, Article, Topic } from "@/lib/utils.ts";
import ArticleView from "./ArticleView";
import ListView from "./listview/ListView";
import TopicView from "./topicView/TopicView";
import axios from 'axios'

function MainView() {
  const [appState, setAppState] = useState<AppStates>("listView");
  const [topics, setTopics] = useState<object>({});
  const [articles, setArticles] = useState<Article[]>([]);
  const [curArticle, setCurArticle] = useState<Article | null>(null);
  
  const hallo = async () =>{
    const articles = [
      { title: "title1", description: "description1", content: "content1" },
      { title: "title2", description: "description2", content: "content2" },
    ]
    for (let i=0; i<articles.length; i++){
      const body = {
        username: "user",
        domain: articles[i].title
      }
      try{
        const content = await axios.get(`localhost:8000/recommend`, body)
        console.log(content)
      } catch(error){
        console.error('Error posting new todo:', error)
      }
    }
    setArticles(articles)
  }
  // hallo();
  useEffect(() => {
    
    // hallo();
    const articles = [
      { title: "title1", description: "description1", content: "content1" },
      { title: "title2", description: "description2", content: "content2" },
    ]
    setArticles(articles);
    // setAppState("topicView")

    setTopics({id:"1", topics: ["topic1", "topic2", "topic3", "topic4"], suggested:["s1", "s2"]})

    
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
  } else if (appState === "topicView") {
    return (
      <TopicView topics={topics} setTopics={setTopics} setAppState={setAppState}></TopicView>
    );
  }
}

export default MainView;
