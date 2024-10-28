"use client";

import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

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
                <span className="cursor-pointer font-medium text-neutral-800 hover:underline dark:text-neutral-200">
                  astnai
                </span>
              </Link>
            </HoverCardTrigger>
            <HoverCardContent
              align="end"
              alignOffset={-200}
              className="w-80 rounded-sm bg-transparent shadow-none"
              sideOffset={12}
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
                      asChild
                      className="text-neutral-900 dark:text-neutral-100 overflow-hidden rounded-sm border border-neutral-200 bg-transparent transition-all duration-200 shadow-none dark:border-neutral-700 hover:shadow-sm sm:hover:border-neutral-300 sm:hover:bg-transparent sm:hover:shadow-sm sm:dark:hover:border-neutral-600 sm:dark:hover:shadow-neutral-800"
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
