import { useTheme } from "@/components/theme-provider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";
import { AppStates } from "@/lib/utils";
import {AlignRight} from "lucide-react"
import MobileOpenSheet from "./mobile-open-sheet";

function MobileNavBar(props: {setAppState: (value: AppStates) => void}) {
  
  const { setTheme } = useTheme();

  return (
    <div className="flex flex-row justify-between mx-4 mt-4">
      <h1 className="ma-shan-zheng-regular text-3xl text-foreground">
        ContextEd
      </h1>
      <div className="flex flex-row items-center">
        <MobileOpenSheet setAppState={props.setAppState}></MobileOpenSheet>
      </div>
    </div>
  );
}

export default MobileNavBar;
