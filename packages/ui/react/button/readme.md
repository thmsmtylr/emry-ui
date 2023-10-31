<div align="center">
  <img style="width:96px; height:96px;" width="96" alt="Logo" src="https://github.com/thmsmtylr/emry-ui/blob/main/194703186-1603a72a-b997-4923-9953-da97270eac58-min%202.png?raw=true">
</div>

<div align="center">
  <h1>Emry UI - React Button</h1>
  <p><b>Supercharge your frontend development</b></p>
</div>

### Installation

A highly configurable React button component. Includes stunning default styles or style it to suit your own design system.

```sh
$ yarn add @emryui/react-button
# or
$ npm install @emryui/react-button
```

### Usage

Import the Button component and use it in your React application

```
import { Button } from "@emryui/react-button";

// Example usage:
<Button size="md" variant="primary" onClick={handleClick}>
  Click me
</Button>
```

### Props

| Prop             | Type                        | Options                                                                                       |
| ---------------- | --------------------------- | --------------------------------------------------------------------------------------------- |
| size             | ButtonSize                  | `sm`, `md`, `lg`, `xl`, `2xl`                                                                 |
| children         | ReactNode                   | N/A                                                                                           |
| disabled         | boolean                     | `true`, `false`                                                                               |
| type             | string                      | `submit`, `reset`, `button`                                                                   |
| variant          | ButtonVariant               | `primary`, `secondary`, `secondary color`, `tertiary`, `tertiary color`, `link`, `link color` |
| addClassNames    | string                      | N/A                                                                                           |
| removeClassNames | string                      | N/A                                                                                           |
| className        | string                      | N/A                                                                                           |
| transition       | ButtonTransitionSpeed       | `fast`, `subtle`,` slow`, `none`                                                              |
| destructive      | boolean                     | `true`, `false`                                                                               |
| dot              | boolean                     | `true`, `false`                                                                               |
| as               | keyof JSX.IntrinsicElements | N/A                                                                                           |
| headless         | boolean                     | `true`, `false`                                                                               |
| icon             | boolean                     | `true`, `false`                                                                               |
