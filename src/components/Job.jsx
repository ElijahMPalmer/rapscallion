import React from "react";
import ReactDOM from "react-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import Grid from "@mui/material/Grid";
import styled from "styled-components";

const Job = () => {
  return (
    <CallToAction>
      <main>
    <Container>
        <img src="images/callToAction.jpg" alt="" />
        <ButtonGroup>
          <h3>Finding a Job can be intimidating.</h3>
          <h4>
            <em>We</em> can help.
          </h4>
          <Button
            className="sugg-button"
            alignItems="right"
            justifyContent="right"
            variant="contained"
            sx={{
              backgroundColor: "rgba(128, 128, 128, 0.4)",
              color: "rgba(255, 255, 255, 1)",
              whiteSpace: "nowrap",
            }}
          >
            Browse your recommended jobs
          </Button>
          <Button
            className="sugg-button"
            alignItems="right"
            justifyContent="right"
            variant="contained"
            sx={{
              backgroundColor: "rgba(128, 128, 128, 0.4)",
              color: "rgba(255, 255, 255, 1)",
              whiteSpace: "nowrap",
            }}
          >
            Search jobs by salary range
          </Button>
          <Button
            className="sugg-button"
            alignItems="right"
            justifyContent="right"
            variant="contained"
            sx={{
              backgroundColor: "rgba(128, 128, 128, 0.4)",
              color: "rgba(255, 255, 255, 1)",
              whiteSpace: "nowrap",
            }}
          >
            Explore for similar jobs in your area
          </Button>
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
`;
