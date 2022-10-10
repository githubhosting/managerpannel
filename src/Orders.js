import React, { useState, useEffect } from 'react';
// import "./App.css";
import { makeStyles } from '@material-ui/core/styles';
// import firebase from "firebase";
import 'firebase/compat/firestore';
import firebase from 'firebase/compat/app';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { ListItemIcon } from '@material-ui/core';
import ListSubheader from '@mui/material/ListSubheader';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import InboxIcon from '@mui/icons-material/Inbox';
import PersonIcon from '@mui/icons-material/Person';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import { DataGrid } from '@mui/x-data-grid';
import CommentIcon from '@mui/icons-material/Comment';
import Divider from '@mui/material/Divider';
import { Button } from 'react-admin';

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
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
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
  apiKey: 'AIzaSyCnlpD5DSecqNQzgwwUUbW-BZyz-FuIlb0',
  authDomain: 'foodey-63192.firebaseapp.com',
  databaseURL: 'https://foodey-63192-default-rtdb.firebaseio.com',
  projectId: 'foodey-63192',
  storageBucket: 'foodey-63192.appspot.com',
  messagingSenderId: '1056375278651',
  appId: '1:1056375278651:web:5784ec975990b10c65a01e',
  measurementId: 'G-G77NTF3JMK',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();

