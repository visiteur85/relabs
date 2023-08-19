import React from 'react';
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {formatDateTime} from "../../../../shared/utils/formatDateTime";
import {useStartWebSocket} from "../../../../shared/utils/useWebSocket";

export const EventTable = () => {
    const {events, errorMessage} = useStartWebSocket();

    if (errorMessage) {
        return <div>Что-то не так</div>
    }

    return (
        <Paper sx={{width: '100%', overflow: 'hidden'}}>
            <TableContainer sx={{maxHeight: 540, padding: '8px 0'}} component={Paper}>
                <Table sx={{minWidth: 300, '& td, & th': {width: '20px', padding: '4px 4px'}}}
                       aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">События</TableCell>
                            <TableCell align="center">Время</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {events.map((event) => (
                            <TableRow
                                key={event.event}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell align="center">{event.event}</TableCell>
                                <TableCell align="center">{formatDateTime(event.ctime)}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
};

