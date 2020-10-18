# use-device-react

> use-device-react is a custom hook that can be used to recognize the device viewport based on custom input. The content also updates on screen resize.

[![NPM](https://img.shields.io/npm/v/use-device-react.svg)](https://www.npmjs.com/package/use-device-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-device-react
```

## Usage

```jsx
import React, { Component } from 'react'

import { useMyHook } from 'use-device-react'

const Example = () => {
  const example = useMyHook()
  return (
    <div>{example}</div>
  )
}
```

## License

MIT © [theomoura](https://github.com/theomoura)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
