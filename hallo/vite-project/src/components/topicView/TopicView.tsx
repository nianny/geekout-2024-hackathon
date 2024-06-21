import { AppStates } from "@/lib/utils";
import { X } from "lucide-react";
import { Button } from "../ui/button";
import BoxDisplay from "./BoxDisplay";
import SuggestionDisplay from "./SuggestionDisplay";


export default function TopicView(props: {
  setAppState: (value: AppStates) => void;
}) {
  const handleBack = () => {
    props.setAppState("listView");
  };
  return (
    <div className="flex flex-col justify-start items-center p-12">
      <div className="flex flex-row justify-between w-full mb-4">
        <h1 className="text-5xl font-semibold">Topics</h1>
        <Button variant="ghost" size="icon" onClick={handleBack}>
          <X className="h-8 w-8" />
        </Button>
      </div>
      <div className="flex flex-row justify-start w-full flex-wrap mb-4">
        {Object.values(props.topics.topics).map((topic) => (
          <BoxDisplay topic={topic}></BoxDisplay>
        ))}
      </div>
      <div className="w-screen mb-4">
        <p className="p-2 py-4 pl-12 w-full text-left bg-secondary font-semibold text-l">
          Recommended Topics
        </p>
      </div>
      <div className="flex flex-col justify-start w-full">
        {Object.values(props.topics.suggested).map((suggestion) => (
          <SuggestionDisplay suggestion={suggestion} setTopic={props.setTopics}></SuggestionDisplay>
        ))}
      </div>
    </div>
  );
}
