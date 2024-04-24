import {React, useState, useEffect} from "react";
import "./PopupForm.css";
import CloseIcon from "@mui/icons-material/Close";
import {
  Grid,
  Paper,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select, MenuItem
} from "@material-ui/core";
import axios from "axios";
import { jwtDecode } from "jwt-decode";


export const PopupForm = (props) => {
  const paperStyle = {
    padding: 20,
    height: "500px",
    width: 400,
    margin: "20px auto",
  };
  const [user, setUser] = useState(null);
  const btnstyle = { marginTop: "40px", backgroundColor: "#265867" };
  const [description, setDescription] = useState()
  const [treatments, setTreatments] = useState([]);
  const [selectedTreatmentId, setSelectedTreatmentId] = useState("");

  useEffect(() => {
    const userToken = localStorage.getItem("token");
    if (userToken) {
      const decodedToken = jwtDecode(userToken);
      setUser(decodedToken);
    }
    fetchTreatments();
  }, []);

  useEffect(() => {
    fetchTreatments();
  }, []);

  const fetchTreatments = () => {
    axios.get("https://healtrip.azurewebsites.net/retreat/getAll")
      .then((response) => {
        setTreatments(response.data);
      })
      .catch((error) => {
        console.error("Error fetching treatments:", error);
      });
  };

  return props.trigger ? (
    <Grid className="popup-form">
      <form>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="end">
            <button
              className="close-btn"
              onClick={() => props.setTrigger(false)}
            >
              <CloseIcon style={{ color: "#265867" }} />
            </button>
          </Grid>

          <Grid align="center">

            <h2 style={{ color: "#265867" }}>Patient Form</h2>
          </Grid>

          <div style={{ marginTop: "px" }}>
            <TextField
              label="Your Name"
              placeholder="Enter your name"
              fullWidth
              required
              value={user.name}
              InputProps={{
                style: { fontSize: 14, width: "90%" },
                readOnly: true, 
              }}
            />
          </div>          
          <div style={{ marginTop: "10px" }}>
            <TextField
              label="Your Email"
              placeholder="Enter Your Email"
              fullWidth
              required
              value={user.email}
              InputProps={{
                style: { fontSize: 14, width: "90%" },
                readOnly: true, 
              }}
            />
          </div>
          <div style={{ marginTop: "10px" }}>

          <FormControl fullWidth required style={{ marginTop: "10px" }}>
                  <InputLabel id="demo-simple-select-label">Select Treatment</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedTreatmentId}
                    onChange={(event) => setSelectedTreatmentId(event.target.value)}
                  >
                    {treatments.map((treatment) => (
                      <MenuItem value={treatment.id}>{treatment.retreat_name}</MenuItem>))
                    }
                  </Select>
                </FormControl> 
          </div>
            
          <div style={{ marginTop: "10px" }}>
            <TextField
              label="Description"
              placeholder="Enter description"
              fullWidth
              required
              multiline 
              rows={5} 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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
            Send Form
          </Button>
        </Paper>
      </form>
    </Grid>
  ) : (
    ""
  );
};
