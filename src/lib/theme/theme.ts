import { createTheme } from "@mui/material/styles"

interface CustomPalletes {
    black: React.CSSProperties['color']
    white: React.CSSProperties['color']
    primary: React.CSSProperties['color']
    coin: React.CSSProperties['color']
    touchbtn: React.CSSProperties['color']
    screen: React.CSSProperties['color']
    lightGrey: React.CSSProperties['color']
    middleGrey: React.CSSProperties['color']
    darkGreen: React.CSSProperties['color']
    backgroundDark: React.CSSProperties['color']
    backgroundLight: React.CSSProperties['color']
}

declare module '@mui/material'{
    interface PaletteOptions extends CustomPalletes {}

    interface Palette extends CustomPalletes {}
    
    interface BreakpointOverrides {
        xxl: true
    }

    interface Theme {
        radius: {
            sm: React.CSSProperties['width']
            md: React.CSSProperties['width']
            lg: React.CSSProperties['width']
        }
    }
    interface ThemeOptions {
        radius: {
            sm: React.CSSProperties['width']
            md: React.CSSProperties['width']
            lg: React.CSSProperties['width']
        }
    }
}

const spacing = {
    0: 0,
    1: 0.25,
    2: 0.5,
    3: 0.75,
    4: 1,
    5: 1.25,
    6: 1.5,
    7: 1.75,
    8: 2,
    9: 2.5,
    10: 3,
    11: 4,
    12: 5, 
    13: 6,
}

const theme = createTheme({
    spacing: (factor: number) => `${spacing[factor as keyof typeof spacing]}rem`,
    radius: {
        sm: '0.5rem',
        md: '1.5rem',
        lg: '2.5rem',
    },
    typography: {
        fontFamily: 'Montserrat, sans-serif',
        h1: {fontSize: '4rem', lineHeight: 1.1, fontWeight: 700, color: 'white'},
        h3: {fontSize: '2rem', lineHeight: 1.1, fontWeight: 600, color: 'black'},
        h4: {fontSize: '1.25rem', lineHeight: 1.1, fontWeight: 300, color: 'white'},
    },
    palette: {
        primary: {
            main: '#646464',
        },
        black: '#000000',
        error: {
            main: '#c44539'
        },
        white: '#FFF',
        coin: '#D4A200',
        touchbtn: "#666666",
        screen: "#F3E6E8",
        lightGrey: '#808080',
        middleGrey: '#383838',
        darkGreen: '#142D28',
        backgroundDark:'#7E7E82',
        backgroundLight: '#E7EFF9',
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 780,
            lg: 1200,
            xl: 1536,
            xxl: 1920,
        }
    }

})

export default theme