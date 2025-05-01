import React from "react";

function HighlightTextProjectDetail({ text, highlight }) {
  if (!highlight) return <>{text}</>;
  const escapeRegex = (string) =>
    string.replace(/[-\\^$*+?.()|[\]{}]/g, "\\$&");
  const regex = new RegExp(`(${escapeRegex(highlight)})`, "gi");
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <span
            key={i}
            className="px-1.5 rounded pb-0.5 border border-lime-800 bg-lime-100 text-blue-700 dark:border-lime-100 dark:bg-lime-800 dark:text-lime-100 highlighted"
          >
            {part}
          </span>
        ) : (
          part
        )
      )}
    </>
  );
}

export default React.memo(HighlightTextProjectDetail);
