import {
  IconBrandMongodb,
  IconBrandNextjs,
  IconBrandPrisma,
  IconBrandReact,
  IconBrandSupabase,
  IconBrandTailwind,
  IconCode,
  IconWorldShare,
} from "@tabler/icons-react";
import ItemWithTooltip from "./ItemWithTooltip";
import Image from "next/image";
import badlyexplainedDesktop from "../assets/badlyexplained-desktop.png";
import badlyexplainedMobile from "../assets/badlyexplained-mobile.png";
import mangashowDesktop from "../assets/mangashow-desktop.png";
import mangashowMobile from "../assets/mangashow-mobile.png";
import IconChakraUi from "./IconChakraUi";
import IconExpress from "./IconExpress";
import IconFlask from "./IconFlask";

export default function ProjectsSection() {
  return (
    <>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <nav
          className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4"
          aria-label="Tabs"
          role="tablist"
        >
          <div
            className="cursor-pointer hs-tab-active:bg-gray-100 hs-tab-active:hover:border-transparent text-center md:text-left hover:bg-gray-100 p-3 md:p-5 rounded-xl dark:hs-tab-active:bg-white/[.05] dark:hover:bg-gray-700 active"
            id="tabs-with-card-item-1"
            data-hs-tab="#tabs-with-card-1"
            aria-controls="tabs-with-card-1"
            role="tab"
          >
            <span className="flex">
              <span className="grow">
                <span className="hs-tab-active:text-blue-600 block font-semibold text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">
                  MangaShow
                </span>
                <span className="hidden lg:block mt-2 text-gray-800 dark:text-gray-200">
                  A whole new experience to reading manga or comics
                </span>
                <div className="mt-4 flex flex-row text-gray-800 dark:text-gray-200">
                  <div className="gap-x-2 flex-1 flex flex-row">
                    <ItemWithTooltip key="mangashow-react" message="React">
                      <IconBrandReact size={20} />
                    </ItemWithTooltip>
                    <ItemWithTooltip key="mangashow-next" message="Next.js">
                      <IconBrandNextjs size={20} />
                    </ItemWithTooltip>
                    <ItemWithTooltip
                      key="mangashow-tailwind"
                      message="TailwindCSS"
                    >
                      <IconBrandTailwind size={20} />
                    </ItemWithTooltip>
                    <ItemWithTooltip
                      key="mangashow-supabase"
                      message="Supabase"
                    >
                      <IconBrandSupabase size={20} />
                    </ItemWithTooltip>
                  </div>
                  <div className="gap-x-2 flex-0 flex flex-row">
                    <ItemWithTooltip
                      key="mangashow-code"
                      message="Code"
                      link="https://github.com/firzanarmani/mangashow"
                    >
                      <IconCode size={20} />
                    </ItemWithTooltip>
                    <ItemWithTooltip
                      key="mangashow-website"
                      message="Open website"
                      link="https://mangashow.armani.dev"
                    >
                      <IconWorldShare size={20} />
                    </ItemWithTooltip>
                  </div>
                </div>
              </span>
            </span>
          </div>

          <div
            className="cursor-pointer hs-tab-active:bg-gray-100 hs-tab-active:hover:border-transparent text-center md:text-left hover:bg-gray-100 p-3 md:p-5 rounded-xl dark:hs-tab-active:bg-white/[.05] dark:hover:bg-gray-700"
            id="tabs-with-card-item-2"
            data-hs-tab="#tabs-with-card-2"
            aria-controls="tabs-with-card-2"
            role="tab"
          >
            <span className="flex">
              <span className="grow">
                <span className="hs-tab-active:text-blue-600 block font-semibold text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">
                  Badly Explained
                </span>
                <span className="hidden lg:block mt-2 text-gray-800 dark:text-gray-200">
                  A quiz app to guess movies based on badly explained plots
                </span>
                <div className="mt-4 flex flex-row text-gray-800 dark:text-gray-200">
                  <div className="gap-x-2 flex-1 flex flex-row">
                    <ItemWithTooltip message="React">
                      <IconBrandReact size={20} />
                    </ItemWithTooltip>
                    <ItemWithTooltip message="ChakraUI">
                      <IconChakraUi
                        height={20}
                        width={20}
                        className="stroke-gray-600 fill-gray-600 dark:stroke-gray-200 dark:fill-gray-400"
                      />
                    </ItemWithTooltip>
                    <ItemWithTooltip message="MongoDB">
                      <IconBrandMongodb size={20} />
                    </ItemWithTooltip>
                    <ItemWithTooltip message="Flask">
                      <IconFlask
                        height={20}
                        width={20}
                        className="stroke-gray-600 fill-gray-600 dark:stroke-gray-200 dark:fill-gray-400"
                      />
                    </ItemWithTooltip>
                  </div>
                  <div className="gap-x-2 flex-0 flex flex-row">
                    <ItemWithTooltip
                      message="Code"
                      link="https://github.com/firzanarmani/badly-explained"
                    >
                      <IconCode size={20} />
                    </ItemWithTooltip>
                    <ItemWithTooltip
                      message="Open website"
                      link="https://badlyexplained.armani.dev"
                    >
                      <IconWorldShare size={20} />
                    </ItemWithTooltip>
                  </div>
                </div>
              </span>
            </span>
          </div>

          <div
            className="cursor-pointer hs-tab-active:bg-gray-100 hs-tab-active:hover:border-transparent text-center md:text-left hover:bg-gray-100 p-3 md:p-5 rounded-xl dark:hs-tab-active:bg-white/[.05] dark:hover:bg-gray-700"
            id="tabs-with-card-item-3"
            data-hs-tab="#tabs-with-card-3"
            aria-controls="tabs-with-card-3"
            role="tab"
          >
            <span className="flex">
              <span className="grow">
                <span className="hs-tab-active:text-blue-600 block font-semibold text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">
                  ShopLister.app
                </span>
                <span className="hidden lg:block mt-2 text-gray-800 dark:text-gray-200">
                  Bring your shopping lists where ever you go and collaborate
                  with your family and friends
                </span>
                <div className="mt-4 flex flex-row text-gray-800 dark:text-gray-200">
                  <div className="gap-x-2 flex-1 flex flex-row">
                    <ItemWithTooltip key="shoplister-react" message="React">
                      <IconBrandReact size={20} />
                    </ItemWithTooltip>
                    <ItemWithTooltip
                      key="shoplister-tailwind"
                      message="TailwindCSS"
                    >
                      <IconBrandTailwind size={20} />
                    </ItemWithTooltip>
                    <ItemWithTooltip key="shoplister-prisma" message="Prisma">
                      <IconBrandPrisma size={20} />
                    </ItemWithTooltip>
                    <ItemWithTooltip key="shoplister-express" message="Express">
                      <IconExpress
                        height={20}
                        width={20}
                        className="stroke-gray-600 fill-gray-600 dark:stroke-gray-200 dark:fill-gray-400"
                      />
                    </ItemWithTooltip>
                  </div>
                  <div className="gap-x-2 flex-0 flex flex-row">
                    <ItemWithTooltip
                      key="mangashow-code"
                      message="Code"
                      link="https://github.com/firzanarmani/shoplister"
                    >
                      <IconCode size={20} />
                    </ItemWithTooltip>
                    <ItemWithTooltip
                      key="shoplister-website"
                      message="Open website"
                      link="https://shoplister.armani.dev"
                    >
                      <IconWorldShare size={20} />
                    </ItemWithTooltip>
                  </div>
                </div>
              </span>
            </span>
          </div>
        </nav>

        <div className="mt-12 md:mt-16">
          <div
            id="tabs-with-card-1"
            role="tabpanel"
            aria-labelledby="tabs-with-card-item-1"
          >
            <div className="max-w-[1140px] lg:pb-32 relative">
              <figure className="hidden absolute bottom-0 left-0 z-[2] max-w-full w-60 h-auto mb-20 ml-20 lg:block">
                <div className="p-1.5 bg-gray-100 rounded-3xl shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(45_55_75_/_20%),_0_2rem_4rem_-2rem_rgb(45_55_75_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(45_55_75_/_20%)] dark:bg-gray-700 dark:shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(0_0_0_/_20%),_0_2rem_4rem_-2rem_rgb(0_0_0_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(0_0_0_/_20%)]">
                  <Image
                    src={mangashowMobile}
                    alt="MangaShow Mobile"
                    className="max-w-full h-auto rounded-[1.25rem]"
                  />
                </div>
              </figure>

              <figure className="ml-auto mr-20 relative z-[1] max-w-full w-[50rem] h-auto rounded-b-lg shadow-[0_2.75rem_3.5rem_-2rem_rgb(45_55_75_/_20%),_0_0_5rem_-2rem_rgb(45_55_75_/_15%)] dark:shadow-[0_2.75rem_3.5rem_-2rem_rgb(0_0_0_/_20%),_0_0_5rem_-2rem_rgb(0_0_0_/_15%)]">
                <div className="relative flex items-center max-w-[50rem] bg-white border-b border-gray-100 rounded-t-lg py-2 px-24 dark:bg-gray-800 dark:border-gray-700">
                  <div className="flex space-x-1 absolute top-2/4 left-4 -translate-y-1">
                    <span className="w-2 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></span>
                    <span className="w-2 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></span>
                    <span className="w-2 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></span>
                  </div>
                  <div className="flex justify-center items-center w-full h-full bg-gray-200 text-[.25rem] text-gray-800 rounded-sm sm:text-[.5rem] dark:bg-gray-700 dark:text-gray-200">
                    mangashow.armani.dev
                  </div>
                </div>

                <div className="bg-gray-800 rounded-b-lg">
                  <Image
                    src={mangashowDesktop}
                    alt="MangaShow Desktop"
                    className="max-w-full h-auto rounded-b-lg"
                  />
                </div>
              </figure>
            </div>
          </div>

          <div
            id="tabs-with-card-2"
            className="hidden"
            role="tabpanel"
            aria-labelledby="tabs-with-card-item-2"
          >
            <div className="max-w-[1140px] lg:pb-32 relative">
              <figure className="hidden absolute bottom-0 left-0 z-[2] max-w-full w-60 h-auto mb-20 ml-20 lg:block">
                <div className="p-1.5 bg-gray-700 rounded-3xl shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(0_0_0_/_20%),_0_2rem_4rem_-2rem_rgb(0_0_0_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(0_0_0_/_20%)]">
                  <Image
                    src={badlyexplainedMobile}
                    alt="Badly Explained Mobile"
                    className="max-w-full h-auto rounded-[1.25rem]"
                  />
                </div>
              </figure>

              <figure className="ml-auto mr-20 relative z-[1] max-w-full w-[50rem] h-auto rounded-b-lg shadow-shadow-[0_2.75rem_3.5rem_-2rem_rgb(0_0_0_/_20%),_0_0_5rem_-2rem_rgb(0_0_0_/_15%)]">
                <div className="relative flex items-center max-w-[50rem] bg-gray-800 border-b border-gray-700 rounded-t-lg py-2 px-24">
                  <div className="flex space-x-1 absolute top-2/4 left-4 -translate-y-1">
                    <span className="w-2 h-2 bg-gray-700 rounded-full"></span>
                    <span className="w-2 h-2 bg-gray-700 rounded-full"></span>
                    <span className="w-2 h-2 bg-gray-700 rounded-full"></span>
                  </div>
                  <div className="flex justify-center items-center w-full h-full bg-gray-700 text-[.25rem] text-gray-200 rounded-sm sm:text-[.5rem]">
                    badlyexplained.armani.dev
                  </div>
                </div>

                <div className="bg-gray-800 rounded-b-lg">
                  <Image
                    src={badlyexplainedDesktop}
                    alt="Badly Explained Desktop"
                    className="max-w-full h-auto rounded-b-lg"
                  />
                </div>
              </figure>
            </div>
          </div>

          <div
            id="tabs-with-card-3"
            className="hidden"
            role="tabpanel"
            aria-labelledby="tabs-with-card-item-3"
          >
            <div className="max-w-[1140px] lg:pb-32 relative">
              <figure className="hidden absolute bottom-0 left-0 z-[2] max-w-full w-60 h-auto mb-20 ml-20 lg:block">
                <div className="p-1.5 bg-gray-100 rounded-3xl shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(45_55_75_/_20%),_0_2rem_4rem_-2rem_rgb(45_55_75_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(45_55_75_/_20%)] dark:bg-gray-700 dark:shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(0_0_0_/_20%),_0_2rem_4rem_-2rem_rgb(0_0_0_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(0_0_0_/_20%)]">
                  <Image
                    src={badlyexplainedMobile}
                    alt="Badly Explained Mobile"
                    className="max-w-full h-auto rounded-[1.25rem]"
                  />
                </div>
              </figure>

              <figure className="ml-auto mr-20 relative z-[1] max-w-full w-[50rem] h-auto rounded-b-lg shadow-[0_2.75rem_3.5rem_-2rem_rgb(45_55_75_/_20%),_0_0_5rem_-2rem_rgb(45_55_75_/_15%)] dark:shadow-[0_2.75rem_3.5rem_-2rem_rgb(0_0_0_/_20%),_0_0_5rem_-2rem_rgb(0_0_0_/_15%)]">
                <div className="relative flex items-center max-w-[50rem] bg-white border-b border-gray-100 rounded-t-lg py-2 px-24 dark:bg-gray-800 dark:border-gray-700">
                  <div className="flex space-x-1 absolute top-2/4 left-4 -translate-y-1">
                    <span className="w-2 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></span>
                    <span className="w-2 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></span>
                    <span className="w-2 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></span>
                  </div>
                  <div className="flex justify-center items-center w-full h-full bg-gray-200 text-[.25rem] text-gray-800 rounded-sm sm:text-[.5rem] dark:bg-gray-700 dark:text-gray-200">
                    shoplister.armani.dev
                  </div>
                </div>

                <div className="bg-gray-800 rounded-b-lg">
                  <Image
                    src={badlyexplainedDesktop}
                    alt="Badly Explained Desktop"
                    className="max-w-full h-auto rounded-b-lg"
                  />
                </div>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
