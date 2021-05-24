import Fab from "@material-ui/core/Fab";
import { Add as AddIcon } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  fab: {
    position: "fixed",
    bottom: "25px",
    right: "50%",
    transform: "translate(50%)",
  },
  fabIcon: {
    fontSize: "22px",
  },
});

const StyledFab = props => {
  const classes = useStyles();

  return (
    <Fab
      className={classes.fab}
      aria-label="Add"
      color="secondary"
      onClick={props.onClick}
    >
      <AddIcon className={classes.fabIcon} />
    </Fab>
  );
};

export default StyledFab;
