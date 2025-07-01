# Oso Olubunmi2 UI Garden – Component Library

This is a React + Storybook-based UI component library. It includes styled, tested, and documented components such as Button, Text, Label, Table, Dropdown, Image, and Card.

---

## 🚀 Getting Started

These instructions will help you run the app on `localhost:8083` using Docker, or locally with npm.

### ✅ Prerequisites

- [Node.js](https://nodejs.org/) and npm installed (for local development)
- [Docker](https://www.docker.com/) installed (for containerized development)

---

## 📦 Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

### `npm run storybook`

Runs Storybook for component development and documentation.  
Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

---

## 🐳 Docker Usage

### 🔧 Build the Docker image

```bash
docker build -t oso_olubunmi2_coding_assignment12 .
```

### ▶️ Run the Docker container

```bash
docker run -p 8083:3000 oso_olubunmi2_coding_assignment12
```

Then open [http://localhost:8083](http://localhost:8083) in your browser.

---

## 📚 Learn More

- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React documentation](https://reactjs.org/)
- [Storybook documentation](https://storybook.js.org/docs/react/get-started/introduction)

---

## ✨ Components

- **Button** – Customizable button with color, label, and disabled state.
- **Text** – Typography component with size options.
- **Label** – For form labeling.
- **Table** – Simple table with headers and rows.
- **Dropdown** – Select menu with options and disabled state.
- **Image** – Responsive image component.
- **Card** – Content container with title and body.

---

## 🧪 Testing

All components are unit tested using [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).

Run tests with:

```bash
npm test
```

---

## 📝 License

MIT