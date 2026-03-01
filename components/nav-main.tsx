"use client"

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
} from "./ui/sidebar"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
  }[]
}) {
  const pathname = usePathname();

  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          {items.map((item) => {
            const isActive = item.url === pathname;
            return (
              <Link href={item.url} key={item.title} className="my-2 cursor-pointer">
                <SidebarMenuButton className={cn(
                  "transition-all text-lg px-4 py-6 w-full",
                  isActive
                    ? "bg-primary text-background rounded" :
                    "text-primary"
                )} tooltip={item.title}>
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </Link>
            )
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
