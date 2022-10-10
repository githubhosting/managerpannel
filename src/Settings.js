import * as React from 'react';
import { Card, CardContent } from '@mui/material';
import { Title } from 'react-admin';

const Settings = () => (
  <Card
    sx={{
      mt: 3,
      ml: 1,
      mr: 1,
      boxShadow: 3,
      borderRadius: 2,
    }}
  >
    <Title title="Settings" />
    <CardContent>Settings Page</CardContent>
  </Card>
);

export default Settings;
// // import * as React from 'react';
// import 'firebase/compat/firestore';
// import firebase from 'firebase/compat/app';
// import PropTypes from 'prop-types';
// import Box from '@mui/material/Box';
// import Collapse from '@mui/material/Collapse';
// import IconButton from '@mui/material/IconButton';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Typography from '@mui/material/Typography';
// import Paper from '@mui/material/Paper';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import React, { useState, useEffect } from 'react';

// function createData(name, calories, fat, carbs, protein, price) {
//   return {
//     name,
//     calories,
//     fat,
//     carbs,
//     protein,
//     price,
//     history: [
//       {
//         date: '2020-01-05',
//         customerId: '11091700',
//         amount: 3,
//       },
//       {
//         date: '2020-01-02',
//         customerId: 'Anonymous',
//         amount: 1,
//       },
//     ],
//   };
// }

// function Row(props) {
//   const { row } = props;
//   const [open, setOpen] = React.useState(false);
//   const [cinemas, setCinemas] = useState([]);
//   const [cooks, setCooks] = useState([]);
//   const [selectedCinema, setSelectedCinema] = useState();
//   const [selectedCook, setSelectedCook] = useState();
//   const [movies, setMovies] = useState([]);
//   const [menu, setMenu] = useState([]);
//   const [error, setError] = useState();
//   const selectCook = (cook) => {
//     setSelectedCook(cook);
//     database
//       .collection('Cooks')
//       .doc(cook.id)
//       .collection('Menu')
//       .get()
//       .then((response) => {
//         const fetchedMenu = [];
//         response.forEach((document) => {
//           const fetchedMenuItem = {
//             id: document.id,
//             ...document.data(),
//           };
//           fetchedMenu.push(fetchedMenuItem);
//         });
//         setMenu(fetchedMenu);
//       })
//       .catch((error) => {
//         setError(error);
//       });
//   };

//   const timestampToString = (timestamp) => {
//     return Date(timestamp).toString();
//   };

//   useEffect(() => {
//     database
//       .collection('Cooks')
//       .get()
//       .then((response) => {
//         const fetchedCooks = [];
//         response.docs.forEach((document) => {
//           const fetchedCook = {
//             id: document.id,
//             ...document.data(),
//           };
//           fetchedCooks.push(fetchedCook);
//         });
//         setCooks(fetchedCooks);
//       })
//       .catch((error) => {
//         setError(error);
//       });
//   }, []);

//   return (
//     <React.Fragment>
//       <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
//         <TableCell>
//           <IconButton
//             aria-label="expand row"
//             size="small"
//             onClick={() => setOpen(!open)}
//           >
//             {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
//           </IconButton>
//         </TableCell>
//         <TableCell component="th" scope="row">
//           {row.name}
//         </TableCell>
//         <TableCell align="right">{row.calories}</TableCell>
//         <TableCell align="right">{row.fat}</TableCell>
//         <TableCell align="right">{row.carbs}</TableCell>
//         <TableCell align="right">{row.protein}</TableCell>
//       </TableRow>
//       <TableRow>
//         <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
//           <Collapse in={open} timeout="auto" unmountOnExit>
//             <Box sx={{ margin: 1 }}>
//               <Typography variant="h6" gutterBottom component="div">
//                 History
//               </Typography>
//               <Table size="small" aria-label="purchases">
//                 <TableHead>
//                   <TableRow>
//                     <TableCell>Date</TableCell>
//                     <TableCell>Customer</TableCell>
//                     <TableCell align="right">Amount</TableCell>
//                     <TableCell align="right">Total price ($)</TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {menu.map((menuItem) => (
//                     <TableRow key={menuItem.id}>
//                       <TableCell component="th" scope="row">
//                       {menuItem.Dal_Dinner}
//                       </TableCell>
//                       <TableCell>{menuItem.Dal_Dinner}</TableCell>
//                       <TableCell align="right">{menuItem.Dal_Dinner}</TableCell>
//                       <TableCell align="right">
//                       {menuItem.Dal_Dinner}
//                       </TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </Box>
//           </Collapse>
//         </TableCell>
//       </TableRow>
//     </React.Fragment>
//   );
// }

