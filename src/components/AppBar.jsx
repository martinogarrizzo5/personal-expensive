import { AppBar, IconButton } from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";

const MyAppBar = props => {
  const classes = useStyles();

  return (
    <AppBar color="primary" className={classes.root}>
      <h3>{props.title}</h3>
      <IconButton className={classes.iconButton} onClick={props.openModal}>
        <AddIcon className={classes.icon} />
      </IconButton>
    </AppBar>
  );
};

const useStyles = makeStyles({
  root: {
    padding: "8px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    position: "relative",
  },
  iconButton: {
    color: "white",
  },
  icon: {
    fontSize: "25px",
  },
});

export default MyAppBar;
