import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AppStates } from "@/lib/utils";
import { AlignRight, Moon, Sun } from "lucide-react";
function MobileOpenSheet(props: { setAppState: (value: AppStates) => void }) {
  const enterTopic = () => {
    props.setAppState("topicView");
  };
  const { setTheme } = useTheme();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="smicon"
          className="items-center content-center"
        >
          <AlignRight className="h-6 w-6"></AlignRight>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-40">
        <SheetHeader>
          <SheetTitle className="text-right mt-5">Pages</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col text-l items-end">
          <Button
            variant="ghost"
            size="lgnavpanel"
            className=""
            onClick={enterTopic}
          >
            Topics
          </Button>
          <Button variant="ghost" size="lgnavpanel" className="">
            Bookshelf
          </Button>
          <Button variant="ghost" size="lgnavpanel" className="">
            Account
          </Button>
          <Button variant="ghost" size="lgnavpanel" className="">
            Settings
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sicon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                className="justify-end"
                onClick={() => setTheme("light")}
              >
                Light
              </DropdownMenuItem>
              <DropdownMenuItem
                className="justify-end"
                onClick={() => setTheme("dark")}
              >
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem
                className="justify-end"
                onClick={() => setTheme("system")}
              >
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MobileOpenSheet;
