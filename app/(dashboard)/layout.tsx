
import { AppSidebar } from "@/components/app-sidebar";
import {
    SidebarInset,
    SidebarProvider,
} from "../../components/ui/sidebar"
import { SiteHeader } from "@/components/site-header";

interface IProps {
    children: React.ReactNode;
};

const DashboardLayout = ({ children }: IProps) => {
    return (
        <SidebarProvider>
            <AppSidebar variant="inset" />
            <SidebarInset>
                <SiteHeader />
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