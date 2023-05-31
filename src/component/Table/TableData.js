import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { Button } from "@mui/material";

// Following Two are for edit and delete icons
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

// Following code is for dialog box
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
} from "@mui/material";
import { createData } from "../MainContent/MainContent";

// var rows = [
//   createData('Frozen yoghurt', 'Frozen yoghurt', 1),
//   createData('Frozen yoghurt', 'Frozen yoghurt', 2),
//   createData('Frozen yoghurt', 'Frozen yoghurt', 3),
//   createData('Frozen yoghurt', 'Frozen yoghurt', 4),
//   createData('Frozen yoghurt', 'Frozen yoghurt', 5),
//   createData('Frozen yoghurt', 'Frozen yoghurt', 6),
//   createData('Frozen yoghurt', 'Frozen yoghurt', 7)
// ];
// var cnt=7;

export default function TableData(props) {
  const [openEditPage, setOpenEditPage] = React.useState(false);
  const [openedId, setOpenedId] = useState("");
  const [editTicketType, setEditTicketType] = useState("");
  const [editTicketDescription, setEditTicketDescription] = useState("");

  const handleClickOpenEditPage = (id) => {
    setOpenedId(id);
    const selectedRow = props?.data?.find((row) => row.id === id);
    setEditTicketType(selectedRow?.ticket_type);
    setEditTicketDescription(selectedRow?.description);
    setOpenEditPage(true);
  };

  const handleCloseEditPage = () => {
    setOpenEditPage(false);
  };

  const handleUpdate = () => {
    if(editTicketType.trim().length > 0){
      const updatedRow = createData(
        editTicketType.trim(),
        editTicketDescription.trim(),
        openedId
      );
      props.onUpdate(updatedRow);
      handleCloseEditPage();
    }else{
      alert('empty ticket type')
    }
    
  };

  const [openDeletePage, setOpenDeletePage] = React.useState(false);

  const handleClickOpenDeletePage = (id) => {
    setOpenedId(id);
    setOpenDeletePage(true);
  };

  const handleCloseDeletePage = () => {
    setOpenDeletePage(false);
  };

  const handleDeleteRow = () => {
    props.onDelete(openedId);
    handleCloseDeletePage();
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ backgroundColor: "#f0f0f0" }}>
          <TableRow>
            <TableCell align="center" sx={{ color: "blue" }}>
              Ticket Name
            </TableCell>
            <TableCell align="center" sx={{ color: "blue" }}>
              Description
            </TableCell>
            <TableCell align="center" sx={{ color: "blue" }}>
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props?.data?.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">{row.ticket_type}</TableCell>
              <TableCell align="center">{row.description}</TableCell>
              <TableCell align="center">
                <Button onClick={() => handleClickOpenEditPage(row.id)}>
                  <EditIcon />
                </Button>

                <Button onClick={() => handleClickOpenDeletePage(row.id)}>
                  <DeleteForeverIcon />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Dialog
        sx={{
          ".MuiPaper-root": {
            width: "400px",
          },
        }}
        open={openEditPage}
        onClose={handleCloseEditPage}
      >
        <DialogTitle>Edit Ticket Type</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Ticket Type"
            type="Text"
            fullWidth
            variant="standard"
            value={editTicketType}
            onChange={(e) => setEditTicketType(e.target.value)}
          />
        </DialogContent>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Add Ticket Description"
            type="Text"
            fullWidth
            variant="standard"
            value={editTicketDescription}
            onChange={(e) => setEditTicketDescription(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEditPage}>Cancel</Button>
          <Button onClick={handleUpdate}>Save Changes</Button>
        </DialogActions>
      </Dialog>
      <Dialog
        sx={{
          ".MuiPaper-root": {
            width: "400px",
          },
        }}
        open={openDeletePage}
        onClose={handleCloseDeletePage}
      >
        <DialogTitle>Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>Are you Sure to delete this?</DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleCloseDeletePage}>No</Button>
          <Button onClick={handleDeleteRow}>Yes</Button>
        </DialogActions>
      </Dialog>
    </TableContainer>
  );
}
