import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import TableData from "../Table/TableData";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
} from "@mui/material";

export function createData(ticket_type, description, id) {
  return { ticket_type, description, id };
}

function MainContent() {
  const [counter, setCounter] = useState(7);
  const [rows, setRows] = useState();

  const [open, setOpen] = React.useState(false);

  const [ticketType, setTicketType] = useState("");
  const [ticketDescription, setTicketDescription] = useState("");

  useEffect(() => {
    setRows([
      createData("Frozen yoghurt", "Frozen yoghurt", 1),
      createData("Frozen yoghurt", "Frozen yoghurt", 2),
      createData("Frozen yoghurt", "Frozen yoghurt", 3),
      createData("Frozen yoghurt", "Frozen yoghurt", 4),
      createData("Frozen yoghurt", "Frozen yoghurt", 5),
      createData("Frozen yoghurt", "Frozen yoghurt", 6),
      createData("Frozen yoghurt", "Frozen yoghurt", 7),
    ]);
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setTicketType("");
    setTicketDescription("");
    setOpen(false);
  };

  const handleAddTicket = () => {
    if (ticketType.trim().length > 0) {
      const ticketData = createData(
        ticketType.trim(),
        ticketDescription.trim(),
        counter + 1
      );
      setCounter((prev) => prev + 1);
      setRows((prev) => [...prev, ticketData]);
      handleClose();
    } else {
      alert("ticket type field is required!");
    }
  };

  const handleDelete = (id) => {
    console.log(id);
    setRows((prevRows) => {
      return rows.filter((item) => item.id !== id);
    });
  };

  const handleUpdate = (updatedData) => {
    setRows((rows) => {
      const prevRows = [...rows];
      const index = prevRows.findIndex((row) => row.id === updatedData.id);
      console.log({ index });
      if (index !== -1) {
        prevRows[index] = updatedData;
      }
      return prevRows;
    });
  };

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Box
        sx={{ display: "flex", justifyContent: "flex-end", padding: "16px" }}
      >
        <Button variant="contained" onClick={handleClickOpen}>
          Add Ticket Type
        </Button>
      </Box>
      <Box>
        <TableData
          data={rows}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
        />
      </Box>
      <Dialog
        sx={{
          ".MuiPaper-root": {
            width: "400px",
          },
        }}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Add Ticket Type</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Add Ticket Type"
            type="Text"
            fullWidth
            variant="standard"
            onChange={(e) => {
              console.log(e.target.value);
              setTicketType(e.target.value);
            }}
          />
        </DialogContent>
        <p>{ticketType}</p>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Add Ticket Description"
            type="Text"
            fullWidth
            variant="standard"
            onChange={(e) => {
              console.log(e.target.value);
              setTicketDescription(e.target.value);
            }}
          />
        </DialogContent>
        <p>{ticketDescription}</p>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAddTicket}>Add Ticket Type</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default MainContent;
