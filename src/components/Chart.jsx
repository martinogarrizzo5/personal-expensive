import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/styles";

const Chart = () => {
  const classes = useStyles();
  return (
    <Card elevation={4} className={classes.card}>
      Chart
    </Card>
  );
};

const useStyles = makeStyles({
  card: {
    padding: "10px",
    marginBottom: "30px",
  },
});

export default Chart;
