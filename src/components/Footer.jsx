import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styled from "styled-components";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 780,
      tablet: 900,
      desktop: 1200,
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

function Footer() {
  const [openFeedback, setOpenFeedback] = useState(false);
  const [name, setName] = useState("");
  const [feedBack, setFeedBack] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleOpenFeedback = () => {
    setOpenFeedback(true);
  };

  const handleCloseFeedback = () => {
    setOpenFeedback(false);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? "transition-popper" : undefined;
  return (
    <Container>
      <h2>
        <em>Rapscallion</em> : The place to find your place!
      </h2>
      <Row>
        <Column>
          <Content>
            <h3 className="footer-col">Created By</h3>
            <h5 className="footer-links">
              Anjali Thing:{" "}
              <a
                className="footer-links"
                target="_blank"
                href="https://www.linkedin.com/in/anjali-thing/"
              >
                Linked In
              </a>
            </h5>
            <h5 className="footer-links">
              Trevor Mulvany:{" "}
              <a
                className="footer-links"
                target="_blank"
                href="https://www.linkedin.com/in/trevor-mulvany/"
              >
                Linked In
              </a>
            </h5>
            <h5 className="footer-links">
              Elijah Palmer:{" "}
              <a
                className="footer-links"
                target="_blank"
                href="https://www.linkedin.com/in/elijah-palmer/"
              >
                Linked In
              </a>
            </h5>
            <h5 className="footer-links">
              Natan Rincon Luna:{" "}
              <a
                className="footer-links"
                target="_blank"
                href="https://www.linkedin.com/in/natan-rincon-luna/"
              >
                Linked In
              </a>
            </h5>
          </Content>
        </Column>
        <Column>
          <Content>
            <h3 className="footer-col">Contact Us</h3>
            <Button
              className="footer-button footer-links"
              variant="text"
              onClick={handleOpenFeedback}
              sx={{
                textAlign: "left",
                lineHeight: "1.25",
                fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
                }}
            >
              Let us know how we're doing!
            </Button>
            <div>
              <Button
                className="footer-button footer-links"
                aria-describedby={id}
                type="button"
                onClick={handleClick}
                sx={{
                  textAlign: "left",
                  marginRight: '2px',
                  fontFamily:
                    "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
                  }}
              >
                About Us
              </Button>
              <Popper id={id} open={open} anchorEl={anchorEl} transition>
                {({ TransitionProps }) => (
                  <Fade {...TransitionProps} timeout={350}>
                    <Box sx={{ border: 1, p: 1, bgcolor: "background.paper" }}>
                      Rapscallion was created by four aspiring software
                      engineers with a vision of creating the world's greatest
                      job finding website. We hope you enjoy it as much as we
                      enjoyed making it!
                    </Box>
                  </Fade>
                )}
              </Popper>
            </div>
          </Content>
        </Column>

        <Column>
          <Content>
            <h3 className="footer-col">Find Out More</h3>
            <h5 className="footer-links">
              Anjali Thing:{" "}
              <a target="_blank" href="https://github.com/anjali-th">
                GitHub
              </a>
            </h5>
            <h5 className="footer-links">
              Trevor Mulvany:{" "}
              <a target="_blank" href="https://github.com/waterpolo509">
                GitHub
              </a>
            </h5>
            <h5 className="footer-links">
              Elijah Palmer:{" "}
              <a target="_blank" href="https://github.com/ElijahMPalmer">
                GitHub
              </a>
            </h5>
            <h5 className="footer-links">
              Natan Rincon Luna:{" "}
              <a target="_blank" href="https://github.com/natanrinconluna">
                GitHub
              </a>
            </h5>
          </Content>
        </Column>
        <Column>
          <Content>
            <h3 className="footer-col">Helpful Resources</h3>
            <h5>
              {" "}
              <a
                target="_blank"
                href="https://www.glassdoor.com"
                className="footer-links"
              >
                Glassdoor
              </a>
            </h5>
            <h5>
              {" "}
              <a
                target="_blank"
                href="https://www.indeed.com"
                className="footer-links"
              >
                Indeed
              </a>
            </h5>
            <h5>
              {" "}
              <a
                target="_blank"
                href="https://www.monster.com"
                className="footer-links"
              >
                Monster
              </a>
            </h5>
          </Content>
        </Column>
      </Row>
      
      <Content id='footer-inspire'>Inspired by: Monster.com</Content>
      <Content>
        Copyright © 2022, Rapscallion, Inc. "Rapscallion" and logo are
        registered trademarks of Rapscallion, Inc
      </Content>
      

      {/* Start of Modal */}
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={openFeedback}
        onClose={handleCloseFeedback}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Welcome Back!
          </Typography>
          <Box id="modal-modal-description" sx={{ mt: 2 }}>
            <form
              target="_blank"
              action="https://formsubmit.co/b055a4df2cfd4d61e4dd62054a8d44c2"
              method="POST"
              className="form-in-sign-up"
              onSubmit={function (e) {
                console.log("this is the state", name, feedBack);
                setEmailSent("true");
              }}
            >
              <TextField
                id="outlined"
                name="name"
                label="Name"
                margin="normal"
                onChange={function (e) {
                  setName(e.target.value);
                }}
              />
              <br />
              <TextField
                id="outlined-multiline-static"
                label="Give us your feedback!"
                type="textarea"
                name="message"
                multiline
                onChange={function (e) {
                  setFeedBack(e.target.value);
                }}
                // size={large}
                maxRows={3}
                variant="outlined"
                sx={{
                  width: "375px",
                  [theme.breakpoints.down('mobile')]: {
                    width: '240px',
                    
                  }
                }}
              />
              <br />
              {/* onClick={handleClick()} */}

              <Button
                id="signup-btn"
                variant="contained"
                type="submit"
                // onSubmit={}
              >
                Submit
              </Button>
              {emailSent ? (
                <Alert severity="success">
                  Feedback sent! Thank you for your support!
                </Alert>
              ) : (
                <p></p>
              )}
            </form>
          </Box>
        </Box>
      </Modal>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
  padding: 20px;

  em {
    font-size: 28px;
    color: rgb(41, 128, 185);
  }
  a {
    color: black;
    text-decoration: none;
  }

  @media (max-width: 600px) {
    h2{
      font-size: 16px;
    }
    em{
      font-size: 16px;
    }
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const Column = styled.div`
  height: 200px;
  width: 350px;
  display: flex;
  flex-direction: column;
  text-align: left;
  a {
    display: inline;
    padding: 0;
  }
  h3 {
    color: orange;
    text-shadow: 0.5px 0.5px black;
  }
  h5 {
    margin-top: 2px;
    margin-bottom: 2px;
    padding: 5px 0;
  }
`;

const Content = styled.div`
  margin: 0 auto;

  @media (max-width: 780px) {
    font-size: 10px;
  }
`;


// CREATED BY: ANJALI THING, NATAN RINCON LUNA, ELIJAH PALMER, TREVOR MULVANY

// https://www.linkedin.com/in/anjali-thing/
// https://www.linkedin.com/in/natan-rincon-luna/
// https://www.linkedin.com/in/elijah-palmer/
// https://www.linkedin.com/in/trevor-mulvany/

// https://github.com/anjali-th
// https://github.com/ElijahMPalmer
// https://github.com/waterpolo509
// https://github.com/natanrinconluna

// EMAIL FOR FEEDBACK FORM -----> rapscallionfeedback@gmail.com


