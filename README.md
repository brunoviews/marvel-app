# Marvel Gallery App

This project is a Marvel-themed gallery application built with React and Vite. It allows users to browse a list of Marvel characters, search for specific characters, and view their details. The app is styled with responsive design principles to ensure a great user experience on both desktop and mobile devices.

## Features

- **Character Search**: Search for Marvel characters by name.
- **Responsive Design**: Optimized for both desktop and mobile screens.
- **Favorites Counter**: Display a counter for favorite characters.
- **Dynamic Character List**: Fetch and display characters dynamically from an API.
- **Reusable Components**: Modular and reusable React components.

## Technologies Used

- **React**: For building the user interface.
- **Vite**: For fast development and build tooling.
- **CSS**: For styling the application.
- **Mock API**: For fetching character data. I have created my own API for this project.
- **ESLint**: For maintaining code quality.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/marvel-gallery-app.git
   cd marvel-gallery-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open the app in your browser at `http://localhost:5173`.

## Project Structure

```
marvel-app/
├── public/               # Static assets
├── src/                  # Source code
│   ├── assets/           # Static assets like images or mock data
│   ├── components/       # Reusable React components
│   ├── icons/            # SVG icons used in the app
│   ├── pages/            # Page components
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   └── App.css           # Global styles
├── .gitignore            # Git ignore file
├── index.html            # HTML template
├── package.json          # Project metadata and dependencies
├── vite.config.js        # Vite configuration
└── README.md             # Project documentation
```

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the app for production.
- `npm run preview`: Preview the production build.
- `npm run lint`: Run ESLint to check for code issues.

## API

The app fetches character data from a mock API:
```
https://68012ab881c7e9fbcc41be05.mockapi.io/api/v1/characters
```

## Customization

- **Styling**: Modify the CSS files in the `src` directory to customize the look and feel of the app.
- **Icons**: Replace or add new SVG icons in the `src/icons` directory.
- **Mock Data**: Update the `fakeCharacters.js` file in the `src/assets` directory for testing purposes.

## Contributing

Contributions are welcome! If you have suggestions or improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Acknowledgments

- [Marvel API](https://developer.marvel.com/) for inspiration.
- [Vite](https://vitejs.dev/) for the development environment.
- [Fontsource](https://fontsource.org/) for the Roboto Condensed font.

Enjoy building with the Marvel Gallery App!
