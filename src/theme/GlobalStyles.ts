import { Theme } from '@mui/material'
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = (theme: Theme) => createGlobalStyle`
        *,
        *:before,
        *:after {
            box-sizing: border-box;
        }
        html {
            overflow-y: scroll;
        }
        html,
        body,
        #__next {
            height: 100%;
        }
        @font-face {
            font-family: 'Gobold';
            src: url('/fonts/goboldreg.otf') format('otf');
            font-style: normal;
            font-weight: 400;
            font-display: swap;
        }
        a {
            color: ${theme.palette.primary.main};
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            margin: 0;
            padding: 0;
            color: ${theme.palette.primary.main};
        }

        body {
            background-color: ${theme.palette.primary.main}
        }
        :root {
            color-scheme: dark;
        }
`