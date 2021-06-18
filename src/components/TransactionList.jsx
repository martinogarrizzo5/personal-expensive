import { Card, Avatar, IconButton, CardHeader } from "@material-ui/core";
import { Delete as DeleteIcon } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import * as Colors from "@material-ui/core/colors";

const TransactionList = props => {
  const classes = useStyles();

  return (
    <div className={classes.list}>
      {props.list.map(el => (
        <TransactionCard
          date={el.date}
          title={el.title}
          amount={el.amount}
          key={el.id}
          id={el.id}
          removeItem={props.removeItem}
        />
      ))}
    </div>
  );
};

const TransactionCard = props => {
  const classes = useStyles();

  const removeTransaction = () => {
    props.removeItem(props.id);
  };

  return (
    <Card elevation={4} className={classes.card}>
      <Avatar className={classes.cardAvatar}>${props.amount.toFixed(2)}</Avatar>
      <CardHeader
        title={<p className={classes.cardTitle}>{props.title}</p>}
        subheader={
          <p className={classes.cardSubTitle}>{props.date.toString()}</p>
        }
        className={classes.cardText}
      ></CardHeader>
      <IconButton className={classes.deleteButton} onClick={removeTransaction}>
        <DeleteIcon className={classes.deleteIcon} />
      </IconButton>
    </Card>
  );
};

const useStyles = makeStyles(theme => ({
  list: {
    height: "60vh",
    overflowY: "auto",
    padding: "20px 10px 30px",
    "&::-webkit-scrollbar": {
      width: "7px",
    },
    "&::-webkit-scrollbar-track": {
      background: "#f1f1f1",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#888",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: "#555",
    },
  },
  card: {
    padding: "10px 20px",
    marginBottom: "20px",
    display: "flex",
    alignItems: "center",
  },
  cardAvatar: {
    width: "70px",
    height: "70px",
    backgroundColor: theme.primary,
    fontSize: "20px",
  },
  cardText: {
    flex: 1,
    marginLeft: "10px",
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
