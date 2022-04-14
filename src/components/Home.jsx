import React from "react";
import ReactDOM from "react-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import Grid from "@mui/material/Grid";
import styled from "styled-components";

const Home = () => {
  return (
    <div className="compat-container">
      <main>
      <div>
        <h1>Discover Compatibility!</h1>
      </div>
      <Container>
        <TextField
          id="outlined-basic companies"
          label="Search Jobs, keywords, companies"
          variant="outlined"
          color="success"
          sx={{
            backgroundColor: "white",
            borderRadius: "8px 0px 0px 8px",
            width: "400px",
          }}
        />
        <TextField
          id="outlined-basic locations"
          label="Enter Location"
          variant="outlined"
          color="success"
          sx={{
            backgroundColor: "white",
            borderRadius: "0px 0px 0px 0px",
            width: "400px",
          }}
        />
      
      <ButtonGroup>
        <Button id='search-button'
          alignItems="right"
          justifyContent="right"
          startIcon={<SearchIcon />}
          variant="contained"
          color="success"
        >
          Search
        </Button>
      </ButtonGroup>
      </Container>

      <PopularGroup>
        <h3>Popular Searches</h3>
        <PopularSearch>
          <Button
            variant="contained"
            className="pop-search"
            startIcon={<SearchIcon />}
          >
            Work From Home
          </Button>
          <Button
            variant="contained"
            className="pop-search"
            startIcon={<SearchIcon />}
          >
            Galvanize
          </Button>
          <Button
            variant="contained"
            className="pop-search"
            startIcon={<SearchIcon />}
          >
            Software Engineering
          </Button>
          <Button
            variant="contained"
            className="pop-search"
            startIcon={<SearchIcon />}
          >
            contained
          </Button>
          <Button
            variant="contained"
            className="pop-search"
            startIcon={<SearchIcon />}
          >
            Outlined
          </Button>
        </PopularSearch>
      </PopularGroup>
      </main>
    </div>
  );
};
export default Home;

const PopularSearch = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  Button {
    margin: 0 10px;
  }
`;

const PopularGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ButtonGroup = styled.div`
display: flex;
flex-direction: row;
justify-content: right;
align-items: right;
`
