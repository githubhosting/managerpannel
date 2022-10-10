// // import * as React from 'react';
// import React, { useState, useEffect } from 'react';

// import styles from './styles.css';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import { Box, Card, CardContent, CardHeader, Typography } from '@mui/material';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
// import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// import ImageIcon from '@material-ui/icons/Image';
// import WorkIcon from '@material-ui/icons/Work';
// import BeachAccessIcon from '@material-ui/icons/BeachAccess';
// // tslint:disable-next-line:no-var-requires
// // import getFirebaseApp1 from './App';
// import {
//   Datagrid,
//   Resource,
//   List,
//   Show,
//   Create,
//   Edit,
//   Filter,
//   SimpleShowLayout,
//   SimpleForm,
//   TextField,
//   TextInput,
//   ShowButton,
//   EditButton,
//   DeleteButton,
//   EmailField,
//   DeleteWithConfirmButton,
//   Toolbar,
//   SaveButton,
//   useRecordContext,
//   ImageField,
//   ReferenceField,
//   ReferenceInput,
//   ReferenceManyField,
//   SingleFieldList,
//   ChipField,
//   SelectInput,
//   AutocompleteInput,
//   DateField,
//   DateInput,
//   RichTextField,
//   NumberField,
//   NumberInput,
//   BooleanField,
//   BooleanInput,
//   SimpleList,
//   ReferenceArrayInput,
//   ArrayField,
//   ImageInput,
//   ListContextProvider,
//   useTranslate,
//   RecordContextProvider,
//   useListContext,
//   ReferenceArrayField,
//   Admin,
//   SelectArrayInput,
// } from 'react-admin';
// // import ColoredNumberField from "./ColoredNumberField";

// import {
//   RichTextInput,
//   ArrayInput,
//   SimpleFormIterator,
//   FileInput,
//   FileField,
// } from 'ra-input-rich-text';
// import { Avatar } from '@material-ui/core';
// import { ImageAspectRatioRounded } from '@material-ui/icons';
// import {
//   FirebaseReferenceField,
//   FirebaseReferenceInput,
// } from './FirebaseReferenceFields';
// import { Title } from 'react-admin';
// import {
//   collection,
//   getDocs,
//   updateDoc,
//   collectionGroup,
//   doc,
//   query,
// } from '@firebase/firestore';
// // Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: 'AIzaSyACyiB2f-Sl8fbez4sjwBxJwn-eGadnXcg',
//   authDomain: 'auth-44578.firebaseapp.com',
//   projectId: 'auth-44578',
//   storageBucket: 'auth-44578.appspot.com',
//   messagingSenderId: '595971213871',
//   appId: '1:595971213871:web:432717a56846feb84a14da',
//   measurementId: 'G-BJWWD8H4BX',
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// export { db }; // export the database
// const [cinemas, setCinemas] = useState([]);
// const selectCinema = async (cinema) => {
//   // setSelectedCinema(cinema);
//   const cinemaRef = await getDocs(collectionGroup(db, `movies`));
//   const docs = cinemaRef.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
//   setCinemas(docs);
// };
// useEffect(() => {
//   selectCinema();
// }, []);

// const CooksMenu = () => {
//   const [cinemas, setCinemas] = useState([]);
//   const selectCinema = async (cinema) => {
//     // setSelectedCinema(cinema);
//     const cinemaRef = await getDocs(collectionGroup(db, `movies`));
//     const docs = cinemaRef.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
//     setCinemas(docs);
//   };
//   useEffect(() => {
//     selectCinema();
//   }, []);
//   return (
//     <div className="App">
//       <h1>Cinema</h1>
//       <div className="cinemas">
//         {cinemas.map((cinema) => (
//           <div key={cinema.id}>
//             <span>{cinema.name}</span>
//             <br></br>
//             <span>{cinema.genre}</span>
//             <br></br>
//             <span>{cinema.runtime}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
// export default CooksMenu;

// // <Card
// //   sx={{
// //     mt: 3,
// //     ml: 1,
// //     mr: 1,
// //     boxShadow: 3,
// //     borderRadius: 2,
// //   }}
// // >
// //   <Title title="Cooks Menu" />
// //   <CardContent>Cooks Menu</CardContent>
// // </Card>
// // );
