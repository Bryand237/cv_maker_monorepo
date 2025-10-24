import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "../components/AppSidebar";
import { Outlet, useLocation } from "react-router-dom";
import usePathname from "@/store/usePathname";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";

const DashboardPage = () => {
  const pathname = usePathname((state) => state.pathname);
  const setPathname = usePathname((state) => state.setPathname);
  const location = useLocation();
  useEffect(() => {
    setPathname(location.pathname);
  }, [location, setPathname]);

  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
        <main>
          <SidebarTrigger
            className={`md:hidden absolute bottom-3 left-3 p-2 rounded-full bg-blue-400 text-white hover:bg-blue-500 hover:text-white size-10`}
          />
          <div className="w-full h-16 shadow-md flex items-center justify-between p-4">
            <div className="text-lg md:text-xl font-semibold">{pathname}</div>
          </div>
          <div className="m-2 p-2 w-[calc(100dvw-1rem)] md:w-[calc(100dvw-17.1rem)] *:h-[calc(100dvh-6rem)] overflow-auto flex flex-col">
            <AnimatePresence mode="wait">
              <Outlet />
            </AnimatePresence>
          </div>
        </main>
      </SidebarProvider>
    </div>
  );
};

export default DashboardPage;
