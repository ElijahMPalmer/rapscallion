import React from "react";
import Box from "@mui/material/Box";
import styled from "styled-components";
import Grid from '@mui/material/Grid';

const Job = () => {
  return (
    <CallToAction>
      <main>
        <Container>
          <img  id='jobImg' src="images/callToAction.jpg" alt="" />
          <ButtonGroup>
            <h3>Finding a Job can be intimidating.</h3>
            <h4>
              <em>We</em> can help.
            </h4>
            <Box
              id="job-qoute"
              alignItems="right"
              justifyContent="right"
              variant="contained"
            >
              "Nothing in the world can take the place of persistence. Talent
              will not; nothing is more common than unsuccessful men with
              talent. Genius will not; unrewarded genius is almost a proverb.
              Education will not; the world is full of educated derelicts.
              Persistence and determination alone are omnipotent. The slogan
              “press on” has solved and will always solve the problems of the
              human race." — Calvin Coolidge
            </Box>
          </ButtonGroup>
        </Container>
      </main>
    </CallToAction>
  );
};
export default Job;

const CallToAction = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 25px 0px;
  background: #2980b9;
  img {
    box-shadow: 3px 3px 10px orange;
    width: 500px;
    border-radius: 0px 8px 12px 8px;
  }
  
`;
const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    margin: 2px;
  }
  h4 {
    margin: 2px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 780px) {
    flex-direction: column;
  }
`;

const Content = styled.div``;
