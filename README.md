# use-device-react

> use-device-react is a custom hook that can be used to recognize the device viewport (mobile, desktop or tablet) based on device inner width and custom breakpoint input. The content also updates on screen resize.

[![NPM](https://img.shields.io/npm/v/use-device-react.svg)](https://www.npmjs.com/package/use-device-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

wiht npm

```bash
npm install use-device-react
```

or yarn

```bash
yarn add use-device-react
```

## Usage

Example of usage

```jsx
import { useDevice } from "use-device-react";

const Component = () => {
  const { isMobile, isDesktop, isTablet } = useDevice();

  return (<div>
    {isMobile && ...}
    {isTablet && ...}
    {isDesktop && ...}
  </div>);
};
```

## Breakpoint

You can pass a object of breakpoints to the hook as an input.
Follow the example bellow:

```jsx
import { useDevice } from "use-device-react";

const Component = () => {
  const breakpoints = {
    tablet: 650,
    desktop: 1150,
  };

  const { isMobile, isDesktop, isTablet } = useDevice(breakpoints);

  return <div>...</div>;
};
```

In the example above, useDevice will return **isMobile** as true if the device viewport is less than **650**. If the device viewport is more or equal to **650** and less than **1150** it will return **isTablet** as true. If the device viewport is more or equal to **1150** it will return **isDesktop** as true.

The default values are:

```bash
  {
    tablet: 700,
    desktop: 1200
  }
```

## License

MIT © [theomoura](https://github.com/theomoura)
