"use client";

import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-32 w-full">
      <div className="py-6 text-sm text-muted-foreground">
        <div className="text-left">
          Build by{" "}
          <HoverCard>
            <HoverCardTrigger asChild>
              <Link
                href="https://twitter.com/astnai"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="cursor-pointer font-medium text-neutral-800 dark:text-neutral-200 hover:underline">
                  astnai
                </span>
              </Link>
            </HoverCardTrigger>
            <HoverCardContent
              className="w-80 rounded-none bg-popover shadow-none"
              sideOffset={12}
              align="end"
              alignOffset={-200}
            >
              <div className="flex justify-between space-x-4">
                <Avatar>
                  <AvatarImage src="https://github.com/astnai.png" />
                  <AvatarFallback>AA</AvatarFallback>
                </Avatar>
                <div className="space-y-1 text-left">
                  <h4 className="text-sm font-semibold">@astnai</h4>
                  <p className="text-sm">
                    Optimist Software Engineer from Patagonia, Argentina.
                  </p>
                  <div className="flex items-center pt-2">
                    <Button
                      className="rounded-none border border-neutral-200 bg-transparent text-neutral-800 shadow-none hover:border-black hover:bg-transparent dark:border-neutral-800 dark:bg-transparent dark:text-neutral-100 dark:hover:border-white dark:hover:bg-transparent"
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
      </div>
    </footer>
  );
}
