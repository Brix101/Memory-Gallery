import React, { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import { getInitials } from "../../services/get-initial";

function UserListResults() {
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  //   const handleSelectAll = (event) => {
  //     let newSelectedCustomerIds;

  //     if (event.target.checked) {
  //       newSelectedCustomerIds = customers.map((customer) => customer.id);
  //     } else {
  //       newSelectedCustomerIds = [];
  //     }

  //     setSelectedCustomerIds(newSelectedCustomerIds);
  //   };

  //   const handleSelectOne = (event, id) => {
  //     const selectedIndex = selectedCustomerIds.indexOf(id);
  //     let newSelectedCustomerIds = [];

  //     if (selectedIndex === -1) {
  //       newSelectedCustomerIds = newSelectedCustomerIds.concat(
  //         selectedCustomerIds,
  //         id
  //       );
  //     } else if (selectedIndex === 0) {
  //       newSelectedCustomerIds = newSelectedCustomerIds.concat(
  //         selectedCustomerIds.slice(1)
  //       );
  //     } else if (selectedIndex === selectedCustomerIds.length - 1) {
  //       newSelectedCustomerIds = newSelectedCustomerIds.concat(
  //         selectedCustomerIds.slice(0, -1)
  //       );
  //     } else if (selectedIndex > 0) {
  //       newSelectedCustomerIds = newSelectedCustomerIds.concat(
  //         selectedCustomerIds.slice(0, selectedIndex),
  //         selectedCustomerIds.slice(selectedIndex + 1)
  //       );
  //     }

  //     setSelectedCustomerIds(newSelectedCustomerIds);
  //   };

  //   const handleLimitChange = (event) => {
  //     setLimit(event.target.value);
  //   };

  //   const handlePageChange = (event, newPage) => {
  //     setPage(newPage);
  //   };

  return (
    <Card>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedCustomerIds.length === customers.length}
                    color="primary"
                    indeterminate={
                      selectedCustomerIds.length > 0 &&
                      selectedCustomerIds.length < customers.length
                    }
                    // onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customers.slice(0, limit).map((customer: Customer, i) => (
                <TableRow
                  hover
                  key={i}
                  //   selected={selectedCustomerIds.indexOf(customer.id) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      //   checked={selectedCustomerIds.indexOf(customer.id) !== -1}
                      //   onChange={(event) => handleSelectOne(event, customer.id)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <Avatar src={customer.avatarUrl} sx={{ mr: 2 }}>
                        {getInitials(customer.name)}
                      </Avatar>
                      <Typography color="textPrimary" variant="body1">
                        {customer.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>{customer.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      {/* <TablePagination
      component="div"
      count={customers.length}
      onPageChange={handlePageChange}
      onRowsPerPageChange={handleLimitChange}
      page={page}
      rowsPerPage={limit}
      rowsPerPageOptions={[5, 10, 25]}
      /> */}
    </Card>
  );
}
interface Customer {
  id: Number;
  avatarUrl: string;
  createdAt: number;
  email: string;
  name: string;
}
export const customers: Customer[] = [
  {
    id: 1234,
    avatarUrl: "https://randomuser.me/api/portraits/med/men/75.jpg",
    createdAt: 1555016400000,
    email: "ekaterina.tankova@devias.io",
    name: "Ekaterina Tankova",
  },
  {
    id: 1234,
    avatarUrl: "https://randomuser.me/api/portraits/med/men/75.jpg",
    createdAt: 1555016400000,
    email: "cao.yu@devias.io",
    name: "Cao Yu",
  },
  {
    id: 1234,
    avatarUrl: "https://randomuser.me/api/portraits/med/men/75.jpg",
    createdAt: 1555016400000,
    email: "alexa.richardson@devias.io",
    name: "Alexa Richardson",
  },
  {
    id: 1234,
    avatarUrl: "https://randomuser.me/api/portraits/med/men/75.jpg",
    createdAt: 1554930000000,
    email: "anje.keizer@devias.io",
    name: "Anje Keizer",
  },
  {
    id: 1234,
    avatarUrl: "https://randomuser.me/api/portraits/med/men/75.jpg",
    createdAt: 1554757200000,
    email: "clarke.gillebert@devias.io",
    name: "Clarke Gillebert",
  },
  {
    id: 1234,
    avatarUrl: "https://randomuser.me/api/portraits/med/men/75.jpg",
    createdAt: 1554670800000,
    email: "adam.denisov@devias.io",
    name: "Adam Denisov",
  },
  {
    id: 1234,
    avatarUrl: "https://randomuser.me/api/portraits/med/men/75.jpg",
    createdAt: 1554325200000,
    email: "ava.gregoraci@devias.io",
    name: "Ava Gregoraci",
  },
  {
    id: 1234,
    avatarUrl: "https://randomuser.me/api/portraits/med/men/75.jpg",
    createdAt: 1523048400000,
    email: "emilee.simchenko@devias.io",
    name: "Emilee Simchenko",
  },
  {
    id: 1234,
    avatarUrl: "https://randomuser.me/api/portraits/med/men/75.jpg",
    createdAt: 1554702800000,
    email: "kwak.seong.min@devias.io",
    name: "Kwak Seong-Min",
  },
  {
    id: 1234,
    avatarUrl: "https://randomuser.me/api/portraits/med/men/75.jpg",
    createdAt: 1522702800000,
    email: "merrile.burgett@devias.io",
    name: "Merrile Burgett",
  },
];
export default UserListResults;
