import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Layout = () => {
  return (
    <div className="w-screen h-screen overflow-y-auto relative">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
