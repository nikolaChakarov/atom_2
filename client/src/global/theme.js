import { createTheme } from "@mui/material";

const theme = createTheme({
    typography: {
        fontFamily: ["Montserrat", "sans-serif"].join(","),
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: "#567091",
                    "&:hover": {
                        backgroundColor: "rgba(86, 112, 145, 0.8)",
                    },
                },
            },
        },
    },
});

export default theme;
