import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/styles";
import { v4 as uuid } from "uuid";

const Chart = props => {
  const today = new Date();
  const numberDay = today.getDate();

  const getLastWeek = () => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const lastWeek = Array(7);
    for (let i = 0; i < 7; i++) {
      const dayBefore = new Date();
      dayBefore.setDate(today.getDate() - i);
      lastWeek[i] = [dayBefore.getDate(), days[dayBefore.getDay()]];
    }

    return lastWeek;
  };

  props.getTransactions();

  const getBarsHeight = () => {
    const transactions = props.getTransactions();
    let totalAmount = 0;

    let weekDays = getLastWeek();
    for (let day of weekDays) {
      day.push(transactions[day[0]] || 0);
      totalAmount += transactions[day[0]] || 0;
    }

    return [weekDays, totalAmount];
  };

  const [weekDays, totalAmount] = getBarsHeight();
  weekDays.reverse();
  console.log(weekDays, totalAmount);

  const classes = useStyles();
  return (
    <Card elevation={4} className={classes.card}>
      {weekDays.map((day, i) => (
        <div className={classes.chartBarContainer} key={uuid()}>
          <span className={classes.chartBar}>
            <span
              className={classes.chartHeight}
              style={{
                height: `${(day[2] / totalAmount) * 100}%`,
                backgroundColor: day[0] === numberDay ? "#ff05e4" : null,
              }}
            ></span>
          </span>
          <div className={classes.chartLabel}>
            {day[0] === numberDay ? "Today" : day[1]}
          </div>
        </div>
      ))}
    </Card>
  );
};

const useStyles = makeStyles(theme => ({
  card: {
    height: "18vh",
    padding: "10px",
    marginBottom: "30px",
    display: "flex",
    justifyContent: "space-around",
  },
  chartBarContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  chartBar: {
    display: "inline-block",
    width: "8px",
    height: "60px",
    marginBottom: "10px",
    borderRadius: "15px",
    border: "1px solid grey",
    position: "relative",
  },
  chartLabel: {
    fontSize: "14px",
  },
  chartHeight: {
    backgroundColor: theme.primary,
    display: "inline-block",
    width: "100%",
    borderRadius: "15px",
    position: "absolute",
    top: "0",
    left: "0",
  },
}));

export default Chart;
