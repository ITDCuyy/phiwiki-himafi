import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
  SidebarFooter,
} from "~/components/ui/sidebar";
import { Home, Users, Settings, Package2 } from "lucide-react";

export default function SidebarPage() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2 p-2">
            <Package2 className="size-6" />
            <h2 className="text-lg font-semibold">My App</h2>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton isActive tooltip="Home">
                <Home className="size-4" />
                <span>Home</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Users">
                <Users className="size-4" />
                <span>Users</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Settings">
                <Settings className="size-4" />
                <span>Settings</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Account">
                <Settings className="size-4" />
                <span>Account</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <div className="p-4">
          <SidebarTrigger />
          <h1 className="mt-4 text-2xl font-bold">Main Content</h1>
          <p>
            This is the main content area. You can toggle the sidebar by
            clicking the button above or by pressing{" "}
            <kbd className="rounded-md border bg-muted px-2 py-1 text-xs font-semibold">
              ⌘ B
            </kbd>
            .
          </p>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
