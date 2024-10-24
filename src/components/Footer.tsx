"use client";

import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-20 border-t sm:mt-40 border-neutral-200 dark:border-neutral-800">
      <div className="max-w-6xl px-4 py-6 mx-auto text-sm text-center text-muted-foreground sm:px-6">
        Built by{" "}
        <HoverCard>
          <HoverCardTrigger asChild>
            <span className="font-medium cursor-pointer text-foreground">
              <Link href="https://x.com/astnai" className="hover:underline">astnai</Link>
            </span>
          </HoverCardTrigger>
          <HoverCardContent
            className="w-80 bg-popover rounded-none shadow-none"
            sideOffset={22}
          >
            <div className="flex justify-between space-x-4">
              <Avatar>
                <AvatarImage src="https://github.com/astnai.png" />
                <AvatarFallback>AA</AvatarFallback>
              </Avatar>
              <div className="space-y-1 text-left">
                <h4 className="text-sm font-semibold">@astnai</h4>
                <p className="text-sm">
                  Software Engineer from Patagonia, Argentina.
                </p>
                <div className="flex items-center pt-2">
                  <Button
                    className="border border-neutral-200 bg-transparent text-neutral-800 rounded-none shadow-none hover:border-black hover:bg-transparent dark:border-neutral-800 dark:bg-transparent dark:text-neutral-100 dark:hover:border-white dark:hover:bg-transparent"
                    asChild
                  >
                    <a
                      href="https://twitter.com/astnai"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Follow on Twitter
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
    </footer>
  );
}
