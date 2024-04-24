import React, { useState} from "react";
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
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { PopupLogin } from "./PopupLogin";
import Swal from 'sweetalert2';


export const Signup = (props) => {
  const paperStyle = {
    padding: 20,
    height: "570px",
    width: 400,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#265867" };
  const btnstyle = { margin: "8px 0", backgroundColor: "#265867" };
  const [firstName, setFirstName] = useState('');
  const [phoneNumber, setPhoneNumber ] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
  const [emailError, setEmailError] = useState('');

  const handleClosePopup = () => {
    props.setTrigger(false);
  };

  const isEmailValid = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
  
  const handleRegister = async (e) => {
    e.preventDefault();
    if (!isEmailValid(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }
    const payload = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
      roles: "patient",
      phone_number: phoneNumber
    };
    try {
      await axios.post('https://healtrip.azurewebsites.net/auth/register/patient', payload);
      handleClear();
      handleClosePopup()
      Swal.fire("Successfully!", "You are registered successfully.", "success");

      setShowLogin(true);
      navigate(""); 
    } catch (error) {
      console.error('Signup error:', error);
      Swal.fire("Error!", "An error occurred while attempting to sign up.", "error");
    }
  };

  const handleClear = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setEmailError('');
    setPhoneNumber('')
  };

  return props.trigger ? (
    <Grid className="popup-signup">
      <form onSubmit={(e) => handleRegister(e)} onKeyPress={(e) => { if (e.key === 'Enter') handleRegister(e) }}>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="end">
          <button className="close-btn" onClick={handleClosePopup}><CloseIcon style={{color:"#265867"}}/></button>
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
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            inputProps={{ style: { fontSize: 14, width: "90%" } }}
          />
          
        </div>
        <div style={{ marginTop: "10px" }}>
        <TextField
            label="Last Name"
            placeholder="Enter Your Last Name"
            fullWidth
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            inputProps={{ style: { fontSize: 14, width: "90%" } }}
          />
        </div>
        
        <div style={{ marginTop: "10px" }}>
        <TextField
            label="Phone Number"
            placeholder="Enter Your Phone Number"
            fullWidth
            required
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            inputProps={{ style: { fontSize: 14, width: "90%" } }}
          />
        </div>
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
        <div style={{ marginTop: "10px", marginBottom:"25px"}}>
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
      </form>
      {showLogin && <PopupLogin trigger={showLogin} setTrigger={setShowLogin} />}
    </Grid>
  ) : (
    ""
  );
};
