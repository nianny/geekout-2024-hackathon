import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { X } from "lucide-react";
export default function BoxDisplay(props){
  return (
    <Badge className="flex flex-row justify-center rounded-xl mr-2 my-2">
      <p className="text-l">{props.topic}</p>
      <Button variant="hidden" className="p-0 pl-2 h-7"> <X className="h-4 w-4"></X> </Button>
    </Badge>
  );
}