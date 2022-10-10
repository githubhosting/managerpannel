import React, { useState, useEffect } from "react";
// import "./App.css";

// import firebase from "firebase";
import "firebase/compat/firestore";
import firebase from "firebase/compat/app";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { ListItemIcon } from "@material-ui/core";
import ListSubheader from "@mui/material/ListSubheader";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import InboxIcon from "@mui/icons-material/Inbox";
import PersonIcon from "@mui/icons-material/Person";
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const firebaseConfig = {
  // apiKey: "AIzaSyACyiB2f-Sl8fbez4sjwBxJwn-eGadnXcg",
  // authDomain: "auth-44578.firebaseapp.com",
  // projectId: "auth-44578",
  // storageBucket: "auth-44578.appspot.com",
  // messagingSenderId: "595971213871",
  // appId: "1:595971213871:web:432717a56846feb84a14da",
  // measurementId: "G-BJWWD8H4BX",
  apiKey: "AIzaSyCnlpD5DSecqNQzgwwUUbW-BZyz-FuIlb0",
  authDomain: "foodey-63192.firebaseapp.com",
  databaseURL: "https://foodey-63192-default-rtdb.firebaseio.com",
  projectId: "foodey-63192",
  storageBucket: "foodey-63192.appspot.com",
  messagingSenderId: "1056375278651",
  appId: "1:1056375278651:web:5784ec975990b10c65a01e",
  measurementId: "G-G77NTF3JMK",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();

const CooksMenu1 = () => {
  const [cinemas, setCinemas] = useState([]);
  const [cooks, setCooks] = useState([]);
  const [manager, setManager] = useState([]);
  const [selectedCinema, setSelectedCinema] = useState();
  const [selectedCook, setSelectedCook] = useState();
  const [movies, setMovies] = useState([]);
  const [menu, setMenu] = useState([]);
  const [error, setError] = useState();

  const selectCinema = (cinema) => {
    setSelectedCinema(cinema);
    database
      .collection("cinemas")
      .doc(cinema.id)
      .collection("movies")
      .get()
      .then((response) => {
        const fetchedMovies = [];
        response.forEach((document) => {
          const fetchedMovie = {
            id: document.id,
            ...document.data(),
          };
          fetchedMovies.push(fetchedMovie);
        });
        setMovies(fetchedMovies);
      })
      .catch((error) => {
        setError(error);
      });
    database
      .collection("cinemas")
      .doc(cinema.id)
      .collection("cooks")
      .update({
        cooks: cooks,
      })
      .then(() => {
        console.log("updated");
      })
      .catch((error) => {
        setError(error);
      });
  };
  const selectCook = (cook) => {
    setSelectedCook(cook);
    database
      .collection("Cooks")
      .doc(cook.id)
      .collection("Menu")
      .get()
      .then((response) => {
        const fetchedMenu = [];
        response.forEach((document) => {
          const fetchedMenuItem = {
            id: document.id,
            ...document.data(),
          };
          fetchedMenu.push(fetchedMenuItem);
        });
        setMenu(fetchedMenu);
      })
      .catch((error) => {
        setError(error);
      });
  };

  const timestampToString = (timestamp) => {
    return Date(timestamp).toString();
  };

  useEffect(() => {
    database
      .collection("cinemas")
      .get()
      .then((response) => {
        const fetchedCinemas = [];
        response.docs.forEach((document) => {
          const fetchedCinema = {
            id: document.id,
            ...document.data(),
          };
          fetchedCinemas.push(fetchedCinema);
        });
        setCinemas(fetchedCinemas);
      })
      .catch((error) => {
        setError(error);
      });
    database
      .collection("Cooks")
      .get()
      .then((response) => {
        const fetchedCooks = [];
        response.docs.forEach((document) => {
          const fetchedCook = {
            id: document.id,
            ...document.data(),
          };
          fetchedCooks.push(fetchedCook);
        });
        setCooks(fetchedCooks);
      })
      .catch((error) => {
        setError(error);
      });
    database
      .collection("Manager")
      .get()
      .then((response) => {
        const fetchedManager = [];
        response.docs.forEach((document) => {
          const fetchedManager = {
            id: document.id,
            ...document.data(),
          };
          fetchedManager.push(fetchedManager);
        });
        setManager(fetchedManager);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <div className="App">
        <List
          sx={{
            borderRadius: 5,
            mt: 4,
            display: "flex",
            flexDirection: "column",
          }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <>
              <ListSubheader
                sx={{ fontSize: "1.5rem" }}
                disableSticky
                component="div"
                id="nested-list-subheader"
              >
                Cooks
              </ListSubheader>
              <ListSubheader
                sx={{ fontSize: "10px" }}
                disableSticky
                component="div"
                id="nested-list-subheader"
              >
                Click on a Cook to see his Menu
              </ListSubheader>
            </>
          }
        >
          {cooks.map((cook) => (
            <ListItem
              sx={{
                border: 0.5,
                borderRadius: "8px",
                borderColor: "primary",
                mb: 2,
              }}
              button
              divider
              key={cook.id}
              selected={selectedCook === cook}
              onClick={() => selectCook(cook)}
            >
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary={cook.Name} />
            </ListItem>
          ))}
        </List>
        {/* <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Movies
        </ListSubheader>
      }
    >
      {movies.map((movie) => (
        <ListItem
          button
          key={movie.id}
          selected={selectedCinema === cinema}
          onClick={() => selectCinema(cinema)}
        >
          <ListItemText primary={movie.name} />
        </ListItem>
      ))}
    </List> */}
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader
              sx={{ fontSize: "1.5rem" }}
              disableSticky
              component="div"
              id="nested-list-subheader"
            >
              Menu
            </ListSubheader>
          }
        >
          {/* {menu.map((menuItem) => (
            <ListItem
              button
              key={menuItem.id}
              selected={selectedCook === menu}
              onClick={() => selectCook(menu)}
            >
              <ListItemText primary={menuItem.id} />
              <br></br>
              <ListItemText primary={menuItem.Dal_Dinner} />
              <ListItemText primary={menuItem.Sweet_Dinner} />
              <ListItemText primary={menuItem.Raita_Salad_Dinner} />
            </ListItem>
          ))} */}

          <TableContainer component={Paper} button>
            <Table
              divider
              sx={{
                minWidth: 360,
                borderRadius: "1rem",
                boxShadow: "0 0 0.6rem rgba(0,0,0,0.1)",
              }}
              aria-label="customized table"
            >
              <TableHead>
                <TableRow>
                  <StyledTableCell>Days</StyledTableCell>
                  <StyledTableCell sx={{ fontWeight: "bold" }} align="right">
                    Dal Dinner
                  </StyledTableCell>
                  <StyledTableCell sx={{ fontWeight: "bold" }} align="right">
                    Sweet Dinner
                  </StyledTableCell>
                  <StyledTableCell sx={{ fontWeight: "bold" }} align="right">
                    Raita Salad Dinner
                  </StyledTableCell>
                  <StyledTableCell sx={{ fontWeight: "bold" }} align="right">
                    Dal
                  </StyledTableCell>
                  <StyledTableCell sx={{ fontWeight: "bold" }} align="right">
                    Veg Curry Dry
                  </StyledTableCell>
                  <StyledTableCell sx={{ fontWeight: "bold" }} align="right">
                    Veg Curry Dry Dinner
                  </StyledTableCell>
                  <StyledTableCell sx={{ fontWeight: "bold" }} align="right">
                    Veg Curry Gravy
                  </StyledTableCell>
                  <StyledTableCell sx={{ fontWeight: "bold" }} align="right">
                    Veg Curry Gravy Dinner
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {menu.map((menuItem) => (
                  <StyledTableRow
                    key={menuItem.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <StyledTableCell
                      sx={{ fontWeight: "bold" }}
                      component="th"
                      scope="row"
                    >
                      {menuItem.id}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {menuItem.Dal_Dinner}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {menuItem.Sweet_Dinner}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {menuItem.Raita_Salad_Dinner}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {menuItem.Dal}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <ListItemText>
                        {menuItem.Veg_Curry_Dry.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ListItemText>
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <ListItemText>
                        {menuItem.Veg_Curry_Dry_Dinner.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ListItemText>
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <ListItemText>
                        {menuItem.Veg_Curry_Gravy.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ListItemText>
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <ListItemText>
                        {menuItem.Veg_Curry_Gravy_Dinner.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ListItemText>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </List>
      </div>
    </>
  );
};

export default CooksMenu1;
