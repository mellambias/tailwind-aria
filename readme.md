# Tailwind CSS ARIA

This plugin adds Pseudo-elements `aria` with Tailwind CSS.

#### What is ARIA?

**A**ccessible **R**ich **I**nternet **A**pplications (ARIA) is a set of [roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles) and [attributes](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes) that define ways to make web content and web applications (especially those developed with JavaScript) more accessible to people with disabilities.

It supplements HTML so that interactions and widgets commonly used in applications can be passed to assistive technologies when there is not otherwise a mechanism. For example, ARIA enables accessible JavaScript widgets, form hints and error messages, live content updates, and more

#### What is this plugin?

This plugin adds to your Tailwindcss [variants](https://v2.tailwindcss.com/docs/hover-focus-and-other-states) the **aria-attibutes**
in CSS pseudo-elements like

```css
//style.css
a[aria-current="page"] {
  background-color: #333;
  color: #fff;
}
```

You can write

```html
//index.html
<a
  class="aria-current-page:bg-[#333] aria-current-page:text-[#fff]"
  aria-current="page"
  href=""
></a>
```

## Installation

Add this plugin to your project:

#### Install using npm
```bash
npm install --save-dev tailwind-aria
```

Then add the plugin to your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require("tailwind-aria"),
    // ...
  ],
};
```

## Usage

There are two big groups of attributes supported:

- Boolean attributes
- Enumerated values.

#### Boolean attributes

Variants for boolean attributes are active when the value is "true"

```html
<div aria-hidden="true" class="aria-hidden:hidden aria-!hidden:block">
  This are display:hidden
</div>
```

When the attribute value is "false"

```html
<div aria-hidden="false" class="aria-hidden:hidden aria-!hidden:block">
  This are display:block
</div>
```

#### Enumerated values

Atrributes for enumerated values are active when the value is equivalent to the variant's suffix.

```html
<div
  class="text-xs
      aria-level-5:text-xl  
      aria-!readonly:aria-level-3:text-7xl"
  aria-level="3"
  aria-readonly="false"
>
  This text is in 7xl
</div>
```

## ARIA attribute types

There are 4 categories of ARIA states and properties. This plugin
provides attributes for:

#### Widget attributes

| Attribute       | Values                                  |
| --------------- | --------------------------------------- |
| autocomplete    | inline, list, both                      |
| checked         | true, false, mixed                      |
| disabled        | true, false                             |
| errormessage    | true                                    |
| expanded        | true, false                             |
| haspopup        | menu, listbox, tree, grid, dialog, true |
| hidden          | true, false                             |
| invalid         | true, false, grammar, spelling          |
| level           | 1, 2, 3, 4, 5, 6, 7, 8, 9, 10           |
| multiline       | true, false                             |
| multiselectable | true, false                             |
| orientation     | horizontal, vertical                    |
| pressed         | true, false, mixed                      |
| readonly        | true, false                             |
| required        | true, false                             |
| selected        | true, false                             |
| sort            | none, ascending, descending, other      |

#### Live region attributes

| Attribute | Values                                         |
| --------- | ---------------------------------------------- |
| busy      | true, false                                    |
| live      | off, assertive, polite                         |
| relevant  | additions-text, additions, all, removals, text |
| atomic    | true, false,                                   |

#### Drag-and-Drop attributes

| Attribute  | Values                                 |
| ---------- | -------------------------------------- |
| dropeffect | none, copy, execute, link, move, popup |
| grabbed    | true, false                            |

#### Global ARIA attributes

| Attribute | Values                                        |
| --------- | --------------------------------------------- |
| current   | true, false, page, step, location, date, time |

##### Boolean attributes

The class **.aria-{attribute}** are pseudo-class **[aria-{attibute}="true"]**
The class **.aria-!{attribute}** are pseudo-class **[aria-{attibute}="false"]**

```html
<div class="aria-busy">[aria-busy="true"]</div>
<div class="aria-!busy">[aria-busy="false"]</div>
```

##### Enumerate attibutes

The class **.aria-{attribute}-{value}** are pseudo-class **[aria-{attibute}="{value}"]**

```html
<div class="aria-current-page">[aria-current="page"]</div>
<div class="aria-current-location">[aria-current="location"]</div>
```

### Customizing your variants

By default, this plugin provides before variants. You change, add, or remove these by editing the **theme.aria** section of your `Tailwind config`.

```js
// tailwind.config.js
{
  theme: {
      aria: {
        level: [1, 2, 3, 4, 5, 6],
      },
  plugins: [
    require('tailwind-aria'),
  ],
}
```

### More information

- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes
