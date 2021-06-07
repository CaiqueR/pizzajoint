import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Header } from "../components/Header";
import { Modal } from "../components/Modal";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: rgb(100,0,123);
    background: radial-gradient(circle, rgba(100,0,123,1) 0%, rgba(62,20,86,1) 100%);
    overflow: hidden;
  }
  body, ul, h1, h2, h3, p, button, a, div{
  margin: 0;
  padding: 0;
  color: white;
  font-family: 'Poppins';
  letter-spacing: 2px;
  list-style-type: none;
  text-decoration: none;
}
`;

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

function MyApp({ Component, pageProps, router }) {
  const [pizza, setPizza] = useState({ base: "", toppings: [] });
  const [showModal, setShowModal] = useState(false);

  const addBase = (base) => {
    setPizza({ ...pizza, base });
  };

  const addTopping = (topping) => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter((item) => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  };

  const final = { ...pageProps, addBase, addTopping, pizza, setShowModal };

  return (
    <ThemeProvider theme={theme}>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap"
        rel="stylesheet"
      />
      <GlobalStyle />
      <Header />
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => setShowModal(false)}
      >
        <Component {...final} key={router.route} />
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default MyApp;
