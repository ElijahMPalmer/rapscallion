import * as React from 'react';
import { Button, Modal, Box, Stack, TextField } from "@mui/material";
import Typography from '@mui/material/Typography';




const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 450,
    height: 350,
    bgcolor: 'white',
    border: '3px solid #2b4cb8',
    boxShadow: 3,
    p: 4,
  };
  
export default function Signin() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="UserButtons">
      <Stack direction="row" spacing={2}>
        <div>
          <Button variant="contained" color="primary" onClick={handleOpen}>
            Sign Up
          </Button>
          <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={open}
            onClose={handleClose}
          >
            <Box sx= {style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Are you new?
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <form className='form-in-sign-up'>
                <TextField id="outlined" label="Username" margin='normal'/><br/>
                <TextField id="outlined-password-input" label="Password" type="password" /><br/>
                <Button id='signup-btn'variant='contained' type='submit'>Sign up</Button>
                </form>
              </Typography>
            </Box>
          </Modal>
        </div>

        <Button variant="outlined">Log in</Button>
      </Stack>
    </div>
  );
}
