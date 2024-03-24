import React from "react";
import "./Signup.css";
import CloseIcon from "@mui/icons-material/Close";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";


export const Signup = (props) => {
  const paperStyle = {
    padding: 20,
    height: "75vh",
    width: 400,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#265867" };
  const btnstyle = { margin: "8px 0", backgroundColor: "#265867" };
  return props.trigger ? (
    <Grid className="popup-signup" >
      <Paper elevation={10} style={paperStyle}>
        <Grid align="end">
          <button className="close-btn" onClick={() => props.setTrigger(false)}><CloseIcon style={{color:"#265867"}}/></button>
        </Grid>

        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2 style={{ color: "#265867" }}>Sign Up</h2>
        </Grid>
        <div style={{ marginTop: "10px" }}>
          <TextField
            label="First Name"
            placeholder="Enter Your Name"
            fullWidth
            required
            inputProps={{ style: { fontSize: 14, width: "90%" } }}
          />
          
        </div>
        <div style={{ marginTop: "10px" }}>
        <TextField
            label="Last Name"
            placeholder="Enter Your Last Name"
            fullWidth
            required
            inputProps={{ style: { fontSize: 14, width: "90%" } }}
          />
        </div>
        <div style={{ marginTop: "10px" }}>
          <TextField
            label="Email"
            placeholder="Enter email"
            fullWidth
            required
            inputProps={{ style: { fontSize: 14, width: "90%" } }}
          />
        </div>
        <div style={{ marginTop: "10px", marginBottom:"25px"}}>
          <TextField
            label="Password"
            placeholder="Enter password"
            type="password"
            fullWidth
            required
            inputProps={{ style: { fontSize: 14, width: "90%" } }}
          />
        </div>
        
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
        >
          Sign Up
        </Button>

        <Typography style={{marginTop:"10px"}}>
        By creating an account, you agree to our Privacy policy and Terms of use.
        </Typography>
      </Paper>
    </Grid>
  ) : (
    ""
  );
};
