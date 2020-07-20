import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { green } from "@material-ui/core/colors";

export const ColorButton = withStyles((theme) => ({
  root: {
    color: "#fff",
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700],
    },
  },
}))(Button);
