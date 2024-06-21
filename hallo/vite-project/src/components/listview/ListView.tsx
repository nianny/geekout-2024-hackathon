import { Separator } from "@/components/ui/separator";
import { useMediaQuery } from "@/hooks/use-media-query";
import { AppStates, Article } from "@/lib/utils.ts";
import DesktopNavBar from "./desktop-navbar";
import DisplayArticleCards from "./display-article-cards";
import MobileNavBar from "./mobile-navbar";
export default function ListView(props: {
  articles: Article[];
  setAppState: (value: AppStates) => void;
  setCurArticle: (value: Article) => void;
}) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <div className="flex flex-col">
        <DesktopNavBar setAppState={props.setAppState}></DesktopNavBar>
        <Separator className="my-2" />
        <DisplayArticleCards
          articles={props.articles}
          setAppState={props.setAppState}
          setCurArticle={props.setCurArticle}
        ></DisplayArticleCards>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col">
        <MobileNavBar setAppState={props.setAppState}></MobileNavBar>
        <Separator className="my-2" />
        <DisplayArticleCards
          articles={props.articles}
          setAppState={props.setAppState}
          setCurArticle={props.setCurArticle}
        ></DisplayArticleCards>
      </div>
    );
  }
}
