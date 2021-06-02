import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }
  html, body {
    max-height: 100vh;
    max-width: 100vw;

    width: 100%;
    height: 100%;
  }

  body, button, input, textarea, select {
    border: 0;
    background: none;
    font: 400 1rem  "Roboto", sans-serif;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  body {
    background: var(--primary);
    color: var(--white)
  }
  :root {
    --primary: #000;
    --secondary: #15181C;

    --white: #ffff;

    --gray-100: #D9D9D9;
    --gray-500: #7A7A7A;
    --gray-700: #2F3336;
    --gray-800: #202327;

    --green-500: #00C06B;

    --red-500: #E8265E;

    --twitter: #33A1F2;
    --twitter-dark-hover: #011017;
    --twitter-light-hover: #2C8ED6;
  }
`;
