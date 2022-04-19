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
          <h4>{`$${Math.round(
            item.MatchedObjectDescriptor.PositionRemuneration[0]
              .MinimumRange
          )} - $${Math.round(
            item.MatchedObjectDescriptor.PositionRemuneration[0]
              .MaximumRange
          )}`}</h4>
          <section>
            <p>{item.MatchedObjectDescriptor.QualificationSummary}</p>
          </section>
          <a href={item.MatchedObjectDescriptor.PositionURI}>Apply Here!</a>
        </Card>
      ))}
    </>
  );
}

export default jobCard;

const Card = styled.div`
  background-color: white;
  color: black;
  min-width: 345px;
  width: 345px;
  height: 425px;
  padding: 25px;
  margin: 25px 15px;
  border-radius: 8px;
  text-align: left;

  section {
    height: 250px;
    overflow-y: auto;
  }

  h4 {
    color: black !important;
  }
`;
