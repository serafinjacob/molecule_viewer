"use client";
import { DarkThemeToggle, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FaSun, FaMoon } from "react-icons/fa";
import { DiAtom } from "react-icons/di";
import type { CustomFlowbiteTheme } from "flowbite-react";

export function RootNavbar() {
  const path = usePathname();
  const [activeTab, setActiveTab] = useState(path === "/" ? "home" : path.split("/")[1]);

  return (
    <Navbar fluid rounded theme={customTheme}>
      <NavbarBrand as={Link} href="/" className="gap-1 text-slate-700 dark:text-slate-200">
        <DiAtom className="h-8 w-8" />
        <span className="self-center whitespace-nowrap text-xl font-semibold ">Molecul3D</span>
      </NavbarBrand>
      <div className="flex gap-2 md:order-2">
        <DarkThemeToggle iconDark={FaSun} iconLight={FaMoon} />
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink
          as={Link}
          href="/"
          active={activeTab === "home"}
          onClick={() => setActiveTab("home")}
          className="font-semibold"
        >
          <p>Home</p>
        </NavbarLink>
        <NavbarLink
          href="/view"
          active={activeTab === "view"}
          onClick={() => setActiveTab("view")}
          className="font-semibold"
        >
          View Molecules
        </NavbarLink>
        <NavbarLink
          href="/add"
          active={activeTab === "add"}
          onClick={() => setActiveTab("add")}
          className="font-semibold"
        >
          Add Molecule
        </NavbarLink>
        <NavbarLink
          href="/edit"
          active={activeTab === "edit"}
          onClick={() => setActiveTab("edit")}
          className="font-semibold"
        >
          Edit Elements
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}

const customTheme: CustomFlowbiteTheme["navbar"] = {
  root: {
    base: "dark:border-slate-700 dark:bg-slate-800 bg-slate-300 border-slate-300",
    rounded: {
      on: "rounded",
      off: "",
    },
    bordered: {
      on: "border",
      off: "",
    },
    inner: {
      base: "mx-auto flex flex-wrap items-center justify-between",
      fluid: {
        on: "",
        off: "container",
      },
    },
  },
  brand: {
    base: "flex items-center px-2 py-2.5 sm:px-4",
  },
  collapse: {
    base: "w-full md:block md:w-auto",
    list: "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium px-0 pt-0",
    hidden: {
      on: "hidden",
      off: "",
    },
  },
  link: {
    base: "block py-2 pl-3 pr-4 md:p-0",
    active: {
      on: "bg-indigo-700 text-white dark:text-white md:bg-transparent md:text-indigo-700",
      off: "border-b border-slate-100 text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-indigo-700 md:dark:hover:bg-transparent md:dark:hover:text-white",
    },
    disabled: {
      on: "text-slate-400 hover:cursor-not-allowed dark:text-slate-600",
      off: "",
    },
  },
  toggle: {
    base: "inline-flex items-center rounded-lg p-2 text-sm text-slate-500 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-200 dark:text-slate-400 dark:hover:bg-slate-700 dark:focus:ring-slate-600 md:hidden",
    icon: "h-6 w-6 shrink-0",
  },
};
