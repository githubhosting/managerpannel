// in src/User.js
import * as React from 'react';
import styles from './styles.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box, Card, CardContent, CardHeader, Typography } from '@mui/material';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
// tslint:disable-next-line:no-var-requires
import getFirebaseApp1 from './App';
import { Stack } from '@mui/material';
import {
  Datagrid,
  Resource,
  List,
  Show,
  Create,
  Edit,
  Filter,
  SimpleShowLayout,
  SimpleListLoadingClasses,
  SimpleForm,
  TextField,
  TextInput,
  ShowButton,
  EditButton,
  DeleteButton,
  EmailField,
  DeleteWithConfirmButton,
  Toolbar,
  SaveButton,
  useRecordContext,
  ImageField,
  ReferenceField,
  ReferenceInput,
  ReferenceManyField,
  SingleFieldList,
  ChipField,
  SelectInput,
  AutocompleteInput,
  DateField,
  DateInput,
  RichTextField,
  NumberField,
  NumberInput,
  BooleanField,
  BooleanInput,
  SimpleList,
  ReferenceArrayInput,
  ArrayField,
  ImageInput,
  ListContextProvider,
  useTranslate,
  RecordContextProvider,
  useListContext,
  ReferenceArrayField,
  Admin,
  SelectArrayInput,
} from 'react-admin';
import {
  TopToolbar,
  SortButton,
  CreateButton,
  ExportButton,
} from 'react-admin';
// import ColoredNumberField from "./ColoredNumberField";

import {
  RichTextInput,
  ArrayInput,
  SimpleFormIterator,
  FileInput,
  FileField,
} from 'ra-input-rich-text';
import { Avatar } from '@material-ui/core';
import { ImageAspectRatioRounded } from '@material-ui/icons';
import {
  FirebaseReferenceField,
  FirebaseReferenceInput,
} from './FirebaseReferenceFields';

const UserFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="name" alwaysOn />
  </Filter>
);
// const translate = useTranslate();

// ......
// Users Section
// ......

export const UserList = (props) => (
  <List {...props} filters={<UserFilter />}>
    <Datagrid rowClick="show">
      <TextField source="name" />
      <TextField source="age" />
      <TextField source="createdate" />
      <TextField source="lastupdate" />
      <ShowButton label="" />
      <EditButton label="" />
      <DeleteButton
        confirmContent="You will not be able to recover this record. Are you sure?"
        // translateOptions={{ name: record.name }}
        label=""
        redirect={false}
      />
    </Datagrid>
  </List>
);
export const UserShow = (props) => (
  <Show {...props} sx={{ marginBottom: '2rem' }}>
    <SimpleShowLayout>
      <TextField source="id" />
      <ImageField source="avatar" title="Profile" />
      <TextField sx={{ fontWeight: 'bold' }} source="name" />
      <BooleanField source="isAdmin" />
      <BooleanField source="isManager" />
      <BooleanField source="isContent" />
      <ReferenceField source="CloudKitchen.Reference" reference="Cloud_Kitchen">
        <TextField source="Name" />
      </ReferenceField>
      <ReferenceArrayField
        label="My Orders"
        source="myorders"
        reference="Cooks"
      >
        <Datagrid rowClick="show" bulkActionButtons={false}>
          <TextField source="Name" />
        </Datagrid>
      </ReferenceArrayField>
      <ArrayField source="Delivery_Details">
        <Datagrid bulkActionButtons={false}>
          <TextField source="City" />
          <TextField source="Latitude" />
          <TextField source="Longitude" />
          <TextField source="Nick_Name" />
          <TextField source="Primary" />
          <TextField source="Road_No" />
          <TextField source="State" />
        </Datagrid>
      </ArrayField>
    </SimpleShowLayout>
  </Show>
);
export const UserDrop = (props) => (
  <Show {...props} actions="">
    <SimpleShowLayout>
      <TextField source="id" />
      <BooleanField source="isAdmin" />
      <BooleanField label="Is manager" source="isManager.isManager" />
      <BooleanField source="isContent" />
    </SimpleShowLayout>
  </Show>
);

