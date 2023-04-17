import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
import { Recursive } from "next/font/google";

const recursive = Recursive({ subsets: ["latin"] });

export default function ContactSection() {
  return (
    <>
      <footer>
        <div className="max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-5 text-center">
            <div>
              <a
                className={`flex-none text-xl font-semibold text-black dark:text-white ${recursive.className}`}
                href="#"
                aria-label="Brand"
              >
                Armani.DEV
              </a>
            </div>

            <ul className="text-center">
              <li className="inline-block relative pr-8 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-gray-600">
                <a
                  className="inline-flex gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-gray-500 dark:hover:text-gray-200"
                  href="#home"
                >
                  Home
                </a>
              </li>
              {/* <li className="inline-block relative pr-8 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-gray-600">
                <a
                  className="inline-flex gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-gray-500 dark:hover:text-gray-200"
                  href="#about"
                >
                  About
                </a>
              </li> */}
              <li className="inline-block relative pr-8 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-gray-600">
                <a
                  className="inline-flex gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-gray-500 dark:hover:text-gray-200"
                  href="#projects"
                >
                  Projects
                </a>
              </li>
            </ul>

            <div className="space-x-2">
              <a
                className="inline-flex justify-center items-center w-8 h-8 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800 dark:focus:ring-offset-slate-900"
                href="mailto:mrfirzanarmani@gmail.com"
              >
                <IconMail size={18} />
              </a>
              <a
                className="inline-flex justify-center items-center w-8 h-8 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800 dark:focus:ring-offset-slate-900"
                href="htt://linkedin.com/in/firzan-armani"
              >
                <IconBrandLinkedin size={18} />
              </a>
              <a
                className="inline-flex justify-center items-center w-8 h-8 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800 dark:focus:ring-offset-slate-900"
                href="http://github.com/firzanarmani"
              >
                <IconBrandGithub size={18} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
