"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  console.log("Is Dark Value : ", isDark);

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? (
        <Moon className="size-[1.2rem]" />
      ) : (
        <Sun className="size-[1.2rem]" />
      )}
    </Button>
  );
}
