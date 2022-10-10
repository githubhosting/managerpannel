import React, { useState, useEffect } from 'react';
// import "./App.css";

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
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
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
import { useMediaQuery } from '@mui/material';

const firebaseConfig = {
  // apiKey: 'AIzaSyACyiB2f-Sl8fbez4sjwBxJwn-eGadnXcg',
  // authDomain: 'auth-44578.firebaseapp.com',
  // projectId: 'auth-44578',
  // storageBucket: 'auth-44578.appspot.com',
  // messagingSenderId: '595971213871',
  // appId: '1:595971213871:web:432717a56846feb84a14da',
  // measurementId: 'G-BJWWD8H4BX',
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

const Cookorder = () => {
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
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClickListItem = (event) => {
    setOpen(true);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <>
      <List
        sx={{
          borderRadius: 5,
          mt: 4,
          display: 'flex',
          flexDirection: 'column',
          mb: 2,
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
        {orders.map((orderItem) => (
          <Box>
            {orderItem.Friday ? (
              <Box>
                <ListItem>
                  {orderItem.id}
                  <br></br>
                  Friday:<br></br>
                  Carbs:{orderItem.Friday.Carbs}
                  <br></br>
                  Carbs_Dinner:{orderItem.Friday.Carbs_Dinner}
                  <br></br>
                  Dry:{orderItem.Friday.Dry}
                  <br></br>
                  Dry_Dinner:{orderItem.Friday.Dry_Dinner}
                  <br></br>
                  Gravy:{orderItem.Friday.Gravy}
                  <br></br>
                  Gravy_Dinner:{orderItem.Friday.Gravy_Dinner}
                  <br></br>
                </ListItem>
              </Box>
            ) : (
              <ListItem>
                <ListItemText primary={'No Orders'} />
              </ListItem>
            )}
          </Box>
        ))}
      </List>
    </>
  );
};
export default Cookorder;
