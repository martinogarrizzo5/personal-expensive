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
  const [transactionsList, setTransactionsList] = useState([]);
  const [isModalOpened, setModalOpened] = useState(false);

  const openModal = () => {
    setModalOpened(true);
  };

  const closeModal = () => {
    setModalOpened(false);
  };

  const addTransaction = (title, amount, date) => {
    setTransactionsList([
      ...transactionsList,
      new Transaction(title, amount, date),
    ]);
  };

  const removeTransaction = id => {
    setTransactionsList(
      transactionsList.filter(el => {
        return el.id !== id;
      })
    );
  };

  return (
    <main className="app">
      <ThemeProvider theme={theme}>
        <AppBar title="Expensive App" openModal={openModal} />
        <AppBody>
          <Chart />
          <TransactionList
            list={transactionsList}
            removeItem={removeTransaction}
          />
        </AppBody>
        <Modal
          open={isModalOpened}
          closeModal={closeModal}
          closeFunction={closeModal}
          addNewTransaction={addTransaction}
        />
        <Fab onClick={openModal} />
      </ThemeProvider>
    </main>
  );
};

export default App;
