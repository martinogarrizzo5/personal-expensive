import { makeStyles } from "@material-ui/styles";

const AppBody = props => {
  const classes = useStyles();

  return <main className={classes.main}>{props.children}</main>;
};

const useStyles = makeStyles({
  main: {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
  },
});

export default AppBody;
