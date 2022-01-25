// import createGlobalStyle and Normalize.css
import { createGlobalStyle } from 'styled-components';
import normalize from 'normalize.css';

export default createGlobalStyle`
    ${normalize}

    *, *:before, *:after {
        box-sizing: border-box
    }

    body {
        height: 100%;
        margin: 0;
        padding: 1rem;
        line-heigth: 1.4;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
          'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
          sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      a:visted,
      a:link {
        color: #0077cc;
      }

      a:focus,
      a:hover {
          color: #004499;
      }
      
      code, pre {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
          monospace;
        max-width: 100%;
      }
      
`;