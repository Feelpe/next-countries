import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    highlight: "#FFBA08",
    dark: {
      "black": "#000000",
      "text": "#47585B",
      "info": "#999999",
    },
    light: {
      "white": "#FFFFFF",
      "text": "#F5F8FA",
      "info": "#DADADA",
    }
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
    card: {
      heading: `'Barlow', sans-serif`,
      body: `'Barlow', sans-serif`,
    }
  },
  styles: {
    global: {
      body: {
        bg: 'light.white',
        color: 'dark.text'
      },
      span: {
        bg: 'highlight',
        color: 'highlight',
      }
    }
  }
})