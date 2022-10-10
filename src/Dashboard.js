import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Title } from "react-admin";
import styles from "./styles.css";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
// import { phnumber } from "./CustomLoginPage";
import firebase from "firebase/compat/app";

export default () => {
  const [users, setUsers] = React.useState([]);
  const [managers, setManagers] = React.useState([]);
  const [phnumber, setPhnumber] = React.useState("");
  const [name, setName] = React.useState("");

  React.useEffect(() => {
    const db = firebase.firestore();
    const unsubscribe = db.collection("Users").onSnapshot((snapshot) => {
      const users = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsers(users);
    });
    return unsubscribe;
  }, []);

  React.useEffect(() => {
    const db = firebase.firestore();
    const unsubscribe = db.collection("Managers").onSnapshot((snapshot) => {
      const managers = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setManagers(managers);
    });
    return unsubscribe;
  }, []);

  const userphone = users.map((user) => user.phone);
  const usernumbers = userphone.map((user) => user);
  console.log(usernumbers);

  const managername = managers.map((manager) => manager.Name);
  const managername2 = managername.map((name) => name);
  console.log(managername2);

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
            Your phone number is{" "}
            {firebase.auth().onAuthStateChanged((user) => {
              const number = user.phoneNumber;
              console.log(number);
              setPhnumber(number);
            })}
            
            
          </Typography>
          <br />
          <Typography variant="h5" component="div">
            <b>Foodingo</b> Private Limited
          </Typography>
          <Typography variant="body2" component="p">
            {/* {users.map((user) => (
              <div key={user.id}>
                <p>{user.name}</p>
              </div>
            ))} */}
          </Typography>
          <br />
          <Typography sx={{ mt: 2 }} color="text.secondary">
            Website made by{" "}
            <Link
              sx={{ fontWeight: 600, fontStyle: "Didot" }}
              href="https://myselfshravan.github.io"
              underline="none"
            >
              {"Shravan"}
            </Link>
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ mt: 3, ml: 1, mr: 1, mb: 0, boxShadow: 2, borderRadius: 1 }}>
        <CardActions>
          <Button
            href="/#/Users"
            size="medium"
            variant="contained"
            boxShadow="2"
            sx={{ mt: 1, ml: 1, mr: 1, mb: 1 }}
          >
            Users
          </Button>
          <Button
            href="/#/Cooks"
            size="medium"
            variant="contained"
            boxShadow="2"
            sx={{ mt: 1, ml: 1, mr: 1, mb: 1 }}
          >
            Cooks
          </Button>
          <Button
            href="/#/Blogs"
            size="medium"
            variant="contained"
            boxShadow="2"
            sx={{ mt: 1, ml: 1, mr: 1, mb: 1 }}
          >
            Blogs
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

//   <>
//     <Card
//       sx={{
//         mt: 3,
//         ml: 1,
//         mr: 1,
//         boxShadow: 3,
//         borderRadius: 2,
//         // width: {
//         //   xs: 300, // theme.breakpoints.up('xs')
//         //   sm: 400, // theme.breakpoints.up('sm')
//         //   md: 500, // theme.breakpoints.up('md')
//         //   lg: 600, // theme.breakpoints.up('lg')
//         //   xl: 700, // theme.breakpoints.up('xl')
//         // },
//       }}
//     >
//       <CardContent>
//         <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
//           Welcome to Admin Webpage
//         </Typography>
//         <br />
//         <Typography variant="h5" component="div">
//           Indigo Infrastructures Private Limited
//         </Typography>
//         <br />
//         <Typography sx={{ mt: 2 }} color="text.secondary">
//           Website made by{' '}
//           <Link
//             sx={{ fontWeight: 600, fontStyle: 'Didot' }}
//             href="https://myselfshravan.github.io"
//             underline="none"
//           >
//             {'Shravan'}
//           </Link>
//         </Typography>
//         {/* <Typography variant="body2">
//       well meaning and kindly.
//       <br />
//       {'"a benevolent smile"'}
//     </Typography> */}
//       </CardContent>
//     </Card>
//     <Card>
//       {clients.map((item, index) => (
//         <Text as="h2" content={item.content} />
//       ))}
//     </Card>
//     <Card sx={{ mt: 3, ml: 1, mr: 1, mb: 0, boxShadow: 2, borderRadius: 1 }}>
//       <CardActions>
//         <Button
//           href="/#/Users"
//           size="medium"
//           variant="contained"
//           boxShadow="2"
//           sx={{ mt: 1, ml: 1, mr: 1, mb: 1 }}
//         >
//           Users
//         </Button>
//         <Button
//           href="/#/Cooks"
//           size="medium"
//           variant="contained"
//           boxShadow="2"
//           sx={{ mt: 1, ml: 1, mr: 1, mb: 1 }}
//         >
//           Cooks
//         </Button>
//         <Button
//           href="/#/Blogs"
//           size="medium"
//           variant="contained"
//           boxShadow="2"
//           sx={{ mt: 1, ml: 1, mr: 1, mb: 1 }}
//         >
//           Blogs
//         </Button>
//       </CardActions>
//     </Card>
//   </>;
// };
