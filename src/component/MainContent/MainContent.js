import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import TableData from '../Table/TableData';

import {Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField} from '@mui/material';

function MainContent(){

    const [open, setOpen] = React.useState(false);

    const [ticketType,set_ticketType] = useState("");
    const [ticketDescription,set_ticketDescription] = useState("");

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (param) => {
        if(param){
            console.log(ticketType);
            console.log(ticketDescription);
        }
        
        setOpen(false);
    };

    return(
       <Box sx={{width:'100%', height:'100%'}}>
            <Box sx={{display:'flex', justifyContent:'flex-end', padding:'16px'}}>
                    <Button variant="contained" onClick={handleClickOpen} >Add Ticket Type</Button>   
            </Box>
            <Box>
                    <TableData/>
            </Box>
            <Dialog sx={{'.MuiPaper-root':{
                    width:'400px'
                }}} open={open} onClose={handleClose}>
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
                                    onChange={(e)=>{
                                        console.log(e.target.value);
                                        set_ticketType(e.target.value);
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
                                    onChange={(e)=>{
                                        console.log(e.target.value);
                                        set_ticketDescription(e.target.value);
                                    }}
                                />
                            </DialogContent>
                            <p>{ticketDescription}</p>
                            <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button onClick={handleClose}>Add Ticket Type</Button>
                            </DialogActions>
            </Dialog>
       </Box>
    )
}

export default MainContent;