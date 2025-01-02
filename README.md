# Unexpected behavior of @apply directive in Tailwind CSS

This repository contains a bug report and solution for an issue encountered when using the `@apply` directive in Tailwind CSS. The bug involves unexpected behavior when applying certain CSS properties, leading to unexpected styling.

## Bug Description

The `@apply` directive in Tailwind CSS is designed to apply pre-defined Tailwind classes to elements. However, in this case, applying the `text-red-500` class using `@apply` does not produce the expected result.  The text color does not turn red.  This might be due to CSS specificity or unexpected interactions with other styles.

## Bug Solution

The solution involves ensuring that the `@apply` directive is used correctly and that there are no conflicting styles that override the applied classes.  A more specific selector or a more robust styling solution may be necessary.

## Setup

1. Clone this repository.
2. Install Node.js and npm.
3. Install Tailwind CSS according to their official documentation.
4. Run the project and observe the unexpected behavior in `bug.js`.
5. Review the solution in `bugSolution.js`.