export const UserCreate = (props) => (
  <Create {...props} redirect="show">
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="phone" />
      <TextInput source="email" />
      <BooleanInput source="isAdmin" />
      <BooleanInput source="isManager.isManager" />
      <BooleanInput source="isContent" />
    </SimpleForm>
  </Create>
);

export const UserEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput disabled source="createdate" />
      <TextInput disabled source="lastupdate" />
      <TextInput source="name" />
      <TextInput source="phone" />
      <TextInput source="email" />
      <TextInput source="avatar" />
      <BooleanInput source="isAdmin" />
      <BooleanInput source="isManager.isManager" />
      <BooleanInput source="isContent" />
    </SimpleForm>
  </Edit>
);

// ......................
// Blog Section
// ......................

export const BlogList = (props) => (
  <List {...props} filters={<UserFilter />}>
    <Datagrid rowClick="show" bulkActionButtons={false}>
      <TextField source="Author" />
      <TextField source="Timestamp" />
      <ShowButton sx={{ fontWeight: 'bold' }} label="Show" />
      <EditButton sx={{ fontWeight: 'bold' }} label="Edit" />
      <DeleteWithConfirmButton label="Delete" redirect={false} />
    </Datagrid>
  </List>
);
export const BlogShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="Author" />
      <ImageField source="Image" />
      <TextField source="Heading" />
      <RichTextField source="Content" />
      <DateField source="Timestamp" />
      <TextField source="lastupdate" />
    </SimpleShowLayout>
  </Show>
);
export const BlogEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="Author" />
      {/* <ImageInput source="Image" /> */}
      <TextInput source="Heading" />
      <RichTextInput source="Content" />
      <DateInput source="Timestamp" />
    </SimpleForm>
  </Edit>
);
export const BlogCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="Author" />
      <TextInput source="Heading" />
      <RichTextInput source="Content" />
      <DateInput source="Timestamp" />
    </SimpleForm>
  </Create>
);

// ......................
// Menu Section
// ......................

export const MenuList = (props) => (
  <List {...props} filters={<UserFilter />}>
    <Datagrid rowClick="show" bulkActionButtons={false}>
      <TextField source="id" />
      <ShowButton sx={{ fontWeight: 'bold' }} label="Show" />
      <EditButton sx={{ fontWeight: 'bold' }} label="Edit" />
      <DeleteWithConfirmButton label="Delete" redirect={false} />
    </Datagrid>
  </List>
);
export const MenuShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="Dal" />
      <TextField source="Non-Veg-Curry" />
      <TextField source="Raita_salad" />
      <TextField source="Rice" />
      <TextField source="Roti" />
      <TextField source="Sabji" />
      <TextField source="Veg-Curry" />
    </SimpleShowLayout>
  </Show>
);

export const UserLists = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const record = useRecordContext();
  return (
    <List {...props} filters={<UserFilter />}>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.name}
          secondaryText={(record) => `Email: ${record.email}`}
          tertiaryText={(record) => `Phone: ${record.phone}`}
        />
      ) : (
        // <ListContextProvider value={{ ...listContext, data: selectedData }}>
        //   <MobileGrid data={selectedData} />
        // </ListContextProvider>
        // <SimpleList
        //   primaryText={(record) => record.name}
        //   secondaryText={(record) => `Email: ${record.email}`}
        //   tertiaryText={(record) => `Phone: ${record.phone}`}
        // />
        <Datagrid>
          <TextField source="name" />
          <TextField source="email" />
          <TextField source="phone" />
          {/* <TextField source="lastupdate" /> */}
          <ShowButton label="Show" />
          <EditButton label="Edit" />
          <DeleteWithConfirmButton
            confirmContent="You will not be able to recover this record. Are you sure?"
            label="Delete"
            translateOptions={(record) => record.name}
            redirect={false}
          />
        </Datagrid>
      )}
    </List>
  );
};

