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

function jobCard({ results }) {
  //   <JobCard
  //   jobTitle={results[0].MatchedObjectDescriptor.PositionTitle}
  //   salary={`$${Math.round(
  //     results[0].MatchedObjectDescriptor.PositionRemuneration[0]
  //       .MinimumRange
  //   )} - $${Math.round(
  //     results[0].MatchedObjectDescriptor.PositionRemuneration[0]
  //       .MaximumRange
  //   )}`}
  //   desc={results[0].MatchedObjectDescriptor.QualificationSummary}
  //   link={results[0].MatchedObjectDescriptor.PositionURI}
  // />
  return (
    <>
      {results.map((item, index) => (
        <Card key={index}>
          <h3>{item.MatchedObjectDescriptor.PositionTitle}</h3>
          <h4>{item.MatchedObjectDescriptor.PositionLocationDisplay}</h4>
          <h4>{`$${Math.round(
            item.MatchedObjectDescriptor.PositionRemuneration[0]
              .MinimumRange
          ).toLocaleString()} - $${Math.round(
            item.MatchedObjectDescriptor.PositionRemuneration[0]
              .MaximumRange
          ).toLocaleString()}`}</h4>
          <section>
            <p>{item.MatchedObjectDescriptor.QualificationSummary}</p>
          </section>
          <Button
          variant='outlined'
          ><a target='_blank' href={item.MatchedObjectDescriptor.PositionURI}>Apply Here!</a>
          </Button>
        </Card>
      ))}
    </>
  );
}

export default jobCard;

const Card = styled.div`
  background-color: white;
  color: black;
  min-width: 400px;
  width: 400px;
  height: 475px;
  padding: 25px;
  margin: 25px 15px;
  border-radius: 8px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;

  a{
    padding: 0;
    text-decoration: none;
    color: black;
  }

  section {
    height: 250px;
    overflow-y: auto;
    margin-bottom: 
  }

  Button{
   width: 140px;
   height: 50px !important;
   margin: 0 auto;
   margin-top: 20px;
  }

  h3{
    font-size: 90%;
    height: 45px;
    margin: 12px 0; 
  }

  h4 {
    color: black !important;
    margin: 10px 0;
  }
`;

