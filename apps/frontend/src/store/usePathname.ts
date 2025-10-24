import { create } from "zustand";

type State = {
  pathname: string;
  title: string;
  setPathname: (p: string) => void;
};

const getName = (segment: string) => {
  switch (segment.toLowerCase()) {
    case "/dashboard/overview":
      return "Vue d'ensemble";
    case "/dashboard/project":
      return "Projects";
    case "/dashboard/templates":
      return "Templates";
    case "/dashboard/guide":
      return "Guide";
    case "/dashboard/faqs":
      return "FAQs";
    default:
      return segment
        .replace(/[-_]/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());
  }
};

const computeTitle = (p: string) => {
  if (!p || p === "/") return "Home";
  const map: Record<string, string> = {
    "/dashboard/overview": "dashboard/overview",
    "/dashboard/projet": "dashboard/projet",
    "/dashboard/templates": "dashboard/template",
    "/dashboard/guide": "dashboard/guide",
    "/dashboard/faq": "dashboard/faq",
  };
  if (map[p]) return map[p];
  const seg = p.split("/").filter(Boolean).pop() || "Home";
  return seg.replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
};

export const usePathname = create<State>((set) => {
  const initial =
    typeof window !== "undefined" ? window.location.pathname : "/";
  return {
    pathname: getName(
      initial === "/" ? "home" : initial.split("/").pop() || ""
    ),
    title: computeTitle(initial),
    setPathname: (p: string) =>
      set(() => ({ pathname: getName(p), title: computeTitle(p) })),
  };
});

export default usePathname;
