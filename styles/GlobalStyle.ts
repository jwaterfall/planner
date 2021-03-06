import { createGlobalStyle } from 'styled-components';

import { background, text } from './theme/colors';

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
        font-family: 'Poppins', sans-serif;
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

    .ReactCollapse--collapse {
        transition: height 150ms;
    }

    .my-masonry-grid {
        padding: 1rem;
        display: flex;
        margin-left: -1rem; /* gutter size offset */
        width: auto;
    }

    .my-masonry-grid_column {
        padding-left: 1rem; /* gutter size */
        background-clip: padding-box;
    }

    /* Style your items */
        .my-masonry-grid_column > div {
        margin-bottom: 1rem;
    }
`;

export default GlobalStyle;