export const UserList4 = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const record = useRecordContext();
  return (
    <List {...props} filters={<UserFilter />}>
      {isSmall ? (
        <RecordContextProvider key={record} value={record}>
          <Card sx={{ margin: '0.5rem 0' }}>
            <CardHeader
              title={(record) => `${record.name} ${record.name}`}
              //   subheader={
              //     <>
              //       {translate("resources.customers.fields.last_seen_gte")}
              //       &nbsp;
              //       <DateField source="last_seen" />
              //     </>
              //   }
              // avatar={<AvatarField size="45" />}
              action={<EditButton />}
            />
            {/* <SimpleList
              primaryText={(record) => record.name}
              secondaryText={(record) => `Email: ${record.email}`}
              tertiaryText={(record) => `Phone: ${record.phone}`}
            /> */}
            <CardContent sx={{ pt: 0 }}>
              <Typography variant="body2">
                {'Email'}
                :&nbsp;
                <NumberField source="email" />
              </Typography>
              <Typography variant="body2">
                {'Phone'}
                :&nbsp;
                <NumberField
                  source="phone"
                  //   options={{
                  //     style: "currency",
                  //     currency: "USD",
                  //   }}
                />
              </Typography>
            </CardContent>
            {/* {record.groups && record.groups.length > 0 && (
            <CardContent sx={{ pt: 0 }}>
              <SegmentsField />
            </CardContent>
          )} */}
          </Card>
        </RecordContextProvider>
      ) : (
        // <SimpleList
        //   primaryText={(record) => record.name}
        //   secondaryText={(record) => `Email: ${record.email}`}
        //   tertiaryText={(record) => `Phone: ${record.phone}`}
        // />
        <Datagrid>
          <TextField source="name" />
          <TextField source="email" />
          <TextField source="phone" />
          {/* <TextField source="lastupdate" /> */}
          <ShowButton label="Show" />
          <EditButton label="Edit" />
          <DeleteWithConfirmButton
            confirmContent="You will not be able to recover this record. Are you sure?"
            label="Delete"
            translateOptions={(record) => record.name}
            redirect={false}
          />
        </Datagrid>
      )}
    </List>
  );
};
export const UserList1 = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const record = useRecordContext();
  const { data, isLoading } = useListContext();

  return (
    <List {...props} filters={<UserFilter />}>
      {isSmall ? (
        <Box margin="0.5em">
          {data.map((record) => (
            <RecordContextProvider key={record.id} value={record}>
              <Card sx={{ margin: '0.5rem 0' }}>
                <CardHeader
                  title={`${record.first_name} ${record.last_name}`}
                  //   subheader={
                  //     <>
                  //       {translate("resources.customers.fields.last_seen_gte")}
                  //       &nbsp;
                  //       <DateField source="last_seen" />
                  //     </>
                  //   }
                  // avatar={<AvatarField size="45" />}
                  action={<EditButton />}
                />
                {/* <SimpleList
                 primaryText={(record) => record.name}
                 secondaryText={(record) => `Email: ${record.email}`}
                 tertiaryText={(record) => `Phone: ${record.phone}`}
               /> */}
                <CardContent sx={{ pt: 0 }}>
                  <Typography variant="body2">
                    {'Email'}
                    :&nbsp;
                    <NumberField source="email" />
                  </Typography>
                  <Typography variant="body2">
                    {'Phone'}
                    :&nbsp;
                    <NumberField
                      source="zipcode"
                      //   options={{
                      //     style: "currency",
                      //     currency: "USD",
                      //   }}
                    />
                  </Typography>
                </CardContent>
                {/* {record.groups && record.groups.length > 0 && (
                 <CardContent sx={{ pt: 0 }}>
                   <SegmentsField />
                 </CardContent>
               )} */}
              </Card>
            </RecordContextProvider>
          ))}
        </Box>
      ) : (
        // <SimpleList
        //   primaryText={(record) => record.name}
        //   secondaryText={(record) => `Email: ${record.email}`}
        //   tertiaryText={(record) => `Phone: ${record.phone}`}
        // />
        <Datagrid>
          <TextField source="name" />
          <TextField source="email" />
          <TextField source="phone" />
          {/* <TextField source="lastupdate" /> */}
          <ShowButton label="Show" />
          <EditButton label="Edit" />
          <DeleteWithConfirmButton
            confirmContent="You will not be able to recover this record. Are you sure?"
            label="Delete"
            translateOptions={(record) => record.name}
            redirect={false}
          />
        </Datagrid>
      )}
    </List>
  );
};

