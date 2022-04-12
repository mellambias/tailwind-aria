const plugin = require("tailwindcss/plugin");
const trueFalse = ["false", "true"];
//Widget attributes
const widgets = {
  autocomplete: ["inline", "list", "both"],
  checked: [...trueFalse, "mixed"],
  disabled: trueFalse,
  errormessage: ["true"],
  expanded: trueFalse,
  haspopup: ["menu", "listbox", "tree", "grid", "dialog", "true"],
  hidden: trueFalse,
  invalid: [...trueFalse, "grammar", "spelling"],
  level: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  multiline: trueFalse,
  multiselectable: trueFalse,
  orientation: ["horizontal", "vertical"],
  pressed: [...trueFalse, "mixed"],
  readonly: trueFalse,
  required: trueFalse,
  selected: trueFalse,
  sort: ["none", "ascending", "descending", "other"],
};
//Live region attributes
const liveRegion = {
  busy: trueFalse,
  live: ["off", "assertive", "polite"],
  relevant: ["additions-text", "additions", "all", "removals", "text"],
  atomic: trueFalse,
};
//Drag-and-Drop attributes
const dragDrop = {
  dropeffect: ["none", "copy", "execute", "link", "move", "popup"],
  grabbed: trueFalse,
};
//Global ARIA attributes
const globals = {
  current: [...trueFalse, "page", "step", "location", "date", "time"],
};

module.exports = plugin(function ({ addVariant, e, theme }) {
  const aria = {
    ...widgets,
    ...liveRegion,
    ...dragDrop,
    ...globals,
    ...theme("aria"),
  };

  for (const key in aria) {
    if (aria[key] instanceof Function) {
      continue;
    } else
      aria[key].forEach((element) => {
        let selector = `aria-${key}-${element}`;
        if (element == "true") {
          selector = `aria-${key}`;
        } else if (element == "false") {
          selector = `aria-!${key}`;
        }
        addVariant(selector, ({ modifySelectors, separator }) =>
          modifySelectors(
            ({ className }) =>
              `[aria-${key}="${element}"].${e(
                `${selector}${separator}${className}`
              )}`
          )
        );
      });
  }
});
//https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes
//https://www.aditus.io/aria/aria-current/
