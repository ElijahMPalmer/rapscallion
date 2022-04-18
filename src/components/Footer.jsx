import React, { useState } from "react";
import ReactDOM from "react-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import Grid from "@mui/material/Grid";
import styled from "styled-components";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Alert from '@mui/material/Alert';

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

function Footer() {
  const [openFeedback, setOpenFeedback] = useState(false);
  const [name, setName] = useState('');
  const [feedBack, setFeedBack] = useState('');
  const handleOpenFeedback = () => {
    setOpenFeedback(true);
  };

  const handleCloseFeedback = () => {
    setOpenFeedback(false);
  };

  return (
    <Container>
      <h2>
        <em>Rapscallion</em> : The place to find your place!
      </h2>
      <Row>
        <Column>
          <Content>
            <h3>Created By</h3>
            <h5>
              Anjali Thing:{" "}
              <a
                target="_blank"
                href="https://www.linkedin.com/in/anjali-thing/"
              >
                Linked In
              </a>
            </h5>
            <h5>
              Trevor Mulvany:{" "}
              <a
                target="_blank"
                href="https://www.linkedin.com/in/trevor-mulvany/"
              >
                Linked In
              </a>
            </h5>
            <h5>
              Elijah Palmer:{" "}
              <a
                target="_blank"
                href="https://www.linkedin.com/in/elijah-palmer/"
              >
                Linked In
              </a>
            </h5>
            <h5>
              Natan Rincon Luna:{" "}
              <a
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
              <h3>Contact Us</h3>
              <h5>
                <a onClick={handleOpenFeedback}>Let us know how we're doing!</a>
              </h5>
            </Content>
          </Column>
        
        <Column>
          <Content>
            <h3>Check out the rest of our work!</h3>
          </Content>
        </Column>
        <Column>
          <Content>
            <h3>Created By</h3>
          </Content>
        </Column>
      </Row>
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
            className="form-in-sign-up" 
            onSubmit={function(e){
                e.preventDefault();
                console.log('this is the state', name, feedBack)}}>
              <TextField 
              id="outlined" 
              label="Name" 
              margin="normal"
              onChange={function(e){
                setName(e.target.value);
            }}
              />
              <br />
              <TextField
                id="outlined-multiline-static"
                label="Give us your feedback!"
                type="textarea"
                multiline
                onChange={function(e){
                    setFeedBack(e.target.value);
                }}
                // size={large}
                maxRows={4}
                variant="outlined"
                sx={{
                  width: "375px",
                }}
              />
              <br />
              {/* onClick={handleClick()} */}
              <Button id="signup-btn" variant="contained" type="submit" >
                Submit
              </Button>
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
`;

// ELEMENTS IN FOOTER:
// CREATED BY: ANJALI THING, NATAN RINCON LUNA, ELIJAH PALMER, TREVOR MULVANY

// https://www.linkedin.com/in/anjali-thing/
// https://www.linkedin.com/in/natan-rincon-luna/
// https://www.linkedin.com/in/elijah-palmer/
// https://www.linkedin.com/in/trevor-mulvany/

// EMAIL FOR FEEDBACK FORM -----> rapscallionfeedback@gmail.com
