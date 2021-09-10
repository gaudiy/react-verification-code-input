# react-verification-code-input

> A verification code input

fork from [suweya/react-verification-code-input](https://github.com/suweya/react-verification-code-input)

- Styles for each element are deleted.
- You cant style as you like with className & fieldClassName.
- No Title or Loading.

## Live demo

- [@gaudiy/react-verification-code-input](https://gaudiy.github.io/react-verification-code-input/)

## Install

```bash
npm install --save @gaudiy/react-verification-code-input
```

## Usage

```jsx
import React, { Component } from 'react';

import ReactCodeInput from '@gaudiy/react-verification-code-input';

class Example extends Component {
  render() {
    return <ReactCodeInput />;
  }
}
```

## PropTypes

|      Key       |  Type  |              Desc               |
| :------------: | :----: | :-----------------------------: |
|      type      |  text  |      one of number or text      |
|     fields     | number |     The count of characters     |
|    onChange    |  func  |   Trigger on character change   |
|   onComplete   |  func  | Trigger on all character inputs |
|   fieldWidth   | number |           input width           |
|  fieldHeight   | number |          input height           |
|   autoFocus    |  bool  | auto focus first input on init  |
|   className    | string |           class name            |
| fieldClassName | string |    class name for each field    |
|     values     | array  |         default values          |
|  placeholder   | array  |        input placeholder        |

## License

MIT © [suweya](https://github.com/suweya)