// Row.propTypes = {
//   row: PropTypes.shape({
//     calories: PropTypes.number.isRequired,
//     carbs: PropTypes.number.isRequired,
//     fat: PropTypes.number.isRequired,
//     history: PropTypes.arrayOf(
//       PropTypes.shape({
//         amount: PropTypes.number.isRequired,
//         customerId: PropTypes.string.isRequired,
//         date: PropTypes.string.isRequired,
//       })
//     ).isRequired,
//     name: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     protein: PropTypes.number.isRequired,
//   }).isRequired,
// };

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
//   createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
//   createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
//   createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
// ];

// const firebaseConfig = {
//   // apiKey: "AIzaSyACyiB2f-Sl8fbez4sjwBxJwn-eGadnXcg",
//   // authDomain: "auth-44578.firebaseapp.com",
//   // projectId: "auth-44578",
//   // storageBucket: "auth-44578.appspot.com",
//   // messagingSenderId: "595971213871",
//   // appId: "1:595971213871:web:432717a56846feb84a14da",
//   // measurementId: "G-BJWWD8H4BX",
//   apiKey: 'AIzaSyCnlpD5DSecqNQzgwwUUbW-BZyz-FuIlb0',
//   authDomain: 'foodey-63192.firebaseapp.com',
//   databaseURL: 'https://foodey-63192-default-rtdb.firebaseio.com',
//   projectId: 'foodey-63192',
//   storageBucket: 'foodey-63192.appspot.com',
//   messagingSenderId: '1056375278651',
//   appId: '1:1056375278651:web:5784ec975990b10c65a01e',
//   measurementId: 'G-G77NTF3JMK',
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// const database = firebase.firestore();

// export default function CollapsibleTable() {
//   const [cinemas, setCinemas] = useState([]);
//   const [cooks, setCooks] = useState([]);
//   const [selectedCinema, setSelectedCinema] = useState();
//   const [selectedCook, setSelectedCook] = useState();
//   const [movies, setMovies] = useState([]);
//   const [menu, setMenu] = useState([]);
//   const [error, setError] = useState();
//   const selectCook = (cook) => {
//     setSelectedCook(cook);
//     database
//       .collection('Cooks')
//       .doc(cook.id)
//       .collection('Menu')
//       .get()
//       .then((response) => {
//         const fetchedMenu = [];
//         response.forEach((document) => {
//           const fetchedMenuItem = {
//             id: document.id,
//             ...document.data(),
//           };
//           fetchedMenu.push(fetchedMenuItem);
//         });
//         setMenu(fetchedMenu);
//       })
//       .catch((error) => {
//         setError(error);
//       });
//   };

//   const timestampToString = (timestamp) => {
//     return Date(timestamp).toString();
//   };

//   useEffect(() => {
//     database
//       .collection('Cooks')
//       .get()
//       .then((response) => {
//         const fetchedCooks = [];
//         response.docs.forEach((document) => {
//           const fetchedCook = {
//             id: document.id,
//             ...document.data(),
//           };
//           fetchedCooks.push(fetchedCook);
//         });
//         setCooks(fetchedCooks);
//       })
//       .catch((error) => {
//         setError(error);
//       });
//   }, []);
//   return (
//     <TableContainer component={Paper}>
//       <Table aria-label="collapsible table">
//         <TableHead>
//           <TableRow>
//             <TableCell />
//             <TableCell>Dessert (100g serving)</TableCell>
//             <TableCell align="right">Calories</TableCell>
//             <TableCell align="right">Fat&nbsp;(g)</TableCell>
//             <TableCell align="right">Carbs&nbsp;(g)</TableCell>
//             <TableCell align="right">Protein&nbsp;(g)</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <Row key={row.name} row={row} />
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }
