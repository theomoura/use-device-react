# use-device-react

> use-device-react is a custom hook that can be used to recognize the device viewport (mobile or desktop) based on custom input. The content also updates on screen resize.

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
  const { mobile, desktop } = useDevice();

  return <div>...</div>;
};
```

## Breakpoint

You can pass a breakpoint as a parameter. If the innerwidth of the window is minor or equal to the breakpoint, it will be considered a mobile.

```jsx
import { useDevice } from "use-device-react";

const Component = () => {
  const { mobile, desktop } = useDevice(700);

  return <div>...</div>;
};
```

## License

MIT © [theomoura](https://github.com/theomoura)
