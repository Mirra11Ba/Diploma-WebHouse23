import {createTheme} from "@mui/material";


export const house23Theme = createTheme({

    palette: {
        primary:{
            // neptuneBlue
            main: "#18A0FB",
        },
        custom:{
            neptuneBlue75: "rgba(24, 160, 251, 0.75)",
            neptuneBlue50: "rgba(24, 160, 251, 0.5)",
            neptuneBlue25: "rgba(24, 160, 251, 0.5)",
            darkSpace: "#1B1C37",
            darkSpace75: "rgba(27, 28, 55, 0.75)",
            darkSpace50: "rgba(27, 28, 55, 0.5)",
            darkSpace25: "rgba(27, 28, 55, 0.25)",
            white: "#FFFFFF",
            black: "#000000",
        },
        tonalOffset: 0.09,
        // contrastThreshold: 1,
    },

    // typography: {
    //     fontFamily: [
    //         "Montserrat",
    //         "Oswald",
    //         "Roboto",
    //     ].join(","),
    // },

    // breakpoints: {
    //     values: {
    //         xs: 0,
    //         sm: 600,
    //         md: 900,
    //         lg: 1250,
    //         xl: 1536,
    //     },
    // },
});


