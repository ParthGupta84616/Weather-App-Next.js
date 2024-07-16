"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Calculator, Calendar, CreditCard, Github, Linkedin, Settings, Smile, User } from "lucide-react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useRouter } from "next/navigation";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

export default function Navbar() {
  const { setTheme } = useTheme();
  const router = useRouter();
  return (
    <div className="flex items-center justify-end gap-2">
      <Dialog>
        <DialogTrigger>
          <div className=" border-gray-300 dark:border-gray-700 border-2 rounded-lg h-10">
            <Command className="  dark:bg-gray-900 bg-gray-200">
              <CommandInput placeholder="Type a city or search..." />
            </Command>
          </div>
        </DialogTrigger>
        <DialogContent>
          <Command className="rounded-lg border shadow-md">
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem>
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>Calendar</span>
                </CommandItem>
                <CommandItem>
                  <Smile className="mr-2 h-4 w-4" />
                  <span>Search Emoji</span>
                </CommandItem>
                <CommandItem>
                  <Calculator className="mr-2 h-4 w-4" />
                  <span>Calculator</span>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
            </CommandList>
          </Command>
        </DialogContent>
      </Dialog>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon" className="w-12">
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
        </DropdownMenuContent>
      </DropdownMenu>
      <Button onClick={() => router.push("https://github.com/ParthGupta84616")}>
        <Github color="blue" size={20} strokeWidth={2} />
        <span className="mx-2 font-mono text-lg">Github</span>
      </Button>
      <Button
        onClick={() =>
          router.push("https://www.linkedin.com/in/parth-guptaji/")
        }
      >
        <Linkedin color="blue" size={20} strokeWidth={2} />
        <span className="mx-2 font-mono text-lg">Linkedin</span>
      </Button>
    </div>
  );
}
