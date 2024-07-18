<!-- Project Name -->
<h1>Alert Components App</h1>
<p>A React application providing customizable alert components with various types and icons.</p>

<!-- Table of Contents -->
## Table of Contents
- [About](#about)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Usage](#usage)
- [ESLint Configuration](#eslint-configuration)
- [LinkedIn](#linkedIn)





<!-- About Section -->
## About
<p>
  This project is a React application built using TypeScript and Vite. It includes a collection of customizable alert components with different types and icons, designed to enhance user notifications and feedback.
</p>

<!-- Features Section -->
## Features
<ol>
  <li>Customizable alert components.</li>
  <li>Support for various alert types (success, error, warning, info).</li>
  <li>Icons to visually distinguish different alert types.</li>
  <li>Easy integration and usage in React projects.</li>
</ol>

<!-- Technologies Used Section -->
## Technologies Used
- **Programming Languages:** TypeScript, JavaScript
- **Frontend Framework:** React
- **Build Tool:** Vite
- **Other Tools:** VS Code

<!-- Setup Section -->
## Setup
1. **Clone the repository:**
    ```sh
    git clone https://github.com/yourusername/alert-components-app.git
    cd alert-components-app
    ```
2. **Install dependencies:**
    ```sh
    npm install
    ```
3. **Run the development server:**
    ```sh
    npm run dev
    ```

<!-- Usage Section -->
## Usage
1. **Import the alert component:**
    ```typescript
    import { Alert } from './components/Alert';
    ```
2. **Use the alert component in your application:**
    ```typescript
    <Alert type="success" message="This is a success alert!" />
    <Alert type="error" message="This is an error alert!" />
    <Alert type="warning" message="This is a warning alert!" />
    <Alert type="info" message="This is an info alert!" />
    ```

<!-- ESLint Configuration Section -->
## ESLint Configuration
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

### Plugins
- `@vitejs/plugin-react` uses Babel for Fast Refresh.
- `@vitejs/plugin-react-swc` uses SWC for Fast Refresh.

### Expanding the ESLint configuration
If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

Configure the top-level `parserOptions` property like this:
```json
{
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "project": ["./tsconfig.json", "./tsconfig.node.json"],
    "tsconfigRootDir": "__dirname"
  }
}


```
<!-- LinkedIn Section -->
## LinkedIn
<!-- LinkedIn Profile Button -->
<p>
  <a href="https://www.linkedin.com/in/mohamed-mos-aad/">
    <img src="https://img.shields.io/badge/LinkedIn-Profile-blue?style=for-the-badge&logo=linkedin" alt="LinkedIn Profile">
  </a>
</p>

