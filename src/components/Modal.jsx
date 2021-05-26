import { useState } from "react";

import { KeyboardDatePicker } from "@material-ui/pickers";
import { SwipeableDrawer, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { LocalConvenienceStoreOutlined } from "@material-ui/icons";

const Modal = props => {
  const classes = useStyles();

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const handleTitleChange = event => {
    setTitle(event.target.value);
  };

  const handleAmountChange = event => {
    setAmount(event.target.value);
  };

  const isValidDate = date => {
    return date instanceof Date && !isNaN(date);
  };

  const addNewTransaction = e => {
    e.preventDefault();
    if (title && amount && isValidDate(selectedDate)) {
      console.log(selectedDate);
      props.addNewTransaction(title, parseFloat(amount), selectedDate);
      setSelectedDate(new Date(selectedDate));
      setTitle("");
      setAmount("");
      props.closeModal();
    }
  };

  return (
    <SwipeableDrawer
      anchor="bottom"
      open={props.open}
      onClose={props.closeFunction}
      className={classes.modalSheet}
    >
      <form className={classes.modalSheet} onSubmit={addNewTransaction}>
        <TextField
          label="Title"
          className={classes.textField}
          onChange={handleTitleChange}
          value={title}
        />
        <TextField
          label="Amount"
          className={classes.textField}
          type="number"
          onChange={handleAmountChange}
          value={amount}
        />
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          className={classes.textField}
          disableFuture={true}
          minDate={new Date("2020")}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.submitButton}
        >
          Add Transaction
        </Button>
      </form>
    </SwipeableDrawer>
  );
};

const useStyles = makeStyles(theme => ({
  modalSheet: {
    padding: "30px",
    height: "50vh",
    fontSize: "20px",
    display: "flex",
    flexDirection: "column",
  },
  textField: {
    marginBottom: "10px",
  },
  submitButton: {
    alignSelf: "flex-end",
    marginTop: "20px",
  },
}));

export default Modal;