export const UserList7 = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const record = useRecordContext();
  const postRowStyle = (record, index) => ({
    backgroundColor: record.isAdmin == true ? '#90caf9' : 'default',
  });
  return (
    <List {...props} filters={<UserFilter />}>
      {isSmall ? (
        <SimpleList
          sx={{
            borderRadius: '0.5rem',
            boxShadow: '0 0 0.6rem rgba(0,0,0,0.1)',
          }}
          linkType="show"
          primaryText={(record) => <b>{record.name}</b>}
          secondaryText={(record) =>
            `Email: ${record.email} || Phone: ${record.phone}`
          }
          leftAvatar={(record) => (record.avatar ? record.avatar : null)}
        />
      ) : (
        <Datagrid
          sx={{
            borderRadius: '0.5rem',
            boxShadow: '0 0 0.6rem rgba(0,0,0,0.1)',
          }}
          expand={<UserDrop />}
          rowClick="show"
          // rowStyle={postRowStyle}
        >
          <Avatar source="avatar" />
          <TextField source="name" />
          <EmailField source="email" />
          <TextField source="phone" />
          {/* <TextField source="lastupdate" /> */}
          <ShowButton sx={{ fontWeight: 'bold' }} label="Show" />
          <EditButton sx={{ fontWeight: 'bold' }} label="Edit" />
          <DeleteWithConfirmButton
            confirmContent="You will not be able to recover this record. Are you sure?"
            label="Delete"
            translateOptions={(record) => record.name}
            redirect={false}
          />
        </Datagrid>
      )}
    </List>
  );
};

export const UserList8 = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const record = useRecordContext();
  return (
    <List {...props} filters={<UserFilter />}>
      {isSmall ? (
        <>
          <ListItem>
            <ListItemAvatar>
              <Avatar source="avatar"></Avatar>
            </ListItemAvatar>
            <ListItemText primary={(record) => <b>{record.name}</b>} />
          </ListItem>
        </>
      ) : (
        <Datagrid expand={<UserDrop />} rowClick="show">
          <Avatar source="avatar" />
          <TextField source="name" />
          <TextField source="email" />
          <TextField source="phone" />
          {/* <TextField source="lastupdate" /> */}
          <ShowButton label="Show" />
          <EditButton sx={{ fontWeight: 'bold' }} label="Edit" />
          <DeleteWithConfirmButton
            confirmContent="You will not be able to recover this record. Are you sure?"
            label="Delete"
            translateOptions={(record) => record.name}
            redirect={false}
          />
        </Datagrid>
      )}
    </List>
  );
};

// ...........
// Cook Section
// ...........
export const CookList = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const record = useRecordContext();
  return (
    <List {...props} filters={<UserFilter />}>
      {isSmall ? (
        <SimpleList
          sx={{
            paddingRight: '2rem',
            borderRadius: '0.5rem',
            boxShadow: '0 0 0.6rem rgba(0,0,0,0.1)',
          }}
          linkType="show"
          primaryText={(record) => <b>{record.Name}</b>}
          secondaryText={(record) =>
            `Region: ${record.Region} \n || State: ${record.State}`
          }
        />
      ) : (
        <Datagrid
          sx={{
            borderRadius: '0.5rem',
            boxShadow: '0 0 0.6rem rgba(0,0,0,0.1)',
          }}
          expand={<CookDrop />}
          rowClick="show"
          bulkActionButtons={false}
        >
          <TextField source="Name" />
          <TextField source="Region" />
          <TextField source="State" />
          <NumberField source="Ratings" />
          {/* <TextField source="lastupdate" /> */}
          <ShowButton sx={{ fontWeight: 'bold' }} label="Show" />
          <EditButton sx={{ fontWeight: 'bold' }} label="Edit" />
          <DeleteWithConfirmButton
            confirmContent="You will not be able to recover this record. Are you sure?"
            label="Delete"
            translateOptions={(record) => record.name}
            redirect={false}
          />
        </Datagrid>
      )}
    </List>
  );
};
export const CookDrop = (props) => (
  <Show {...props} actions="">
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="Region" />
      <TextField source="State" />
      <TextField source="Speciality" />
    </SimpleShowLayout>
  </Show>
);

export const CookShowi = (props) => (
  <Show {...props}>
    <Datagrid>
      <TextField source="Friday" />
    </Datagrid>
  </Show>
);

