import {React, useState} from "react";
import "./PopupLogin.css";
import CloseIcon from "@mui/icons-material/Close";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Signup } from "./Signup";

export const PopupLogin = (props) => {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 400,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#265867" };
  const btnstyle = { margin: "8px 0", backgroundColor: "#265867" };
  const [buttonSignupPopup , setButtonSignupPopup] = useState(false);
  return props.trigger ? (
    <Grid className="popup-login">
      <Paper elevation={10} style={paperStyle}>
        <Grid align="end">
          <button className="close-btn" onClick={() => props.setTrigger(false)}><CloseIcon style={{color:"#265867"}}/></button>
        </Grid>

        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2 style={{ color: "#265867" }}>Sign In</h2>
        </Grid>
        <div style={{ marginTop: "10px" }}>
          <TextField
            label="Email"
            placeholder="Enter email"
            fullWidth
            required
            inputProps={{ style: { fontSize: 14, width: "90%" } }}
          />
        </div>
        <div style={{ marginTop: "20px" }}>
          <TextField
            label="Password"
            placeholder="Enter password"
            type="password"
            fullWidth
            required
            inputProps={{ style: { fontSize: 14, width: "90%" } }}
          />
        </div>
        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="Remember me"
          style={{ marginTop: "10px" }}
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
        >
          Sign in
        </Button>
        <Typography style={{ marginTop: "5px" }}>
          <Link href="#" style={{ color: "#265867" }}>
            Forgot password ?
          </Link>
        </Typography>
        <Typography style={{ marginTop: "5px" }}>
          {" "}
          Don't you have an account ?
          <button onClick={() => setButtonSignupPopup(true)} style={{border:"0", backgroundColor:"#fff", color:"#265867"}}>
            Sign Up
          </button>
        </Typography>
      </Paper>
      <Signup trigger={buttonSignupPopup} setTrigger={setButtonSignupPopup}></Signup>
    </Grid>
  ) : (
    ""
  );
};
