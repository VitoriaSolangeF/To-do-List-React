import { Paper, TextField } from "@mui/material";
import { Button } from "@mui/material";
import React from "react";

export default function Form() {
    return (
        <Paper>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <Button variant="text">ADD</Button>
        </Paper>
    )
}