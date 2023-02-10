//импорт из модулей
import React from 'react';
import ReactDOM from 'react-dom/client';
import {createTheme, ThemeProvider} from "@mui/material";
import store from "./redux/store";

//импорт компонентов
import App from './App';

//импорт стилей
import './index.css'
import './reset.css'
import {Provider} from "react-redux";

const THEME = createTheme({
    palette: {
        primary: {
            light: "#FC4D4D",
            main: "#FC4D4D"
        },
        secondary: {
            main: "#FC4D4D"
        }
    },
    components: {
        MuiCssBaseline: {
            styleOverrides:
                `@font-face{
                    font-family: 'MontserratBold'
                    src: url('./fonts/Montserrat-Bold.ttf') format('truetype')
                    font-weight: normal,
                 }`,
        },
        MuiOutlinedInput: {
            variants: [
                {
                    props: {color: 'primary'},
                    style: {
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '0.6rem',
                        borderRadius: '5px',
                        height: '30px',
                        padding: '0',
                        backgroundColor: `white`,
                        borderColor: 'red',
                        fontSize: '0.694rem',
                        fontWeight: 700,
                        color: '#484848',
                        "div": {
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: '0.2rem',
                            marginLeft: '-0.1rem',
                        },
                        "&:hover": {
                            border: 'none',
                            outline: 'none',
                        }

                    },
                },

            ],
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '0.5rem',
                    height: '30px',
                    backgroundColor: `white`,
                    fontSize: '0.5rem',
                    color: '#484848',
                    '&:hover': {
                        border: 'none',
                    },
                    "div": {
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: '0.2rem',
                        marginLeft: '-0.2rem',
                    },
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: `white`,
                    borderRadius: '5px',
                    color: 'white',
                    "div": {
                        alignItems: 'center',
                    },
                },
            },
        },
        MuiModal: {
            styleOverrides: {
                root: {
                    "h3": {
                        textAlign: "center",
                    }
                },
            }
        }
    },
    typography: {
        "fontFamily": `MontserratRegular, sans-serif`,
        "fontSize": '0.5rem'
    },

});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <ThemeProvider theme={THEME}>
            <App/>
        </ThemeProvider>
    </Provider>
);