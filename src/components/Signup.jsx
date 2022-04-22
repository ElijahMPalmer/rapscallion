import * as React from "react";
import axios from "axios";
import { useState } from "react";
import { Button, Modal, Box, Stack, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  height: 350,
  bgcolor: "white",
  border: "3px solid #2b4cb8",
  boxShadow: 3,
  p: 4,
};

export default function Signup() {
  const [openSignup, setOpenSignup] = useState(false);
  const handleOpenSignup = () => {
    setOpenSignup(true);
  };
  const handleCloseSignup = () => {
    setOpenSignup(false);
  };

  const [openLogin, setOpenLogin] = useState(false);
  const handleOpenLogin = () => {
    setOpenLogin(true);
  };

  const handleCloseLogin = () => {
    setOpenLogin(false);
  };

  // handlle form submit

  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const BASE_URL = window.location.origin;

  function recordUsername(value) {
    setusername(() => value);
  }
  function recordPassword(value) {
    setpassword(() => value);
  }

  function formSubmitSignup(e) {
    e.preventDefault();
    setOpenSignup(false);

    //  post request
    axios
      .post(`${BASE_URL}/users`, {
        username: username,
        passkey: password,
      })
      .then(function (response) {
        setLoggedIn(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function formSubmitLogin(e) {
    e.preventDefault();
    setOpenLogin(false);

    // get request
    axios
      .get(`${BASE_URL}/login/${username}/${password}`, {
        mode: "cors",
      })
      .then(function (response) {
        if(response.data === 'Logged In'){
          setLoggedIn(true);
        } else {
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className="UserButtons">
      {loggedIn ? (
        <Stack direction="row" spacing={2}>
          <h4>{`Hello, ${username}!`}</h4>
          <Button variant="outlined" onClick={() => setLoggedIn(false)}>
            Log Out
          </Button> 
        </Stack>
      ) : (
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleOpenSignup}
          >
            Sign Up
          </Button>
          <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={openSignup}
            onClose={handleCloseSignup}
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                <h3>Are you new?</h3>
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {/*  form 1 */}
                <form className="form-in-sign-up" onSubmit={formSubmitSignup}>
                  <TextField
                    fullWidth
                    required
                    id="outlined"
                    label="Create Username"
                    margin="normal"
                    type="text"
                    onChange={(e) => {
                      recordUsername(e.target.value);
                    }}
                  />
                  <br />
                  <TextField
                    required
                    fullWidth
                    id="outlined-password-input"
                    label="Create New Password"
                    type="password"
                    onChange={(e) => {
                      recordPassword(e.target.value);
                    }}
                  />
                  <br />
                  <Button id="signup-btn" variant="contained" type="submit">
                    Sign up
                  </Button>
                </form>
              </Typography>
            </Box>
          </Modal>
          <Button variant="outlined" onClick={handleOpenLogin}>
            Log in
          </Button>
          <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={openLogin}
            onClose={handleCloseLogin}
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                <h3>Welcome Back!</h3>
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <form className="form-in-sign-up" onSubmit={formSubmitLogin}>
                  <TextField
                    required
                    fullWidth
                    id="outlined"
                    label="Username"
                    margin="normal"
                    type="text"
                    onChange={(e) => {
                      recordUsername(e.target.value);
                    }}
                  />
                  <br />
                  <TextField
                    required
                    fullWidth
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    onChange={(e) => {
                      recordPassword(e.target.value);
                    }}
                  />
                  <br />
                  <Button id="signup-btn" variant="contained" type="submit">
                    Login
                  </Button>
                </form>
              </Typography>
            </Box>
          </Modal>
        </Stack>
      )}
    </div>
  );
}
