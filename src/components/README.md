# Atomic Design

We’re not designing pages, we’re designing systems of components.

## Examples
https://bradfrost.com/blog/post/atomic-web-design/
https://codeburst.io/atomic-design-with-react-e7aea8152957

## What is atomic design?
Atomic design is methodology for creating design systems. There are five distinct levels in atomic design:

- Atoms
- Molecules
- Organisms
- Templates
- Pages

### Atoms
Atoms are the basic building blocks of matter, and the smallest possible components; such as buttons, titles, inputs or event color pallets, animations, and fonts. They can be applied in any context, globally or within other components and templates, besides having many states, such as this example of a button: disabled, hover, different sizes, etc.

Atoms should not have exterior margins, padding, or absolute positioning.

### Molecules
Things start getting more interesting and tangible when we start combining atoms together. Molecules are groups of atoms bonded together and are the smallest fundamental units of a compound. These molecules take on their own properties and serve as the backbone of our design systems.

### Organisms
Molecules give us some building blocks to work with, and we can now combine them together to form organisms. Organisms are groups of molecules joined together to form a relatively complex, distinct section of an interface.

### Templates
At the template stage, we break our chemistry analogy to get into language that makes more sense to our clients and our final output. Templates consist mostly of groups of organisms stitched together to form pages. It’s here where we start to see the design coming together and start seeing things like layout in action.

### Pages
Pages are specific instances of templates. Here, placeholder content is replaced with real representative content to give an accurate depiction of what a user will ultimately see.

