import * as React from "react";
import {
  PostList,
  PostShow,
  PostCreate,
  PostEdit,
  ManagerShow,
  ManagerEdit,
} from "./posts";

import {
  UserList,
  UserShow,
  UserCreate,
  UserEdit,
  UserList1,
  UserList7,
  UserLists,
  CookList,
  CookShow,
  MenuList,
  MenuShow,
  BlogList,
  BlogShow,
  CookCreate,
  CookEdit,
  MenuCreate,
  MenuEdit,
  BlogCreate,
  BlogEdit,
  CloudKitchenList,
  CloudKitchenShow,
  CloudKitchenCreate,
  CloudKitchenEdit,
  FaqList,
  FaqShow,
  FaqCreate,
  FaqEdit,
  MilestoneList,
  MilestoneShow,
  MilestoneCreate,
  MilestoneEdit,
  ClientList,
  ClientShow,
  ClientCreate,
  ClientEdit,
} from "./users";
import MyLayout from "./MyLayout";
import {
  Admin,
  Resource,
  ShowGuesser,
  CustomRoutes,
  ListGuesser,
  EditGuesser,
} from "react-admin";
import { Route } from "react-router-dom";
import {
  FirebaseDataProvider,
  FirebaseAuthProvider,
} from "react-admin-firebase";

import styles from "./styles.css";
import firebase from "firebase/compat/app";

import CustomerIcon from "@material-ui/icons/People";
import BlogIcon from "@material-ui/icons/Book";
import MenuIcon from "@material-ui/icons/Menu";
import UserIcon from "@material-ui/icons/Person";
import ManagerIcon from "@material-ui/icons/SupervisorAccount";
import CookIcon from "@material-ui/icons/Restaurant";
import SoupKitchenIcon from "@material-ui/icons/Kitchen";

import * as Posts from "./posts";
import * as Users from "./users";

import CustomLoginPage from "./CustomLoginPage";
import EventMonitor from "./EventMonitor";
import Dashboard from "./Dashboard";
import Settings from "./Settings";
import Webdata from "./Webdata";
import MyPage from "./MyPage";
import CooksMenu from "./CooksMenu";
import CooksMenu1 from "./CooksMenu1";
import CookOrder from "./CookOrders";
import Orders from "./Orders";
import { QueryClient } from "react-query";

// let firebaseConfig;
// try {
//   firebaseConfig = JSON.parse(process.env.REACT_APP_FIREBASE_CONFIG);
// } catch (error) {
//   console.error('Error parsing (maybe quotes aren\'t escaped?): ', {REACT_APP_FIREBASE_CONFIG: process.env.REACT_APP_FIREBASE_CONFIG}, error);
// }

import { firebaseConfig } from "./FIREBASE_CONFIG";

import { defaultTheme, Layout, AppBar, ToggleThemeButton } from "react-admin";
import { createTheme, Box, Typography } from "@mui/material";
import { darkTheme, lightTheme } from "./themes";
const theme = {
  ...defaultTheme,
  palette: {
    mode: "dark",
  },
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

console.log({ firebaseConfig, firebaseApp });

const authProvider = FirebaseAuthProvider(firebaseConfig);

//get the phonenumbers from user resource of firestore

// const authProvider = {
//   login: ({ username, password }) => {
//     if (username !== "admin@foodey.com" || password !== "adminfoodey") {
//       return Promise.reject();
//     }
//     localStorage.setItem("username", username);
//     return Promise.resolve();
//   },
//   logout: () => {
//     localStorage.removeItem("username");
//     return Promise.resolve();
//   },
//   checkAuth: () =>
//     localStorage.getItem("username") ? Promise.resolve() : Promise.reject(),
//   checkError: (error) => {
//     const status = error.status;
//     if (status === 401 || status === 403) {
//       localStorage.removeItem("username");
//       return Promise.reject();
//     }
//     return Promise.resolve();
//   },
//   getIdentity: () =>
//     Promise.resolve({
//       id: "user",
//       fullName: "Foodey Admin",
//     }),
//   getPermissions: () => Promise.resolve(""),
// };

const dataProvider = FirebaseDataProvider(firebaseConfig, {
  logging: true,
  // rootRef: 'rootrefcollection/QQG2McwjR2Bohi9OwQzP',
  app: firebaseApp,
  persistence: "local",
  disableMeta: true,
  dontAddIdFieldToDoc: true,
  lazyLoading: {
    enabled: true,
  },
  firestoreCostsLogger: {
    enabled: true,
  },
});
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1 * 60 * 1000,
    },
  },
});
class App extends React.Component {
  render() {
    return (
      <>
        <Admin
          title="Foodey Admin"
          dashboard={Dashboard}
          loginPage={CustomLoginPage}
          dataProvider={dataProvider}
          authProvider={authProvider}
          queryClient={queryClient}
          layout={MyLayout}
        >
          <Resource
            name="Cooks"
            icon={CookIcon}
            list={CookList}
            show={CookShow}
            create={CookCreate}
            edit={CookEdit}
          />
          <Resource
            name="customers"
            icon={CustomerIcon}
            list={UserList}
            show={ShowGuesser}
            create={UserCreate}
            edit={UserEdit}
          />
          <Resource
            name="Menu"
            icon={MenuIcon}
            list={MenuList}
            show={MenuShow}
            // create={MenuCreate}
            // edit={MenuEdit}
          />
          <Resource
            name="Managers"
            icon={ManagerIcon}
            list={PostList}
            show={ManagerShow}
            create={PostCreate}
            edit={ManagerEdit}
          />

          <CustomRoutes>
            <Route path="/CooksMenu" element={<CooksMenu1 />} />
            <Route path="/Orders" element={<Orders />} />
            <Route path="/cookorder" element={<CookOrder />} />
          </CustomRoutes>
        </Admin>
        <EventMonitor />
      </>
    );
  }
}

export default App;
