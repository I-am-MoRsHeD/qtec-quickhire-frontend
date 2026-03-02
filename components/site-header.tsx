'use client';
import { IUser } from "@/interface/auth.type"
import { Separator } from "./ui/separator"
import { SidebarTrigger } from "./ui/sidebar"
import { Button } from "./ui/button"
import { removeCookie } from "@/lib/cookies";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function SiteHeader({ adminInfo }: { adminInfo: IUser }) {
  const router = useRouter();

  const handleLogout = () => {
    removeCookie("accessToken");
    removeCookie("refreshToken");
    toast.success("Logged out successfully!")
    router.push('/');
  };


  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height) py-2">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
      </div>
      {adminInfo.role === 'ADMIN' && <Button onClick={handleLogout} className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-6 py-3 transition-all">
        Logout
      </Button>}
    </header>
  )
}
