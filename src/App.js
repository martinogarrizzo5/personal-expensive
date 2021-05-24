import { useState } from "react";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import * as Colors from "@material-ui/core/colors";

import AppBar from "./components/AppBar";
import Fab from "./components/Fab";
import AppBody from "./components/AppBody";
import TransactionList from "./components/TransactionList";
import Chart from "./components/Chart";
import Transaction from "./models/Transaction";

import "./App.scss";
import Modal from "./components/Modal";

const App = () => {
  // Material UI theme
  const theme = createMuiTheme({
    primary: Colors.purple[700],
    palette: {
      primary: Colors.purple,
      secondary: Colors.amber,
    },
  });

  // app global state
  const [transactionsList, setTransactionsList] = useState([
    new Transaction("someId"),
  ]);
  const [isModalOpened, setModalOpened] = useState(false);

  const openModal = () => {
    setModalOpened(true);
  };

  const closeModal = () => {
    setModalOpened(false);
  };

  return (
    <main className="app">
      <ThemeProvider theme={theme}>
        <AppBar title="Expensive App" openModal={openModal} />
        <AppBody>
          <Chart />
          <TransactionList list={transactionsList} />
        </AppBody>
        <Modal open={isModalOpened} closeFunction={closeModal} />
        <Fab onClick={openModal} />
      </ThemeProvider>
    </main>
  );
};

export default App;
