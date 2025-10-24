import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import HomePage from "../pages/HomePage";
import Layout from "./Layout";
import DashboardPage from "../pages/DashboardPage";
import OverviewSection from "../sections/DashboardSections/OverviewSection";
import ProjectSection from "@/sections/DashboardSections/ProjectSection";
import TemplateSection from "@/sections/DashboardSections/TemplateSection";
import GuideSection from "@/sections/DashboardSections/GuideSection";
import FAQSection from "@/sections/DashboardSections/FAQSection";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "dashboard",
          element: (
            <>
              <DashboardPage />
              <Navigate to={"/dashboard/overview"} />
            </>
          ),
          children: [
            {
              index: true,
              path: "overview",
              element: <OverviewSection />,
            },
            {
              path: "project",
              element: <ProjectSection />,
            },
            {
              path: "templates",
              element: <TemplateSection />,
            },
            {
              path: "guide",
              element: <GuideSection />,
            },
            {
              path: "faqs",
              element: <FAQSection />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
