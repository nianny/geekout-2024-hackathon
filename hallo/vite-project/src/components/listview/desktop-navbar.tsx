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

function DesktopNavBar(props: {setAppState: (value: AppStates) => void}) {
  const { setTheme } = useTheme();

  const enterTopic = () => {
    props.setAppState("topicView");
  };
  return (
    <div className="flex flex-row justify-between mx-12 mt-6">
      <h1 className="ma-shan-zheng-regular text-5xl text-foreground">
        ContextEd
      </h1>
      <div className="flex flex-row items-center">
        <Button
          variant="ghost"
          size="lg"
          className="text-2xl font-semibold"
          onClick={enterTopic}
        >
          Topics
        </Button>
        <Button variant="ghost" size="lg" className="text-2xl font-semibold">
          Bookshelf
        </Button>
        <Button variant="ghost" size="lg" className="text-2xl font-semibold">
          Account
        </Button>
        <Button variant="ghost" size="lg" className="text-2xl font-semibold">
          Settings
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

export default DesktopNavBar;
