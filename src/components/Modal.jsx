import { useState } from "react";

import { KeyboardDatePicker } from "@material-ui/pickers";

import { SwipeableDrawer, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const Modal = props => {
  const classes = useStyles();

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <SwipeableDrawer
      anchor="bottom"
      open={props.open}
      onClose={props.closeFunction}
      className={classes.modalSheet}
    >
      <div className={classes.modalSheet}>
        <TextField
          label="Title"
          className={classes.textField}
          id="standard-basic"
        />
        <TextField
          label="Amount"
          className={classes.textField}
          id="standard-basic"
          type="number"
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
        />
      </div>
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
}));

export default Modal;