export const CookShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField sx={{ fontWeight: 'bold' }} source="Name" />
      <ReferenceField
        label="Cloud Kitchen"
        reference="Cloud_Kitchen"
        source="Cloud"
        link="show"
      >
        <TextField source="Name" />
      </ReferenceField>
      <NumberField source="Ratings" />
      <TextField source="Region" />
      <TextField source="State" />
      <TextField source="Speciality" />
      <TextField source="Year_Of_Experience" />
    </SimpleShowLayout>
    {/* <Resource name="Cooks" list={CookShowi} /> */}
  </Show>
);

export const CookCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="Name" />
      <TextInput source="Cloud" />
      <NumberInput source="Ratings" />
      <TextInput source="Region" />
      <TextInput source="State" />
      <TextInput source="Speciality" />
      <NumberInput source="Year_Of_Experience" />
    </SimpleForm>
  </Create>
);
export const CookEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="Name" />
      <ReferenceInput source="Cloud" reference="Cloud_Kitchen">
        <SelectInput optionText="Name" />
      </ReferenceInput>
      <NumberInput source="Ratings" />
      <TextInput source="Region" />
      <TextInput source="State" />
      <TextInput source="Speciality" />
      <NumberInput source="Year_Of_Experience" />
    </SimpleForm>
  </Edit>
);
export const UserCreated = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="name" />
      <TextInput source="age" />
    </SimpleForm>
  </Create>
);

// ......Cloud Kitchen........

export const CloudKitchenList = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const record = useRecordContext();
  return (
    <List {...props} filters={<UserFilter />}>
      {isSmall ? (
        <SimpleList
          sx={{
            borderRadius: '0.5rem',
            boxShadow: '0 0 0.6rem rgba(0,0,0,0.1)',
          }}
          linkType="show"
          primaryText={(record) => <b>{record.Name}</b>}
          secondaryText={(record) => `Location: ${record.Location}`}
        />
      ) : (
        <Datagrid
          expand={<CloudKitchenDrop />}
          rowClick="show"
          bulkActionButtons={false}
        >
          <TextField source="Name" />
          <TextField source="Location" />
          <ShowButton label="Show" />
          <EditButton sx={{ fontWeight: 'bold' }} label="Edit" />
          <DeleteWithConfirmButton
            confirmContent="You will not be able to recover this record. Are you sure?"
            label="Delete"
            translateOptions={(record) => record.name}
            redirect={false}
          />
        </Datagrid>
      )}
    </List>
  );
};

export const CloudKitchenDrop = (props) => (
  <Show {...props} actions="">
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="Latitude" />
      <TextField source="Longitude" />
      <NumberField source="Ratings" />
      <TextField source="Reviews" />
    </SimpleShowLayout>
  </Show>
);

export const CloudKitchenShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField sx={{ fontWeight: 'bold' }} source="Name" />
      <ImageField source="Image" />
      <TextField source="Location" />
      <TextField source="Latitude" />
      <TextField source="Longitude" />
      <TextField source="Ratings" />
      <TextField source="Reviews" />
      <ReferenceArrayField source="Cooks" reference="Cooks">
        <Datagrid rowClick="show" bulkActionButtons={false}>
          <TextField source="Name" />
        </Datagrid>
      </ReferenceArrayField>
    </SimpleShowLayout>
  </Show>
);
// const Aside = () => (
//   <Box sx={{ width: '200px', margin: '1em' }}>
//     <Typography variant="h6">Instructions</Typography>
//     <Typography variant="body2">
//       Posts will only be published once an editor approves them
//     </Typography>
//   </Box>
// );
export const CloudKitchenCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="Image" />
      <NumberInput source="Latitude" />
      <NumberInput source="Longitude" />
      <TextInput source="Location" />
      <TextInput source="Name" />
      <NumberInput source="Ratings" />
      <TextInput source="Reviews" />
    </SimpleForm>
  </Create>
);
export const CloudKitchenEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="Image" />
      <NumberInput source="Latitude" />
      <NumberInput source="Longitude" />
      <TextInput source="Location" />
      <TextInput source="Name" />
      <NumberInput source="Ratings" />
      <TextInput source="Reviews" />
      <ReferenceArrayInput
        label="Cooks Assigned"
        reference="Cooks"
        source="Cooks"
      >
        <SelectArrayInput label="Cooks Assigned" optionText="Name" />
      </ReferenceArrayInput>
    </SimpleForm>
  </Edit>
);

