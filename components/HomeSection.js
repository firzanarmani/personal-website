import { Recursive } from "next/font/google";
import Image from "next/image";
import profilePhoto from "../assets/firzan.jpg";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconMap2,
} from "@tabler/icons-react";
import { IconBrandGithubFilled } from "@tabler/icons-react";

const recursive = Recursive({ subsets: ["latin"] });

export default function HomeSection() {
  return (
    <div className="max-w-[85rem] flex h-full items-center justify-center mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-8 xl:gap-20 md:items-center justify-center">
        <div>
          <h1
            className={`text-center md:text-left block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-5xl lg:leading-tight dark:text-white ${recursive.className}`}
          >
            <div>
              {"A "}
              <span className="text-blue-600">{"software developer "}</span>
            </div>
            <div>
              {"named "}
              <span className="text-blue-600">{"Firzan Armani"}</span>
            </div>
          </h1>

          <p className="flex flex-col text-center md:text-left mt-3 text-lg text-gray-800 dark:text-gray-400">
            <span className="flex">{`I develop solutions for problems.`}</span>
            <span className="flex">{`I mainly develop for the web but... why stop there?`}</span>
          </p>

          <div className="flex flex-row mt-3 text-gray-800 dark:text-gray-400">
            <div className="flex flex-1 items-center">
              <IconMap2 size={16} />
              <span className="ml-1">Singapore</span>
            </div>

            <div className="flex flex-0 space-x-2">
              <a
                className="inline-flex justify-center items-center w-8 h-8 text-center hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:hover:bg-gray-800 dark:focus:ring-offset-slate-900"
                href="mailto:mrfirzanarmani@gmail.com"
              >
                <IconMail size={20} />
              </a>
              <a
                className="inline-flex justify-center items-center w-8 h-8 text-center hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:hover:bg-gray-800 dark:focus:ring-offset-slate-900"
                href="http://linkedin.com/in/firzan-armani"
              >
                <IconBrandLinkedin size={20} />
              </a>
              <a
                className="inline-flex justify-center items-center w-8 h-8 text-center hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:hover:bg-gray-800 dark:focus:ring-offset-slate-900"
                href="http://github.com/firzanarmani"
              >
                <IconBrandGithub size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="relative ml-4">
          <Image
            src={profilePhoto}
            alt="Profile Photo"
            className="w-80 rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
