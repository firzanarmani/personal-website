export default function ItemWithTooltip({ message, children, link }) {
  return (
    <a href={link} className="hs-tooltip inline-block">
      <div className="hs-tooltip-toggle w-8 h-8 inline-flex justify-center items-center gap-2 rounded-full bg-gray-50 border border-gray-200 text-gray-600 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-white/[.05] dark:hover:border-white/[.1] dark:hover:text-white">
        {children}
        <span
          className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700"
          role="tooltip"
        >
          {message}
        </span>
      </div>
    </a>
  );
}
