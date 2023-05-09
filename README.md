# Frontend-Relay

This repository contains the frontend codebase for an application built with Relay, React and Vite. The application uses the Relay framework to manage data fetching and state management, and Vite as the development server and build tool.

You can access it online in [here](https://react-relay-bookstore.vercel.app/)

## Getting Started

To get started with the project, you need to have Node.js and npm installed on your machine. Once you have those installed, you can clone the repository and install the required dependencies by running:

```
$ yarn
```

You can then start the development server by running:

```
$ yarn dev
```

This will start the server at the port 5173 by default.

## Testing

To run the tests, you can use the following command:

```
$ yarn test
```

This will run the tests using Vitest. You can also generate a coverage report using:

To build the application for production, you can use the following command:

```
$ yarn build
```

This will run the Relay compiler to validate the GraphQL schema, run TypeScript to check type errors, and then build the application using Vite.

## Storybook

The application uses Storybook for component development and documentation. You can start the Storybook server by running:

```
$ yarn storybook
```

You can then view the components in your browser at http://localhost:6006/.

## Dependencies

The project uses several dependencies, including:

- React and React-DOM for building the user interface
- Relay and Relay-Runtime for managing data fetching and state management
- Vite for development server and build tool
- Chakra-UI for building accessible and customizable UI components
- Zod for data validation

For a complete list of dependencies and devDependencies, please see the package.json file.

## License

This project is licensed under the MIT License.
