<div align="center">
  <img style="width:96px; height:96px;" width="96" alt="Logo" src="https://user-images.githubusercontent.com/5527769/194703186-1603a72a-b997-4923-9953-da97270eac58.png">
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

| Prop               | Options                                                                                                      | Description                                                                                                                                       |
| ------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `size`             | `sm`, `md`, `lg`, `xl`, `2xl`                                                                                | One of "sm", "md", "lg", "xl", "2xl" to control the button size.                                                                                  |
| `children`         | N/A                                                                                                          | ReactNode representing the content inside the button.                                                                                             |
| `disabled`         | `true`, `false`                                                                                              | Boolean to disable the button.                                                                                                                    |
| `type`             | `submit`, `reset`, `button`                                                                                  | One of "submit", "reset", "button" to specify the button's type.                                                                                  |
| `variant`          | `primary`, `secondary gray`, `secondary color`, `tertiary gray`, `tertiary color`, `link gray`, `link color` | One of "primary", "secondary gray", "secondary color", "tertiary gray", "tertiary color", "link gray", "link color" to define the button's style. |
| `addClassNames`    | N/A                                                                                                          | Additional CSS class names to add to the button.                                                                                                  |
| `removeClassNames` | N/A                                                                                                          | CSS class names to remove from the button.                                                                                                        |
| `className`        | N/A                                                                                                          | Custom CSS class for the button.                                                                                                                  |
| `transition`       | `fast`, `subtle`, `slow`, `none`                                                                             | One of "fast", "subtle", "slow", "none" to control button transition speed.                                                                       |
| `destructive`      | `true`, `false`                                                                                              | Boolean to indicate a destructive action.                                                                                                         |
| `dot`              | `true`, `false`                                                                                              | Boolean to show a dot indicator.                                                                                                                  |
| `as`               | N/A                                                                                                          | JSX intrinsic element for button rendering.                                                                                                       |
| `headless`         | `true`, `false`                                                                                              | Boolean for headless rendering.                                                                                                                   |
| `icon`             | `true`, `false`                                                                                              | Boolean to indicate the presence of an icon.                                                                                                      |
