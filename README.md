# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

## useFetch is a custom React hook used to handle API requests and fetch data. It is responsible for calling the provided API link and returning the fetched values such as data and loading state.

## The Product List component provides the API URL. The useCallback hook is used to call the API function efficiently and prevent unnecessary re-rendering of the component.

## The useFetch hook returns the value of the data received from the provided API link.

## The useEffect hook is used to display the fetched data correctly. It ensures that the data is shown properly when the component is rendered or when the dependency changes.

## The map() method is used to display the product data inside divs and other elements. Each item uses a unique reference such as {item.id} as a key. This helps React identify each product and display it correctly.

## this is the link of over assigment   https://heroic-halva-70fa93.netlify.app/