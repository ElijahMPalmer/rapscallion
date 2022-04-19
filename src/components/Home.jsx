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

  function handleClick(e) {
    console.log("It worked")
    e.target.classList.toggle("clicked");
  }

  return (
    <div className="compat-container">
      <main>
        <div>
          <h1>Discover Compatibility!</h1>
        </div>
        <Container>
          <TextField
            InputProps={{
              sx: { borderRadius: "8px 0px 0px 8px" }
            }}
            id="outlined-basic companies"
            placeholder="Search jobs, keywords or companies"
            variant="outlined"
            sx={{
              backgroundColor: "white",
              borderRadius: "8px 0px 0px 8px",
              width: "400px",
            }}
          />
          <TextField
            InputProps={{
              sx: { borderRadius: "0px 0px 0px 0px" }
            }}
            id="outlined-basic locations"
            placeholder="Enter location"
            variant="outlined"
            sx={{
              backgroundColor: "white",
              borderRadius: "0px 0px 0px 0px",
              width: "400px",
            }}
          />

          <ButtonGroup>
            <Button
              id="search-button"
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

        <h4>Popular Searches</h4>
        <PopularGroup>
          <PopularSearch>
            <Button
              variant="contained"
              className="pop-search"
              startIcon={<SearchIcon />}
              onClick={(e) => handleClick(e)}
              sx={{
                backgroundColor: "rgba(128, 128, 128, 0.4)",
                color: "rgba(255, 255, 255, 1)",
                whiteSpace: "nowrap"
              }}
            >
              remote work
            </Button>
            <Button
              variant="contained"
              className="pop-search"
              startIcon={<SearchIcon />}
              onClick={(e) => handleClick(e)}
              sx={{
                backgroundColor: "rgba(128, 128, 128, 0.4)",
                color: "rgba(255, 255, 255, 1)",
                whiteSpace: "nowrap"
              }}
            >
              education
            </Button>
            <Button
              variant="contained"
              className="pop-search"
              startIcon={<SearchIcon />}
              onClick={(e) => handleClick(e)}
              sx={{
                backgroundColor: "rgba(128, 128, 128, 0.4)",
                color: "rgba(255, 255, 255, 1)",
                whiteSpace: "nowrap"
              }}
            >
              Technology
            </Button>
            <Button
              variant="contained"
              className="pop-search"
              startIcon={<SearchIcon />}
              onClick={(e) => handleClick(e)}
              sx={{
                backgroundColor: "rgba(128, 128, 128, 0.4)",
                color: "rgba(255, 255, 255, 1)",
                whiteSpace: "nowrap"
              }}
            >
              finance
            </Button>
            <Button
              variant="contained"
              className="pop-search"
              startIcon={<SearchIcon />}
              onClick={(e) => handleClick(e)}
              sx={{
                backgroundColor: "rgba(128, 128, 128, 0.4)",
                color: "rgba(255, 255, 255, 1)",
                whiteSpace: "nowrap"
              }}
            >
              real estate
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
    margin: 0 6px;
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
`;
