# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Project Components

This project includes the following components:

- **Board**: The main component that renders the game board and handles the game logic.
- **Square**: A functional component that represents each square on the game board.
- **Game**: The top-level component that manages the state of the game and renders the Board component.
- **Status**: A component that displays the current status of the game (e.g., which player's turn it is, or if there's a winner).

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/react-tictack.git
   ```
2. Install the dependencies:
   ```sh
   cd react-tictack
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```

## Available Scripts

In the project directory, you can run:

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm run lint`: Runs ESLint to check for linting errors.

## Learn More

To learn more about React and Vite, check out the following resources:

- [React documentation](https://reactjs.org/)
- [Vite documentation](https://vitejs.dev/)

## Author

This project was created by Dohhyun Oh.
