import { createGlobalStyle } from "styled-components";
import { text, background } from "./theme/colors";

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }

    html,
    body,
    body > div:first-child,
    div#__next {
        height: 100%;
    }

    :root {
        font-size: 16px;
        font-family: Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
        color: ${text};
        @media (max-width: 1400px) {
            font-size: 16px;
        }
        @media (max-width: 1200px) {
           font-size: 16px;
        }
        @media (max-width: 992px) {
           font-size: 16px;
        }
        @media (max-width: 768px) {
            font-size: 17px;
        }
        @media (max-width: 576px) {
            font-size: 18px;
        }
    }

    body {
        background: ${background};
    }
`;

export default GlobalStyle;
