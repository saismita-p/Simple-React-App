# Simple React App 🎈

# Parcel

- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consisting Hashing
- Code Splitting
- Differential Bundling - Support for old browsers
- Error Handling - Better Diagnostics
- HTTPs can use for Development too
- Tree Shaking

# JSX

- Creates Readable React Elements
- Sanitises and takes care of CSS attacks

# Babel

-

- Config driven UI

Two types of Export/Import

- Default Export/Import

export default Component;
import Component from "path";

- Named Export/Import

export const Component;
import {Component} from "path";

# React Hooks

(Normal JS utility functions)

- useState() - Hooks can only be called inside of the body of a function component. else Invalid hook call error. Local state variable and - Never create useState variables inside if-else,for-loop or inside functions it will create inconsistencies.
  create at the top of the components creation

- useEffect() - useEffcet, takes two args: i> callback function ii> dependency array, - the callback func is mandatory. - if no dependency array => useEffect is called on every render - if empty [] dependency array => useEffect is called on initial render(just once). - if NOT empty[x, y] => useEffect is called when the dependency(x/y) is updated -

# React Components

React components are regular JavaScript functions, but their names must start with a capital letter or they won’t work!

# shortcuts

VS code rafce creates components automatically based on file name

# Routing in webapps - 2 types:

- Server Side Routing - when we make a network call and fetches the html from server
- Client Side Routing - It just loads the component and there is no network call to server

# problem lies in the fact that you are calling your state setter immediately inside the function component body, which forces React to re-invoke your function again, with the same props, which ends up calling the state setter again, which triggers React to call your function again.... and so on.
