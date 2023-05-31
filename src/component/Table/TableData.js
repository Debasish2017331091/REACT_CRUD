import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { Button } from '@mui/material';

// Following Two are for edit and delete icons
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

// Following code is for dialog box
import {Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField} from '@mui/material';


function createData(
  ticket_type,
  description,
  id
) {
  return { ticket_type, description, id};
}

var rows = [
  createData('Frozen yoghurt', 'Frozen yoghurt', 1),
  createData('Frozen yoghurt', 'Frozen yoghurt', 2),
  createData('Frozen yoghurt', 'Frozen yoghurt', 3),
  createData('Frozen yoghurt', 'Frozen yoghurt', 4),
  createData('Frozen yoghurt', 'Frozen yoghurt', 5),
  createData('Frozen yoghurt', 'Frozen yoghurt', 6),
  createData('Frozen yoghurt', 'Frozen yoghurt', 7)
];
var cnt=7;

export default function TableData() {
  
  const [openEditPage, setOpenEditPage] = React.useState(false);

  const handleClickOpenEditPage = () => {
      setOpenEditPage(true);
  };

  const handleCloseEditPage = () => {
      setOpenEditPage(false);
  };

  const [openDeletePage, setOpenDeletePage] = React.useState(false);

  const handleClickOpenDeletePage = () => {
      setOpenDeletePage(true);
  };

  const handleCloseDeletePage = () => {
      setOpenDeletePage(false);
  };
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{backgroundColor: '#f0f0f0'}}>
          <TableRow>
            <TableCell align="center" sx={{ color: 'blue' }}>Ticket Name</TableCell>
            <TableCell align="center" sx={{ color: 'blue' }}>Description</TableCell>
            <TableCell align="center" sx={{ color: 'blue' }}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{row.ticket_type}</TableCell>
              <TableCell align="center">{row.description}</TableCell>
              <TableCell align="center">
                  <Button onClick={handleClickOpenEditPage} >
                      <EditIcon/>
                  </Button>
                  
                  <Button onClick={handleClickOpenDeletePage}>
                      <DeleteForeverIcon/>
                  </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
            <Dialog sx={{'.MuiPaper-root':{
                    width:'400px'
                }}} open={openEditPage} onClose={handleCloseEditPage}>
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
                                />
                            </DialogContent>
                            <p></p>
                            <DialogContent>
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="Add Ticket Description"
                                    type="Text"
                                    fullWidth
                                    variant="standard"
                                />
                            </DialogContent>
                            <p></p>
                            <DialogActions>
                            <Button onClick={handleCloseEditPage}>Cancel</Button>
                            <Button onClick={handleCloseEditPage}>Save Changes</Button>
                            </DialogActions>
            </Dialog>
            <Dialog sx={{'.MuiPaper-root':{
                    width:'400px'
                }}} open={openDeletePage} onClose={handleClickOpenDeletePage}>
                            <DialogTitle>Delete</DialogTitle>
                            <DialogContent>
                              <DialogContentText>
                                Are you Sure to delete this?
                              </DialogContentText>
                            </DialogContent>
                            
                            <DialogActions>
                            <Button onClick={handleCloseDeletePage}>No</Button>
                            <Button onClick={handleCloseDeletePage}>Yes</Button>
                            </DialogActions>
            </Dialog>
    </TableContainer>
  );
}