const CooksMenu1 = () => {
  const [cooks, setCooks] = useState([]);
  const [selectedCook, setSelectedCook] = useState();
  const [orders, setOrders] = useState([]);
  const [selectOrder, setSelectOrder] = useState();

  const [updateorders, updateOrders] = useState([]);
  const [error, setError] = useState();

  const selectcook1 = (cook) => {
    setSelectedCook(cook);
    database
      .collection('Cooks')
      .doc(cook.id)
      .collection('Orders')
      .get()
      .then((response) => {
        const fetchedOrders = [];
        response.forEach((document) => {
          const fetchedOrderItem = {
            id: document.id,
            ...document.data(),
          };
          fetchedOrders.push(fetchedOrderItem);
        });
        setOrders(fetchedOrders);
      })
      .catch((error) => {
        setError(error);
      });
  };
  //to update the cook's orders
  const updateOrder = (order) => {
    database
      .collection('Cooks')
      .doc(selectedCook.id)
      .collection('Orders')
      .doc(order.id)
      .update({
        status: order.status,
      })
      .then(() => {
        updateOrders(orders.map((o) => (o.id === order.id ? order : o)));
      })
      .catch((error) => {
        setError(error);
      });
  };
  //to delete the cook's orders
  const deleteOrder = (order) => {
    database
      .collection('Cooks')
      .doc(selectedCook.id)
      .collection('Orders')
      .doc(order.id)
      .delete()
      .then(() => {
        updateOrders(orders.filter((o) => o.id !== order.id));
      })
      .catch((error) => {
        setError(error);
      });
  };
  //to add new order to the cook's orders
  const addOrder = (order) => {
    database
      .collection('Cooks')
      .doc(selectedCook.id)
      .collection('Orders')
      .add(order)
      .then(() => {
        updateOrders([...orders, order]);
      })
      .catch((error) => {
        setError(error);
      });
  };
  //add order form
  const [addOrderForm, setAddOrderForm] = useState({
    id: '',
    name: '',
    address: '',
    phone: '',
    status: '',
  });
  const handleAddOrderFormChange = (event) => {
    setAddOrderForm({
      ...addOrderForm,
      [event.target.name]: event.target.value,
    });
  };
  const handleAddOrderFormSubmit = (event) => {
    event.preventDefault();
    addOrder(addOrderForm);
    setAddOrderForm({
      id: '',
      name: '',
      address: '',
      phone: '',
      status: '',
    });
  };
  //update order form
  const [updateOrderForm, setUpdateOrderForm] = useState({
    id: '',
    name: '',
    address: '',
    phone: '',
    status: '',
  });
  const handleUpdateOrderFormChange = (event) => {
    setUpdateOrderForm({
      ...updateOrderForm,
      [event.target.name]: event.target.value,
    });
  };
  const handleUpdateOrderFormSubmit = (event) => {
    event.preventDefault();
    updateOrder(updateOrderForm);
    setUpdateOrderForm({
      id: '',
      name: '',
      address: '',
      phone: '',
      status: '',
    });
  };
  //delete order form
  const [deleteOrderForm, setDeleteOrderForm] = useState({
    id: '',
    name: '',
    address: '',
    phone: '',
    status: '',
  });
  const handleDeleteOrderFormChange = (event) => {
    setDeleteOrderForm({
      ...deleteOrderForm,
      [event.target.name]: event.target.value,
    });
  };
  const handleDeleteOrderFormSubmit = (event) => {
    event.preventDefault();
    deleteOrder(deleteOrderForm);
    setDeleteOrderForm({
      id: '',
      name: '',
      address: '',
      phone: '',
      status: '',
    });
  };
  //to get the cooks from the database
  useEffect(() => {
    database

      .collection('Cooks')
      .get()
      .then((response) => {
        const fetchedCooks = [];
        response.forEach((document) => {
          const fetchedCookItem = {
            id: document.id,
            ...document.data(),
          };
          fetchedCooks.push(fetchedCookItem);
        });
        setCooks(fetchedCooks);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);
  //to get the cooks
  useEffect(() => {
    database
      .collection('Cooks')
      .get()
      .then((response) => {
        const fetchedCooks = [];
        response.forEach((document) => {
          const fetchedCookItem = {
            id: document.id,
            ...document.data(),
          };
          fetchedCooks.push(fetchedCookItem);
        });
        setCooks(fetchedCooks);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  // export default CooksMenu1;

  const timestampToString = (timestamp) => {
    return Date(timestamp).toString();
  };

  useEffect(() => {
    database
      .collection('Cooks')
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
  }, []);
  //defiine set open
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
    sticky: {
      position: 'sticky',
      left: 0,
      background: 'white',
      boxShadow: '5px 2px 5px grey',
    },
  });
  const classes = useStyles();

  return (
    <>
      {/* <div>
        <Paper>
          <Table
            sx={{
              mt: '1rem',
            }}
          >
            <TableHead>
              <TableRow>
                <StyledTableCell
                  sx={{
                    mt: 4,
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Typography sx={{ fontSize: '1.5rem' }}>
                    <b>Cooks Name</b>{' '}
                  </Typography>
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cooks.map((cook) => (
                <StyledTableRow key={cook.id}>
                  <StyledTableCell>{cook.Name}</StyledTableCell>
                  <StyledTableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => selectcook1(cook)}
                    >
                      View Orders
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </div> */}
      <div className="App">
        <List
          sx={{
            borderRadius: 5,
            mt: 4,
            display: 'flex',
            flexDirection: 'column',
          }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <>
              <ListSubheader
                sx={{ fontSize: '1.5rem' }}
                disableSticky
                component="div"
                id="nested-list-subheader"
              >
                Cooks
              </ListSubheader>
              <ListSubheader
                sx={{ fontSize: '10px' }}
                disableSticky
                component="div"
                id="nested-list-subheader"
              >
                Click on a Cook to see his Orders
              </ListSubheader>
            </>
          }
        >
          {cooks.map((cook) => (
            <ListItem
              sx={{
                border: 0.5,
                borderRadius: '8px',
                borderColor: 'primary',
                mb: 2,
              }}
              button
              divider
              key={cook.id}
              selected={selectedCook === cook}
              onClick={() => selectcook1(cook)}
            >
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary={cook.Name} />
            </ListItem>
          ))}
        </List>

        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader
              sx={{ fontSize: '1.5rem' }}
              disableSticky
              component="div"
              id="nested-list-subheader"
            >
              Orders
            </ListSubheader>
          }
        >
          <TableContainer component={Paper} button>
            <Table
              divider
              sx={{
                minWidth: 360,
                borderRadius: '1rem',
                boxShadow: '0 0 0.6rem rgba(0,0,0,0.1)',
              }}
              aria-label="customized table"
            >
              <TableHead>
                <TableRow>
                  <StyledTableCell>USERS</StyledTableCell>

                  <StyledTableCell sx={{ fontWeight: 'bold' }} align="left">
                    Friday
                  </StyledTableCell>
                  <StyledTableCell sx={{ fontWeight: 'bold' }} align="left">
                    Saturday
                  </StyledTableCell>
                  <StyledTableCell sx={{ fontWeight: 'bold' }} align="left">
                    Sunday
                  </StyledTableCell>
                  <StyledTableCell sx={{ fontWeight: 'bold' }} align="left">
                    Monday
                  </StyledTableCell>
                  <StyledTableCell sx={{ fontWeight: 'bold' }} align="left">
                    Tuesday
                  </StyledTableCell>
                  <StyledTableCell sx={{ fontWeight: 'bold' }} align="left">
                    Wednesday
                  </StyledTableCell>
                  <StyledTableCell sx={{ fontWeight: 'bold' }} align="left">
                    Thursday
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.map((orderItem) => (
                  <StyledTableRow
                    key={orderItem.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <StyledTableCell
                      sx={{ fontWeight: 'bold' }}
                      component="th"
                      scope="row"
                      className={classes.sticky}
                    >
                      {orderItem.id}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      <List
                        sx={{
                          width: '100%',
                          maxWidth: 360,
                          bgcolor: 'background.paper',
                          borderRadius: '8px',
                          boxShadow: '0 0 0.6rem rgba(0,0,0,0.1)',
                        }}
                      >
                        {orderItem.Friday ? (
                          <>
                            <ListItem>
                              <ListItemText
                                primary={'Carbs'}
                                secondary={orderItem.Friday.Carbs}
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemText
                                primary={'Carbs_Dinner'}
                                secondary={orderItem.Friday.Carbs_Dinner}
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemText
                                primary={'Dry'}
                                secondary={orderItem.Friday.Dry}
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemText
                                primary={'Dry_Dinner'}
                                secondary={orderItem.Friday.Dry_Dinner}
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemText
                                primary={'Gravy'}
                                secondary={orderItem.Friday.Gravy}
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemText
                                primary={'Gravy_Dinner'}
                                secondary={orderItem.Friday.Gravy_Dinner}
                              />
                            </ListItem>
                          </>
                        ) : (
                          <ListItem>
                            <ListItemText primary={'No Orders'} />
                          </ListItem>
                        )}
                      </List>
                    </StyledTableCell>

                    <StyledTableCell align="left">
                      <List
                        sx={{
                          width: '100%',
                          maxWidth: 360,
                          bgcolor: 'background.paper',
                          borderRadius: '8px',
                          boxShadow: '0 0 0.6rem rgba(0,0,0,0.1)',
                        }}
                      >
                        {orderItem.Saturday ? (
                          <>
                            <ListItem>
                              <ListItemText
                                primary={'Carbs'}
                                secondary={orderItem.Saturday.Carbs}
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemText
                                primary={'Carbs_Dinner'}
                                secondary={orderItem.Saturday.Carbs_Dinner}
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemText
                                primary={'Dry'}
                                secondary={orderItem.Saturday.Dry}
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemText
                                primary={'Dry_Dinner'}
                                secondary={orderItem.Saturday.Dry_Dinner}
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemText
                                primary={'Gravy'}
                                secondary={orderItem.Saturday.Gravy}
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemText
                                primary={'Gravy_Dinner'}
                                secondary={orderItem.Saturday.Gravy_Dinner}
                              />
                            </ListItem>
                          </>
                        ) : (
                          <ListItem>
                            <ListItemText primary={'No Orders'} />
                          </ListItem>
                        )}
                      </List>
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      <List
                        sx={{
                          width: '100%',
                          maxWidth: 360,
                          bgcolor: 'background.paper',
                          borderRadius: '8px',
                          boxShadow: '0 0 0.6rem rgba(0,0,0,0.1)',
                        }}
                      >
                        {orderItem.Sunday ? (
                          <>
                            <ListItem>
                              <ListItemText
                                primary={'Carbs'}
                                secondary={orderItem.Sunday.Carbs}
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemText
                                primary={'Carbs_Dinner'}
                                secondary={orderItem.Sunday.Carbs_Dinner}
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemText
                                primary={'Dry'}
                                secondary={orderItem.Sunday.Dry}
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemText
                                primary={'Dry_Dinner'}
                                secondary={orderItem.Sunday.Dry_Dinner}
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemText
                                primary={'Gravy'}
                                secondary={orderItem.Sunday.Gravy}
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemText
                                primary={'Gravy_Dinner'}
                                secondary={orderItem.Sunday.Gravy_Dinner}
                              />
                            </ListItem>
                          </>
                        ) : (
                          <ListItem>
                            <ListItemText primary={'No Orders'} />
                          </ListItem>
                        )}
                      </List>
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      <List
                        sx={{
                          width: '100%',
                          maxWidth: 360,
                          bgcolor: 'background.paper',
                          borderRadius: '8px',
                          boxShadow: '0 0 0.6rem rgba(0,0,0,0.1)',
                        }}
                      >
                        {orderItem.Monday ? (
                          <>
                            <ListItem>
                              <ListItemText
                                primary={'Carbs'}
                                secondary={orderItem.Monday.Carbs}
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemText
                                primary={'Carbs_Dinner'}
                                secondary={orderItem.Monday.Carbs_Dinner}
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemText
                                primary={'Dry'}
                                secondary={orderItem.Monday.Dry}
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemText
                                primary={'Dry_Dinner'}
                                secondary={orderItem.Monday.Dry_Dinner}
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemText
                                primary={'Gravy'}
                                secondary={orderItem.Monday.Gravy}
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemText
                                primary={'Gravy_Dinner'}
                                secondary={orderItem.Monday.Gravy_Dinner}
                              />
                            </ListItem>
                          </>
                        ) : (
                          <ListItem>
                            <ListItemText primary={'No Orders'} />
                          </ListItem>
                        )}
                      </List>
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      <List
                        sx={{
                          width: '100%',
                          maxWidth: 360,
                          bgcolor: 'background.paper',
                          borderRadius: '8px',
                          boxShadow: '0 0 0.6rem rgba(0,0,0,0.1)',
                        }}
                      >
                        {orderItem.Tuesday ? (
                          <>
                            <ListItem>
                              <ListItemText
                                primary={'Carbs'}
                                secondary={orderItem.Tuesday.Carbs}
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemText
                                primary={'Carbs_Dinner'}
                                secondary={orderItem.Tuesday.Carbs_Dinner}
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemText
                                primary={'Dry'}
                                secondary={orderItem.Tuesday.Dry}
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemText
                                primary={'Dry_Dinner'}
                                secondary={orderItem.Tuesday.Dry_Dinner}
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemText
                                primary={'Gravy'}
                                secondary={orderItem.Tuesday.Gravy}
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemText
                                primary={'Gravy_Dinner'}
                                secondary={orderItem.Tuesday.Gravy_Dinner}
                              />
                            </ListItem>
                          </>
                        ) : (
                          <ListItem>
                            <ListItemText primary={'No Orders'} />
                          </ListItem>
                        )}
                      </List>
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      <List
                        sx={{
                          width: '100%',
                          maxWidth: 360,
                          bgcolor: 'background.paper',
                          borderRadius: '8px',
                          boxShadow: '0 0 0.6rem rgba(0,0,0,0.1)',
                        }}
                      >
                        {orderItem.Wednesday ? (
                          <>
                            <ListItem>
                              <ListItemText
                                primary={'Carbs'}
                                secondary={orderItem.Wednesday.Carbs}
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemText
                                primary={'Carbs_Dinner'}
                                secondary={orderItem.Wednesday.Carbs_Dinner}
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemText
                                primary={'Dry'}
                                secondary={orderItem.Wednesday.Dry}
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemText
                                primary={'Dry_Dinner'}
                                secondary={orderItem.Wednesday.Dry_Dinner}
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemText
                                primary={'Gravy'}
                                secondary={orderItem.Wednesday.Gravy}
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemText
                                primary={'Gravy_Dinner'}
                                secondary={orderItem.Wednesday.Gravy_Dinner}
                              />
                            </ListItem>
                          </>
                        ) : (
                          <ListItem>
                            <ListItemText primary={'No Orders'} />
                          </ListItem>
                        )}
                      </List>
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      <List
                        sx={{
                          width: '100%',
                          maxWidth: 360,
                          bgcolor: 'background.paper',
                          borderRadius: '8px',
                          boxShadow: '0 0 0.6rem rgba(0,0,0,0.1)',
                        }}
                      >
                        {orderItem.Thursday ? (
                          <>
                            <ListItem>
                              <ListItemText
                                primary={'Carbs'}
                                secondary={orderItem.Thursday.Carbs}
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemText
                                primary={'Carbs_Dinner'}
                                secondary={orderItem.Thursday.Carbs_Dinner}
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemText
                                primary={'Dry'}
                                secondary={orderItem.Thursday.Dry}
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemText
                                primary={'Dry_Dinner'}
                                secondary={orderItem.Thursday.Dry_Dinner}
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemText
                                primary={'Gravy'}
                                secondary={orderItem.Thursday.Gravy}
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemText
                                primary={'Gravy_Dinner'}
                                secondary={orderItem.Thursday.Gravy_Dinner}
                              />
                            </ListItem>
                          </>
                        ) : (
                          <ListItem>
                            <ListItemText primary={'No Orders'} />
                          </ListItem>
                        )}
                      </List>
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

// import * as React from 'react';
// import Link from '@mui/material/Link';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Title from './Title';

// // Generate Order Data
// function createData(id, date, name, shipTo, paymentMethod, amount) {
//   return { id, date, name, shipTo, paymentMethod, amount };
// }

// const rows = [
//   createData(
//     0,
//     '16 Mar, 2019',
//     'Elvis Presley',
//     'Tupelo, MS',
//     'VISA ⠀•••• 3719',
//     312.44,
//   ),
//   createData(
//     1,
//     '16 Mar, 2019',
//     'Paul McCartney',
//     'London, UK',
//     'VISA ⠀•••• 2574',
//     866.99,
//   ),
//   createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
//   createData(
//     3,
//     '16 Mar, 2019',
//     'Michael Jackson',
//     'Gary, IN',
//     'AMEX ⠀•••• 2000',
//     654.39,
//   ),
//   createData(
//     4,
//     '15 Mar, 2019',
//     'Bruce Springsteen',
//     'Long Branch, NJ',
//     'VISA ⠀•••• 5919',
//     212.79,
//   ),
// ];

// function preventDefault(event) {
//   event.preventDefault();
// }

// export default function Orders() {
//   return (
//     <React.Fragment>
//       <Title>Recent Orders</Title>
//       <Table size="small">
//         <TableHead>
//           <TableRow>
//             <TableCell>Date</TableCell>
//             <TableCell>Name</TableCell>
//             <TableCell>Ship To</TableCell>
//             <TableCell>Payment Method</TableCell>
//             <TableCell align="right">Sale Amount</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow key={row.id}>
//               <TableCell>{row.date}</TableCell>
//               <TableCell>{row.name}</TableCell>
//               <TableCell>{row.shipTo}</TableCell>
//               <TableCell>{row.paymentMethod}</TableCell>
//               <TableCell align="right">{`$${row.amount}`}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//       <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
//         See more orders
//       </Link>
//     </React.Fragment>
//   );
// }
