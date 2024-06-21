import "./App.css";
import MainView from "./components/MainView";

import { ThemeProvider } from "@/components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <MainView />
    </ThemeProvider>
  );
}

export default App;

/*
GET /articles/:id    body: {length: 2}    return [{title: "title1", description: "description1", content: "content1"}, {title: "title2", description: "description2", content: "content2"}] (returns a array of articles/passages given user's current topics, the description is probably a short <10ish word summary, number of articles corresponding to length in request body)

GET /user/:id           return {id: "userId", topics: ["topic1", "topic2", "topic3", "topic4"], suggested: ["s1", "s2", "s3", "s4", "s5", "s6"]} (returns the user's profile, i.e. id + current topics + 6 suggested topics)
(array of 6 suggested topics given user's history of current+past topics prob with openai api?, maybe can prompt it such that it can still output past topics but not current topics, can consider prompting such that at least 1 suggestion is quite different from history)

POST /user                     return {id: "userId", topics: []} (creates a new user and returns the user's profile)

PUT /user/:id    body: {topics: ["topic1", "topic2", "topic3", "topic4"]}     return {id: "userId", topics: ["topic1", "topic2", "topic3", "topic4"]} (updates the user's topics from id provited in the url)
*/
