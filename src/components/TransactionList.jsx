import Transaction from "../models/Transaction";

import { Card, Avatar, IconButton, CardHeader } from "@material-ui/core";
import { Delete as DeleteIcon } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import * as Colors from "@material-ui/core/colors";

const TransactionList = props => {
  const classes = useStyles();

  return (
    <div>
      {props.list.map(el => (
        <TransactionCard date={el.date} />
      ))}
    </div>
  );
};

const TransactionCard = props => {
  const classes = useStyles();

  return (
    <Card elevation={4} className={classes.card}>
      <Avatar className={classes.cardAvatar}>$32.50</Avatar>
      <CardHeader
        title={<p className={classes.cardTitle}>Title Card</p>}
        subheader={
          <p className={classes.cardSubTitle}>{props.date.toString()}</p>
        }
        className={classes.cardText}
      ></CardHeader>
      <IconButton className={classes.deleteButton}>
        <DeleteIcon className={classes.deleteIcon} />
      </IconButton>
    </Card>
  );
};

const useStyles = makeStyles(theme => ({
  card: {
    padding: "10px 20px",
    display: "flex",
    alignItems: "center",
  },
  cardAvatar: {
    width: "70px",
    height: "70px",
    backgroundColor: theme.primary,
    fontSize: "20px",
    border: `2px solid ${theme.primary}`,
  },
  cardText: {
    flex: 1,
    marginLeft: "20px",
  },
  cardTitle: {
    fontWeight: 600,
    fontSize: "20px",
  },
  cardSubTitle: {
    fontSize: "14px",
  },
  deleteButton: {
    color: Colors.red[500],
  },
  deleteIcon: {
    fontSize: "25px",
  },
}));

export default TransactionList;
