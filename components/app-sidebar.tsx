"use client"

import * as React from "react"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar"
import Link from "next/link"
import Image from "next/image"
import { dashboardNavInfo } from "@/consts/navinfo"
import { NavMain } from "./nav-main"


export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:p-1.5!"
            >
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2">
                <div className="relative w-8 h-8">
                  <Image src="/logo.png" fill alt="Logo" />
                </div>
                <span className="text-2xl font-extrabold text-foreground font-red-hat tracking-tight">QuickHire</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={dashboardNavInfo} />
      </SidebarContent>
    </Sidebar>
  )
}
