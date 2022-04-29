import * as React from "react";
import axios from "axios";
import { useState } from "react";
import { Button, Modal, Box, Stack, TextField, Alert } from "@mui/material";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 780,
    },
  },
});

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
  [theme.breakpoints.down('mobile')]: {
    width: 300,
    height: 300
  }
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
  const [errorAlert, setErrorAlert] = useState(false);

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
      .post(`https://rapscallion.herokuapp.com/users`, {
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
      .get(`https://rapscallion.herokuapp.com/login/${username}/${password}`, {
        mode: "cors",
      })
      .then(function (response) {
        if (response.data === "Logged In") {
          setLoggedIn(true);
        } else if (response.data === "no result") {
          setErrorAlert(true);
          setTimeout(() => {
            setErrorAlert(false);
          }, 4000);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const theme = createTheme({
    breakpoints: {
      values: {
        mobile: 780,
      },
    },
  });

  return (
    <>
      <div className="UserButtons">
        {loggedIn ? (
          <Stack direction="row" spacing={2}>
            <h4>{`Hello, ${username}!`}</h4>
            <Button 
            variant="outlined" 
            onClick={() => setLoggedIn(false)}
            sx={{
              [theme.breakpoints.down('mobile')]: {
               lineHeight: 1.25
              }
            }}
            >
              Log Out
            </Button>
          </Stack>
        ) : (
          <section id='login-group'>
            
            <Stack direction="row" spacing={1}>
            <div>
              {errorAlert && (
                <Alert
                  sx={{ margin: '0 8px',
                        zIndex: '4',
                     }}
                  id="login-error"
                  severity="error"
                >{`Username or Password does not exist`}</Alert>
              )}
            </div>
              <Button
                variant="contained"
                color="primary"
                onClick={handleOpenSignup}
                sx={{
                  [theme.breakpoints.down('mobile')]: {
                   lineHeight: 1.25,
                   padding: '5px 10px',
                   fontSize: '10px',
                   marginLeft: '15px'
                  }
                }}
              >
                Sign-Up
              </Button>
              <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={openSignup}
                onClose={handleCloseSignup}
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    <h3>Are you new?</h3>
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {/*  form 1 */}
                    <form
                      className="form-in-sign-up"
                      onSubmit={formSubmitSignup}
                    >
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
              <Button 
              variant="outlined" 
              onClick={handleOpenLogin}
              sx={{
                [theme.breakpoints.down('mobile')]: {
                 lineHeight: 1.25,
                 padding: '0 15px',
                 fontSize: '10px',
                 height: '45px',
                }
              }}
              >
                Login
              </Button>
              <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={openLogin}
                onClose={handleCloseLogin}
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    <h3>Welcome Back!</h3>
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <form
                      className="form-in-sign-up"
                      onSubmit={formSubmitLogin}
                    >
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
            
          </section>
        )}
      </div>
    </>
  );
}
