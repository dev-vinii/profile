import { ComponentType } from "react";
import { About } from "./about";
import { Contact } from "./contact";
import { Home } from "./home";
import { Projects } from "./projects";
import { Skills } from "./skills";

export type Direction = "up" | "down" | "left" | "right";

export interface PageEntry {
  component: ComponentType;
  bg: string;
  textColor: string;
  neighbors: Partial<Record<Direction, string>>;
}

export const pages: Record<string, PageEntry> = {
  home: {
    component: Home,
    bg: "bg-gray-200",
    textColor: "text-gray-900",
    neighbors: {
      up: "skills",
      down: "contact",
      left: "about",
      right: "projects",
    },
  },
  skills: {
    component: Skills,
    bg: "bg-gray-800",
    textColor: "text-gray-100",
    neighbors: { down: "home", left: "about", right: "projects" },
  },
  contact: {
    component: Contact,
    bg: "bg-gray-800",
    textColor: "text-gray-100",
    neighbors: { up: "home", left: "about", right: "projects" },
  },
  about: {
    component: About,
    bg: "bg-gray-800",
    textColor: "text-gray-100",
    neighbors: { up: "skills", down: "contact", right: "home" },
  },
  projects: {
    component: Projects,
    bg: "bg-gray-800",
    textColor: "text-gray-100",
    neighbors: { up: "skills", down: "contact", left: "home" },
  },
};
