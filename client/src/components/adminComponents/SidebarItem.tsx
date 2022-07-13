import React, { ReactElement } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ImageIcon from "@mui/icons-material/Image";
import MessageIcon from "@mui/icons-material/Message";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { Divider, ListSubheader } from "@mui/material";

interface navItem {
  name: string;
  to: string;
  icon?: ReactElement<any, any>;
  current?: boolean;
}

function SidebarItem() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const navigation: navItem[] = [
    {
      name: "Dashboard",
      to: "/admin",
      icon: <DashboardIcon />,
      current: pathname === "/admin",
    },
    {
      name: "Images",
      to: "images",
      icon: <ImageIcon />,
      current: pathname === "/admin/images",
    },
    {
      name: "Messages",
      to: "messages",
      icon: <MessageIcon />,
      current: pathname === "/admin/messages",
    },
    {
      name: "Users",
      to: "users",
      icon: <PeopleAltIcon />,
      current: pathname === "/admin/users",
    },
    {
      name: "Account",
      to: "account",
      icon: <ManageAccountsIcon />,
      current: pathname === "/admin/account",
    },
  ];
  return (
    <>
      {navigation.map((item, i) => (
        <ListItemButton
          key={i}
          selected={item.current}
          onClick={() => {
            navigate(item.to, { state: item.name });
          }}
        >
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.name} />
        </ListItemButton>
      ))}

      <Divider sx={{ my: 1 }} />
      <ListSubheader component="div" inset>
        View
      </ListSubheader>
      <ListItemButton
        onClick={() => {
          navigate("/");
        }}
      >
        <ListItemIcon>
          <ArrowCircleLeftIcon />
        </ListItemIcon>
        <ListItemText primary="Home Page" />
      </ListItemButton>
    </>
  );
}

export default SidebarItem;
