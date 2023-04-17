import { useState } from "react";
import { usePopper } from "react-popper";

export default function ItemWithTooltip({ message, children, link }) {
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [{ name: "arrow", options: { element: arrowElement } }],
  });

  return (
    <>
      <a
        type="button"
        href={link}
        ref={setReferenceElement}
        onMouseEnter={() => popperElement.setAttribute("data-show", true)}
        onMouseLeave={() => popperElement.removeAttribute("data-show")}
        className={`w-8 h-8 inline-flex justify-center items-center gap-2 rounded-full bg-gray-50 border border-gray-200 text-gray-600 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-white/[.05] dark:hover:border-white/[.1] dark:hover:text-white ${
          !link ? "cursor-default" : ""
        }`}
      >
        {children}
      </a>

      <div
        ref={setPopperElement}
        style={styles.popper}
        {...attributes.popper}
        className="data-[show=true]:opacity-100 data-[show=true]:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700"
      >
        {message}
        <div ref={setArrowElement} style={styles.arrow} />
      </div>
    </>
  );
}
