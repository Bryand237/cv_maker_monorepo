import { Calendar, Group, Home, Inbox, Search, Settings } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import { NavLink, useLocation } from "react-router-dom";

// Menu items.
const items = [
  {
    title: "Vue d'ensemble",
    url: "/dashboard/overview",
    icon: Home,
  },
  {
    title: "Projet",
    url: "/dashboard/project",
    icon: Inbox,
  },
  {
    title: "Templates",
    url: "/dashboard/templates",
    icon: Calendar,
  },
  {
    title: "Guide",
    url: "/dashboard/guide",
    icon: Search,
  },
  {
    title: "FAQs",
    url: "/dashboard/faqs",
    icon: Settings,
  },
];

function AppSidebar() {
  const pathname = useLocation().pathname;
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="h-22 flex items-center justify-center gap-4 font-semibold">
            <NavLink to={"/"}>
              <div className="logo w-full text-center p-2 rounded-md text-black m-auto bg-blue-200">
                <Group size={27} />
              </div>
            </NavLink>
            <div className="text-2xl">CV Maker</div>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className={`p-5 text-lg flex items-center gap-4 rounded-md hover:bg-blue-500 hover:text-white w-full  ${
                        pathname === item.url
                          ? "bg-blue-600 text-white shadow-md"
                          : ""
                      }  `}
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

export default AppSidebar;
