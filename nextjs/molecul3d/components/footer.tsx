"use client";
import { FaGithub } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="flex flex-row items-center justify-center gap-4 p-4 w-full text-center bg-slate-100 dark:bg-slate-800 h-full cursor-default">
      <p className="text-gray-500 dark:text-gray-400">Created by Jacob Serafin</p>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://github.com/serafinjacob/molecule_viewer"
        rel="noopener noreferrer"
      >
        <FaGithub />
        View Code →
      </a>
    </footer>
  );
}
