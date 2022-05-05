import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import styled from "styled-components";
import axios from "axios";
import JobCard from "./JobCard";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Alert from "@mui/material/Alert";
import env from "react-dotenv";

const Home = () => {
  
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [results, setResults] = useState([]);
  const [userLocation, setUserLocation] = useState("");
  const [resultCount, setResultCount] = useState(1);

  useEffect(() => {
    let Lat;
    let Long;

    navigator.geolocation.getCurrentPosition(function (position) {
      Lat = position.coords.latitude;
      Long = position.coords.longitude;
      console.log("Latitude is :", Lat);
      console.log("Longitude is :", Long);

      axios
        .get(
          `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${Lat}&lon=${Long}`
        )
        .then(function (response) {
          console.log(response)
          console.log(response.data.address.city ? response.data.address.city : response.data.address.town, response.data.address.state)
          setUserLocation(
            `${response.data.address.city ? response.data.address.city : response.data.address.town}, ${response.data.address.state}`
          );
        });
    });
  }, []);

  function getJobs() {
    axios
      .get(
        `https://data.usajobs.gov/api/search?Keyword=${search}&LocationName=${
          location ? location : userLocation
        }&ResultsPerPage=100`,
        {
          headers: {
            "Authorization-Key": process.env.REACT_APP_USA_JOBS,
          },
        }
      )
      .then(function (response) {
        console.log("This is the Search and Location", search, location);
        console.log("This is the API response", response);
        setResultCount(response.data.SearchResult.SearchResultCount);
        setResults(response.data.SearchResult.SearchResultItems);
      });
  }

  function getPopJobs(keyWord) {
    axios
      .get(
        `https://data.usajobs.gov/api/search?Keyword=${keyWord}&LocationName=${userLocation}&ResultsPerPage=100`,
        {
          headers: {
            "Authorization-Key": env.REACT_APP_USA_JOBS,
          },
        }
      )
      .then(function (response) {
        console.log("This is the Search and Location", search, location);
        console.log("This is the API response", response);
        setResultCount(response.data.SearchResult.SearchResultCount);
        setResults(response.data.SearchResult.SearchResultItems);
      });
  }

  const theme = createTheme({
    breakpoints: {
      values: {
        mobile: 780,
        tablet: 900,
        desktop: 1200,
      },
    },
  });

  return (
    <div className="compat-container">
      <main>
        <div>
          <h1>Discover Compatibility!</h1>
        </div>
        <Container>
          <form
            id="search-form"
            className="search-form"
            onSubmit={function (e) {
              e.preventDefault();
              getJobs();
            }}
          >
            {/* Search Jobs Bar */}
            <TextField
              InputProps={{
                sx: { borderRadius: "8px 0px 0px 8px" },
              }}
              id="outlined-basic companies"
              placeholder="Search jobs or keywords"
              variant="outlined"
              sx={{
                backgroundColor: "white",
                borderRadius: "8px 0px 0px 8px",
                [theme.breakpoints.down('mobile')]: {
                  fontSize: '30px',
                  width: '80px',
                  
                },
                [theme.breakpoints.between('mobile', 'tablet')]: {
                  fontSize: '30px',
                  width: '100px',
                  
                },
                [theme.breakpoints.between('tablet', 'desktop')]: {
                  fontSize: '30px',
                  width: '200px',
                  
                },
                [theme.breakpoints.up('desktop')]: {
                  fontSize: '30px',
                  width: '400px'
                }

              }}
              onChange={function (e) {
                setSearch(e.target.value);
              }}
            />
            {/* Search Location Bar */}
            <TextField
              InputProps={{
                sx: { borderRadius: "0px 0px 0px 0px" },
              }}
              id="outlined-basic locations"
              placeholder="Enter location"
              variant="outlined"
              defaultValue={userLocation}
              sx={{
                backgroundColor: "white",
                borderRadius: "0px 0px 0px 0px",
                [theme.breakpoints.down('mobile')]: {
                  fontSize: '30px',
                  width: '80px',
                  
                },
                [theme.breakpoints.between('mobile', 'tablet')]: {
                  fontSize: '30px',
                  width: '100px',
                  
                },
                [theme.breakpoints.between('tablet', 'desktop')]: {
                  fontSize: '30px',
                  width: '200px',
                  
                },
                [theme.breakpoints.up('desktop')]: {
                  fontSize: '30px',
                  width: '400px'
                }
              }}
              onChange={function (e) {
                setLocation(e.target.value);
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
                sx={{
                  [theme.breakpoints.down('mobile')]: {
                    fontSize: '14px',
                    width: '80px',
                    svg: {
                      display: 'none'
                    }
                    
                  },
                  [theme.breakpoints.between('mobile', 'tablet')]: {
                   
                    
                  },
                  [theme.breakpoints.between('tablet', 'desktop')]: {
                    
                    
                  },
                  [theme.breakpoints.up('desktop')]: {
                    
                  }
                }}
              >
                Search
              </Button>
            </ButtonGroup>
          </form>
        </Container>
        {resultCount ? null : (
          <Alert
            sx={{ margin: "0 20px" }}
            id="no-result"
            severity="error"
          >{`0 results for ${search} in ${location ? location : userLocation}`}</Alert>
        )}
        {results[0] ? (
          <JobWindow>
            <Carousel>
              <JobCard results={results} />
            </Carousel>
            <CloseButton onClick={() => setResults([])} />
          </JobWindow>
        ) : (
          <>
            <h4>Popular Searches Near Me</h4>
            <PopularGroup>
              <PopularSearch>
                <Button
                  variant="contained"
                  className="pop-search"
                  startIcon={<SearchIcon sx={{
                    color: "orange"
                  }}/>}
                  onClick={(e) => getPopJobs(e.target.innerText)}
                  sx={{
                    backgroundColor: "rgba(128, 128, 128, 0.4)",
                    color: "rgba(255, 255, 255, 1)",
                    
                    [theme.breakpoints.down('mobile')]: {
                      minHeight: '29.5px',
                      lineHeight: '1.25',                      
                      whiteSpace: "wrap",
                      width: '120px',
                      fontSize: '10px',
                      svg: {
                        display: 'none'
                      }
                    },
                    [theme.breakpoints.between('mobile', 'tablet')]: {
                      whiteSpace: "nowrap",
                      width: '120px',
                      fontSize: '10px',
                      svg: {
                        display: 'none'
                      }
                    },
                    [theme.breakpoints.up('tablet')]: {
                      whiteSpace: "nowrap"
                    }
                  }}
                >
                  Police Officer
                </Button>
                <Button
                  variant="contained"
                  className="pop-search"
                  startIcon={<SearchIcon sx={{
                    color: "orange"
                  }}/>}
                  onClick={(e) => getPopJobs(e.target.innerText)}
                  sx={{
                    backgroundColor: "rgba(128, 128, 128, 0.4)",
                    color: "rgba(255, 255, 255, 1)",
                    whiteSpace: "nowrap",
                    [theme.breakpoints.down('mobile')]: {
                      minHeight: '29.5px',
                      lineHeight: '1.25',                      
                      whiteSpace: "wrap",
                      width: '120px',
                      fontSize: '10px',
                      svg: {
                        display: 'none'
                      }
                    },
                    [theme.breakpoints.between('mobile','tablet')]: {
                      width: '120px',
                      fontSize: '10px',
                      svg: {
                        display: 'none'
                      }
                    },
                    [theme.breakpoints.up('tablet')]: {
                      
                    }
                  }}
                >
                  Retail
                </Button>
                <Button
                  variant="contained"
                  className="pop-search"
                  startIcon={<SearchIcon sx={{
                    color: "orange"
                  }}/>}
                  onClick={(e) => getPopJobs(e.target.innerText)}
                  sx={{
                    backgroundColor: "rgba(128, 128, 128, 0.4)",
                    color: "rgba(255, 255, 255, 1)",
                    whiteSpace: "wrap",
                    [theme.breakpoints.down('mobile')]: {
                      maxHeight: '29.5px',
                      lineHeight: '1.25',                      
                      whiteSpace: "wrap",
                      width: '120px',
                      fontSize: '10px',
                      svg: {
                        display: 'none'
                      }
                    },
                    [theme.breakpoints.between('mobile', 'tablet')]: {
                      maxHeight: '29.5px',
                      width: '120px',
                      fontSize: '10px',
                      overflowWrap: 'break-word',
                      whiteSpace: 'wrap',
                      lineHeight: '1.25',
                      svg: {
                        display: 'none'
                      }
                    },
                    [theme.breakpoints.up('tablet')]: {
                      whiteSpace: "nowrap"
                    }
                  }}
                >
                  Software Development
                </Button>
                <Button
                  variant="contained"
                  className="pop-search"
                  startIcon={<SearchIcon sx={{
                    color: "orange"
                  }}/>}
                  onClick={(e) => getPopJobs(e.target.innerText)}
                  sx={{
                    backgroundColor: "rgba(128, 128, 128, 0.4)",
                    color: "rgba(255, 255, 255, 1)",
                    whiteSpace: "nowrap",
                    [theme.breakpoints.down('mobile')]: {
                      minHeight: '29.5px',
                      lineHeight: '1.25',                      
                      whiteSpace: "wrap",
                      width: '120px',
                      fontSize: '10px',
                      svg: {
                        display: 'none'
                      }
                    },
                    [theme.breakpoints.between('mobile','tablet')]: {
                      width: '120px',
                      fontSize: '10px',
                      svg: {
                        display: 'none'
                      }
                    },
                    [theme.breakpoints.up('tablet')]: {
                      
                    }
                  }}
                >
                  Education
                </Button>
                <Button
                  variant="contained"
                  className="pop-search"
                  startIcon={<SearchIcon sx={{
                    color: "orange"
                  }}/>}
                  onClick={(e) => getPopJobs(e.target.innerText)}
                  sx={{
                    backgroundColor: "rgba(128, 128, 128, 0.4)",
                    color: "rgba(255, 255, 255, 1)",
                    whiteSpace: "nowrap",
                    [theme.breakpoints.down('mobile')]: {
                      minHeight: '29.5px',
                      lineHeight: '1.25',                      
                      whiteSpace: "wrap",
                      width: '120px',
                      fontSize: '10px',
                      svg: {
                        display: 'none'
                      }
                    },
                    [theme.breakpoints.between('mobile','tablet')]: {
                      width: '120px',
                      fontSize: '10px',
                      svg: {
                        display: 'none'
                      }
                    },
                    [theme.breakpoints.up('tablet')]: {
                      
                    }
                  }}
                >
                  Dentist
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
  @media (max-width: 780px) {
    max-width: 400px;
    flex-direction: column;
    Button {
      margin: 6px 0;
    }
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
  width: 1450px;
  @media (max-width: 950px) {
    width: 750px;
  }
  @media (max-width: 600px) {
    width: 350px;
  }
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
