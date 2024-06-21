import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Plus } from "lucide-react";
import { Button } from "../ui/button";
export default function SuggestionDisplay(props) {
  const addTopic = () => {
    console.log("Hallooooooo")
    props.setTopic((topic) => {
      const newTopic = {...topic}

      const index = newTopic.suggested.indexOf(props.suggestion);
      newTopic.suggested.splice(index, 1);

      newTopic.topics = [...newTopic.topics, props.suggestion]
      
      return newTopic
    })
  }

  return (
    <div className="m-2">
      <Drawer>
        <DrawerTrigger asChild>
          <Button className="w-full items-center justify-start rounded-xl">
            <Plus className="mr-2 h-4 w-4"></Plus>
            <p className="col-span-5 text-l text-left">{props.suggestion}</p>
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader className="text-left">
            <DrawerTitle>Add topic</DrawerTitle>
            <DrawerDescription>Add a new topic "{props.suggestion}"!</DrawerDescription>
          </DrawerHeader>
          {/* <ProfileForm className="px-4" /> */}
          <DrawerFooter className="pt-2">
            <DrawerClose asChild>
              <Button onClick={addTopic}>Save</Button>
            </DrawerClose>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
