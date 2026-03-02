
import { AppSidebar } from "@/components/app-sidebar";
import {
    SidebarInset,
    SidebarProvider,
} from "../../components/ui/sidebar"
import { SiteHeader } from "@/components/site-header";
import { getAdminInfo } from "@/services/auth.service";

interface IProps {
    children: React.ReactNode;
};

const DashboardLayout = async ({ children }: IProps) => {
    const adminInfo = await getAdminInfo();

    return (
        <SidebarProvider>
            <AppSidebar variant="inset" />
            <SidebarInset>
                <SiteHeader adminInfo={adminInfo} />
                <div className="flex flex-1 flex-col">
                    <div className="m-4 min-h-dvh">
                        {children}
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
};

export default DashboardLayout;