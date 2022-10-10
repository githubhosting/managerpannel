import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Title } from 'react-admin';
import styles from './styles.css';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import 'firebase/compat/firestore';
import firebase from 'firebase/compat/app';

const firebaseConfig = {
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

// const Webdata = () => (
//   <Card
//     sx={{
//       mt: 3,
//       ml: 1,
//       mr: 1,
//       boxShadow: 3,
//       borderRadius: 2,
//     }}
//   >
//     <Title title="Settings" />
//     <CardContent>Settings Page</CardContent>
//   </Card>
// );

// export default Webdata;
export default () => {
  const [clients, setClients] = React.useState([]);
  const [milestones, setMilestones] = React.useState([]);

  React.useEffect(() => {
    database
      .collection('clients')
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        setClients(data);
      });
  }, []);
  React.useEffect(() => {
    database
      .collection('milestones')
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        setMilestones(data);
      });
  }, []);
  return (
    <>
      <Card
        sx={{
          mt: 3,
          ml: 1,
          mr: 1,
          boxShadow: 3,
          borderRadius: 2,
        }}
      >
        <CardContent>
          <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
            Number of Customers:
          </Typography>
          {clients.map((client) => (
            <Typography sx={{ mt: 2, fontSize: 20 }} color="text.primary">
              {client.content}
            </Typography>
          ))}
          <Button
            sx={{ mt: 2 }}
            variant="contained"
            href="/#/clients/FELNFM8hy4ipnF6Zt8uj/show"
          >
            Change This
          </Button>
        </CardContent>
        <CardContent>
          <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
            Milestones:
          </Typography>
          {milestones.map((milestone) => (
            <Typography sx={{ mt: 2, fontSize: 20 }} color="text.primary">
              {milestone.title}: {milestone.amount}
            </Typography>
          ))}
          <Button sx={{ mt: 2 }} variant="contained" href="/#/milestones">
            Change This
          </Button>
          <br></br>
          <Button
            href="/#/faqs"
            size="medium"
            variant="contained"
            boxShadow="2"
            sx={{ mt: 2, mb: 1 }}
          >
            Edit FAQ's
          </Button>
        </CardContent>
      </Card>
    </>
  );
};
