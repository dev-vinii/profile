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
  isDark: boolean;
  neighbors: Partial<Record<Direction, string>>;
}

export const pages: Record<string, PageEntry> = {
  home: {
    component: Home,
    bg: "bg-[#EDE8DB]",
    textColor: "text-[#1B1916]",
    isDark: false,
    neighbors: {
      up: "skills",
      down: "contact",
      left: "about",
      right: "projects",
    },
  },
  skills: {
    component: Skills,
    bg: "bg-[#1B1916]",
    textColor: "text-[#EDE8DB]",
    isDark: true,
    neighbors: { down: "home", left: "about", right: "projects" },
  },
  contact: {
    component: Contact,
    bg: "bg-[#1B1916]",
    textColor: "text-[#EDE8DB]",
    isDark: true,
    neighbors: { up: "home", left: "about", right: "projects" },
  },
  about: {
    component: About,
    bg: "bg-[#1B1916]",
    textColor: "text-[#EDE8DB]",
    isDark: true,
    neighbors: { up: "skills", down: "contact", right: "home" },
  },
  projects: {
    component: Projects,
    bg: "bg-[#1B1916]",
    textColor: "text-[#EDE8DB]",
    isDark: true,
    neighbors: { up: "skills", down: "contact", left: "home" },
  },
};
