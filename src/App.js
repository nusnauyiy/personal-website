import "./App.css";
import Background from "./Background";
import Header from "./Header";
import { useEffect, useRef } from "react";
import Body from "./Body";
import { SUNSET_COLOR, SUNSET_COLOR_STRING } from "./const/style";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { motion } from "framer-motion";

const theme = createTheme({
  typography: {
    fontFamily: ["Handlee", "cursive"].join(","),
    fontSize: 20,
    color: SUNSET_COLOR_STRING.defaultText,
    h1: {
      fontFamily: ["Lobster", "cursive"].join(","),
      color: "white",
      textShadow: "0px 15px 20px #535",
    },
    h3: {
      fontFamily: ["Lobster", "cursive"].join(","),
    },
  },
  palette: {
    primary: {
      main: SUNSET_COLOR_STRING.midtone
    }
  }
});

function App() {
  useEffect(() => {
    const threeScript = document.createElement("script");
    threeScript.setAttribute("id", "threeScript");
    threeScript.setAttribute(
      "src",
      "https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
    );
    document.getElementsByTagName("head")[0].appendChild(threeScript);
    return () => {
      if (threeScript) {
        threeScript.remove();
      }
    };
  }, []);

  const bodyRef = useRef();

  function handleBackClick() {
    bodyRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Background color={SUNSET_COLOR}>
          <Header>
            <motion.div
              className='centered'
              style={{ padding: "10%", zoom: "2" }}
              animate={{
                opacity: [0, 1, 0],
                y: [0, 5, 20]
              }}
              transition={{
                duration: 2,
                times: [0, 0.3, 1],
                repeat: Infinity,
                repeatDelay: 1
              }}
            >
              <KeyboardDoubleArrowDownIcon
                onClick={handleBackClick}
                htmlColor='white'
                fontSize='large'
              />
            </motion.div>
          </Header>
        </Background>
        <div ref={bodyRef} />
        <Body />
      </div>
    </ThemeProvider>
  );
}

export default App;
