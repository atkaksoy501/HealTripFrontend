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
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2';
import ClipLoader from "react-spinners/ClipLoader";

export const PopupLogin = (props) => {
  const paperStyle = {
    padding: 20,
    height: "500px",
    width: 400,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#265867" };
  const btnstyle = { margin: "8px 0", backgroundColor: "#265867" };
  const [buttonSignupPopup , setButtonSignupPopup] = useState(false);

  const navigate = useNavigate();
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [emailError, setEmailError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleClosePopup = () => {
    props.setTrigger(false);
  };

  const isEmailValid = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  const handleRegister = async(e) =>{
    e.preventDefault()
    setLoading(true);
    if (!isEmailValid(email)) {
      setEmailError('Please enter a valid email address.');
      setLoading(false);
      return;
    }
  
    const payload = {
      email: email,
      password: password
    }

    try {
      const responseToken = await axios.post('https://healtrip.azurewebsites.net/auth/authenticate', payload);
      setEmailError();
      localStorage.setItem("token", responseToken?.data)
      navigate("/");
      handleClosePopup()
      window.location.reload(); 
    } catch (error) {
      console.error('Signup error:', error);
      Swal.fire("Error!", "Your password or username is wrong.", "error");
    } finally{
      setLoading(false);
    }
  }


  return props.trigger ? (
    <Grid className="popup-login">
      <form onSubmit={(e) => handleRegister(e)} onKeyPress={(e) => { if (e.key === 'Enter') handleRegister(e) }}>
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!emailError}
            helperText={emailError}
            inputProps={{ style: { fontSize: 14, width: "90%" } }}
          />
        </div>
        <div style={{ marginTop: "10px" }}>
          <TextField
            label="Password"
            placeholder="Enter password"
            type="password"
            fullWidth
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
          disabled={loading}
        >
          {loading ? <ClipLoader size={24} color="#fff" /> : "Sign in"}
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
      </form>
      <Signup trigger={buttonSignupPopup} setTrigger={setButtonSignupPopup}></Signup>
    </Grid>
  ) : (
    ""
  );
};
