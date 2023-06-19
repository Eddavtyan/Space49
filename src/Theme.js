import {ThemeProvider} from "@emotion/react";

const defaultTheme = {
  colors: {
    white: "#FFFFFF",
    green: "#499f2d",
    lightGreen: "#08A202",
    pink: "#38246f",
    darkPink: "#000038",
    majento: "#aa96b2",
    black: "#1E201F",
    grey: "#F6F6F6",
    lightGrey: "#f7f7f7",
  },
  shadow: {
    item: "box-shadow: -12px -10px 20px -3px rgba(0,0,0,0.2)",
    item2: "box-shadow: 0px 0px 11px 0px rgba(0,0,0,0.2)",
    text: "text-shadow: -1px -1px 10px rgba(0, 0, 0, 0.2)",
  },
};

export const Theme = ({children}) => <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