export const FaqList = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  return (
    <List {...props} filters={<UserFilter />}>
      {isSmall ? (
        <SimpleList
          sx={{
            borderRadius: '0.5rem',
            boxShadow: '0 0 0.6rem rgba(0,0,0,0.1)',
          }}
          linkType="show"
          primaryText={(record) => `Question: ${record.question}`}
          secondaryText={(record) => `Answer: ${record.answer}`}
        />
      ) : (
        <Datagrid rowClick="show">
          {/* <TextField source="id" /> */}
          <TextField source="question" />
          <TextField source="answer" />
          <ShowButton label="Show" />
          <EditButton sx={{ fontWeight: 'bold' }} label="Edit" />
          <DeleteWithConfirmButton
            confirmContent="You will not be able to recover this record. Are you sure?"
            label="Delete"
            translateOptions={(record) => record.question}
            redirect={false}
            bulkActionButtons={false}
          />
        </Datagrid>
      )}
    </List>
  );
};
export const FaqShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="question" />
      <TextField source="answer" />
    </SimpleShowLayout>
  </Show>
);
export const FaqCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput fullWidth source="question" />
      <TextInput fullWidth multiline source="answer" />
    </SimpleForm>
  </Create>
);
export const FaqEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput fullWidth source="question" />
      <TextInput fullWidth multiline source="answer" />
    </SimpleForm>
  </Edit>
);
export const MilestoneList = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  return (
    <List {...props} filters={<UserFilter />}>
      {isSmall ? (
        <SimpleList
          sx={{
            borderRadius: '0.5rem',
            boxShadow: '0 0 0.6rem rgba(0,0,0,0.1)',
          }}
          linkType="show"
          primaryText={(record) => <b>{record.title}</b>}
          secondaryText={(record) => `Value: ${record.amount}`}
        />
      ) : (
        <Datagrid rowClick="show">
          {/* <TextField source="id" /> */}
          <TextField source="title" />
          <TextField source="amount" />
          <ShowButton label="Show" />
          <EditButton sx={{ fontWeight: 'bold' }} label="Edit" />
          <DeleteWithConfirmButton
            confirmContent="You will not be able to recover this record. Are you sure?"
            label="Delete"
            translateOptions={(record) => record.title}
            redirect={false}
            bulkActionButtons={false}
          />
        </Datagrid>
      )}
    </List>
  );
};
export const MilestoneShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      {/* <TextField source="id" /> */}
      <TextField source="title" />
      <TextField source="amount" />
    </SimpleShowLayout>
  </Show>
);
export const MilestoneCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="amount" />
    </SimpleForm>
  </Create>
);
export const MilestoneEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="amount" />
    </SimpleForm>
  </Edit>
);
export const ClientList = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  return (
    <List {...props} filters={<UserFilter />}>
      {isSmall ? (
        <SimpleList
          sx={{
            borderRadius: '0.5rem',
            boxShadow: '0 0 0.6rem rgba(0,0,0,0.1)',
          }}
          linkType="show"
          primaryText={(record) => <b>{record.id}</b>}
          secondaryText={(record) => `Name: ${record.content}`}
        />
      ) : (
        <Datagrid rowClick="show">
          <TextField source="id" />
          <TextField source="content" />
          <ShowButton label="Show" />
          <EditButton sx={{ fontWeight: 'bold' }} label="Edit" />
          <DeleteWithConfirmButton
            confirmContent="You will not be able to recover this record. Are you sure?"
            label="Delete"
            translateOptions={(record) => record.Name}
            redirect={false}
          />
        </Datagrid>
      )}
    </List>
  );
};
export const ClientShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="content" />
    </SimpleShowLayout>
  </Show>
);
export const ClientCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput fullWidth source="content" />
    </SimpleForm>
  </Create>
);
export const ClientEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput fullWidth source="content" />
    </SimpleForm>
  </Edit>
);
