##
<p align="center">
<img src="./public/images/Rapscallion2.gif" width="900" height="300">
</p>

## Table of Contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Planning](#planning)
* [Learning](#learning)
* [Getting Started](#getting-started)

## General info 
This project was created in order to help not only the general population but the MCSP-11 Cohort members find job/career paths. 

## Technologies
This Project was created with:
* REACT
* CSS
* JavaScript
* Expess.js
* PSQL
* [MUI](https://mui.com/) Library
* [USA Jobs API](https://developer.usajobs.gov/API-Reference) External API
* [IP GEO API](https://getgeoapi.com/) External API

## Planning
Our plans for this project were fairly straightforward; our team agreed upon using Trello to track tasks for daily updates/visualization of goals. Once we agree upon which tasks needed to be done for the day, we would either split up into groups of two or would all stay together and code share to ensure the larger/complex tasks were done correctly and understood by all team members. Every morning, our team would have a Stand-up meeting to plan out the tasks that should be completed/worked on for the day.

## Learning
This project has expanded our knowledge with the use of libraries, React and external APIs. We've also become much more confident in utilizing the features of MUI as well as the power of external API's to further the interactivity of the site. The feedback form functionality was a task that we thought would be much more difficult than it actually was, and is a feature we plan to continue to implement in future projects.

## Getting Started
Fork and clone this repository:
$ cd into the project, and run $ npm install

$ cd into server, and run $ npm install ====> (NOTE: the reason you need to npm install in the backend folder is to not only split up your backend and frontend dependencies, but to ensure your server has the correct dependencies installed and working)

Getting the database up and running:
Tell psql to run the code in migration.sql using the Terminal. This will create the "rapusers" database and the tables for us:

$ psql -f migration.sql
The above command will "seed" and "create" the database for us; in other words, add some sample data to work with.
(** MUST BE IN SERVER FOLDER**)

Go into your psql repl, connect to the rapusers database and confirm everything is there:

$ psql rapusers
rapusers=# SELECT * FROM users;

Open two seperate terminals and run nodemon server.js in the path "user :rapscallion/backend/server"
and npm run start in the other terminal tab in the path "user:/rapscallion"

## Creators 
1. GROUP LEAD --- [Elijah Palmer](https://www.linkedin.com/in/elijah-palmer/)
2. ASSISTANT GROUP LEAD --- [Anjali Thing](https://www.linkedin.com/in/anjali-thing/)
3. JUNIOR ENGINEER/PEASANT --- [Trevor Mulvany](https://www.linkedin.com/in/trevor-mulvany/)
4. JUNIOR ENGINEER --- [Natan Rincon Luna](https://www.linkedin.com/in/natanrinconluna)