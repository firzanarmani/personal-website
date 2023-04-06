import { IconMenu2, IconX } from "@tabler/icons-react";
import { Lato, Recursive } from "next/font/google";

const lato = Lato({ subsets: ["latin"], weight: ["300", "400"] });
const recursive = Recursive({ subsets: ["latin"] });

export default function Header() {
  return (
    <header className="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white border-b border-gray-200 text-sm py-4 dark:bg-gray-800 dark:border-gray-700">
      <nav
        className={`relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 ${lato.className}`}
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <a
            className={`flex-none text-xl font-semibold dark:text-white ${recursive.className}`}
            href="#"
            aria-label="Brand"
          >
            Armani.DEV
          </a>
          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
              data-hs-collapse="#navbar-collapse-basic"
              aria-controls="navbar-collapse-basic"
              aria-label="Toggle navigation"
            >
              <IconMenu2 size={16} className="hs-collapse-open:hidden" />
              <IconX size={16} className="hs-collapse-open:block hidden" />
            </button>
          </div>
        </div>
        <div
          id="navbar-collapse-basic"
          className="hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
        >
          <div
            data-hs-scrollspy="#scrollspy"
            className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5 [--scrollspy-offset:70]"
          >
            <a
              className="text-sm text-gray-700 leading-6 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-500 hs-scrollspy-active:text-blue-600 dark:hs-scrollspy-active:text-blue-400 active"
              href="#home"
            >
              Home
            </a>
            <a
              className="text-sm text-gray-700 leading-6 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-500 hs-scrollspy-active:text-blue-600 dark:hs-scrollspy-active:text-blue-400"
              href="#about"
            >
              About
            </a>
            <a
              className="text-sm text-gray-700 leading-6 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-500 hs-scrollspy-active:text-blue-600 dark:hs-scrollspy-active:text-blue-400"
              href="#projects"
            >
              Projects
            </a>
            <a
              className="text-sm text-gray-700 leading-6 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-500 hs-scrollspy-active:text-blue-600 dark:hs-scrollspy-active:text-blue-400"
              href="#contact"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
