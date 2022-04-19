import React, { useState } from "react";
import ReactDOM from "react-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import Grid from "@mui/material/Grid";
import styled from "styled-components";
import axios from "axios";
import JobCard from "./JobCard";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const Home = () => {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const [results, setResults] = useState([]);

  function handleClick(e) {
    console.log("It worked");
    e.target.classList.toggle("clicked");
  }

  function getJobs() {
    console.log("This is the Search and Location", search, location);
    axios
      .get(
        `https://data.usajobs.gov/api/search?Keyword=${search}&LocationName=${location}&ResultsPerPage=100`,
        {
          headers: {
            "Authorization-Key": "RfNibr7lLoJZ9SKS6mJShB2MUCLGW2Zuza31kkb9swM=",
          },
        }
      )
      .then(function (response) {
        console.log("This is the API response", response);
        setResults(response.data.SearchResult.SearchResultItems);
      });
  }

  return (
    <div className="compat-container">
      <main>
        <div>
          <h1>Discover Compatibility!</h1>
        </div>
        <Container>
          <form
            className="search-form"
            onSubmit={function (e) {
              e.preventDefault();
              getJobs();
              setIsSearch(true);
            }}
          >
            <TextField
              InputProps={{
                sx: { borderRadius: "8px 0px 0px 8px" },
              }}
              id="outlined-basic companies"
              placeholder="Search jobs, keywords or companies"
              variant="outlined"
              sx={{
                backgroundColor: "white",
                borderRadius: "8px 0px 0px 8px",
                width: "400px",
              }}
              onChange={function (e) {
                setSearch(e.target.value);
              }}
            />
            <TextField
              InputProps={{
                sx: { borderRadius: "0px 0px 0px 0px" },
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
                type="submit"
              >
                Search
              </Button>
            </ButtonGroup>
          </form>
        </Container>

        {results[0] ? (
          <JobWindow>
            <Carousel>
              <JobCard results={results} />
            </Carousel>
            <CloseButton 
              onClick={() => setResults([])}
            />
          </JobWindow>
        ) : (
          <>
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
                    whiteSpace: "nowrap",
                  }}
                >
                  Remote Work
                </Button>
                <Button
                  variant="contained"
                  className="pop-search"
                  startIcon={<SearchIcon />}
                  onClick={(e) => handleClick(e)}
                  sx={{
                    backgroundColor: "rgba(128, 128, 128, 0.4)",
                    color: "rgba(255, 255, 255, 1)",
                    whiteSpace: "nowrap",
                  }}
                >
                  Education
                </Button>
                <Button
                  variant="contained"
                  className="pop-search"
                  startIcon={<SearchIcon />}
                  onClick={(e) => handleClick(e)}
                  sx={{
                    backgroundColor: "rgba(128, 128, 128, 0.4)",
                    color: "rgba(255, 255, 255, 1)",
                    whiteSpace: "nowrap",
                  }}
                >
                  Software Development
                </Button>
                <Button
                  variant="contained"
                  className="pop-search"
                  startIcon={<SearchIcon />}
                  onClick={(e) => handleClick(e)}
                  sx={{
                    backgroundColor: "rgba(128, 128, 128, 0.4)",
                    color: "rgba(255, 255, 255, 1)",
                    whiteSpace: "nowrap",
                  }}
                >
                  Finance
                </Button>
                <Button
                  variant="contained"
                  className="pop-search"
                  startIcon={<SearchIcon />}
                  onClick={(e) => handleClick(e)}
                  sx={{
                    backgroundColor: "rgba(128, 128, 128, 0.4)",
                    color: "rgba(255, 255, 255, 1)",
                    whiteSpace: "nowrap",
                  }}
                >
                  Real Estate
                </Button>
              </PopularSearch>
            </PopularGroup>
          </>
        )}
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

const Carousel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  overflow-x: auto;
  overflow-y: hidden;
  width: 1300px;
`;

const JobWindow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CloseButton = styled(ExpandLessIcon)`
  margin: 0 auto;
  font-size: 60px;
  cursor: pointer;
  color: white;
  animation: animateDown infinite 1.5s;
`;
