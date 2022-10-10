import * as React from "react";
import { DashboardMenuItem, Menu, MenuItemLink } from "react-admin";
import { usePermissions } from "react-admin";
import BookIcon from "@mui/icons-material/Book";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import PeopleIcon from "@mui/icons-material/People";
import LabelIcon from "@mui/icons-material/Label";
import CustomerIcon from "@material-ui/icons/People";
import BlogIcon from "@material-ui/icons/Book";
import MenuIcon from "@material-ui/icons/Menu";
import UserIcon from "@material-ui/icons/Person";
import ManagerIcon from "@material-ui/icons/SupervisorAccount";
import CookIcon from "@material-ui/icons/Restaurant";
import SoupKitchenIcon from "@material-ui/icons/Kitchen";
import Private from "@material-ui/icons/Lock";
import Settings from "@material-ui/icons/Settings";
import Badge from "@mui/material/Badge";
import { MenuBook } from "@material-ui/icons";
import Orders from "./Orders";
import OrderIcon from "@material-ui/icons/ShoppingBasket";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import AddBoxIcon from "@mui/icons-material/AddBox";
import LanguageIcon from "@mui/icons-material/Language";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));
export const MyMenu = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { permissions } = usePermissions();
  return (
    <Menu {...props}>
      <DashboardMenuItem />

      <MenuItemLink to="/Cooks" primaryText="Cooks" leftIcon={<CookIcon />} />
      <MenuItemLink
        to="/CooksMenu"
        primaryText="Cooks Menu"
        leftIcon={<MenuBook />}
      />
      <MenuItemLink
        to="/Orders"
        primaryText="Orders"
        leftIcon={<OrderIcon />}
      />
      <MenuItemLink to="/Menu" primaryText="Menu" leftIcon={<MenuIcon />} />
      <MenuItemLink
        to="/Managers"
        primaryText="Managers"
        leftIcon={<ManagerIcon />}
      />
    </Menu>
  );
};
