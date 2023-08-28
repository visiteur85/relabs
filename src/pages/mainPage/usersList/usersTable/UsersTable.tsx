import React from 'react';
import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {formatDateTime} from "../../../../shared/utils/formatDateTime";
import {FetchUsersType} from "../../../../types/fetchType";


type UsersTablePropsType = {
    users: FetchUsersType | null
    callback: (id: number) => void
}

export const UsersTable = ({users, callback}: UsersTablePropsType) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 300, '& td, & th': {width: '20px', padding: '4px 4px'}}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="center">Имя</TableCell>
                        <TableCell align="center">Роль</TableCell>
                        <TableCell align="center">Дата создания</TableCell>
                        <TableCell align="center">Действия</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users?.items.map((user) => (
                        <TableRow
                            key={user.id}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell component="th" scope="row">
                                {user.id}
                            </TableCell>
                            <TableCell align="center">{user.name}</TableCell>
                            <TableCell align="center">{user.role}</TableCell>
                            <TableCell align="center">{formatDateTime(+user.ctime)}</TableCell>
                            <TableCell align="center">
                                <Button size={'small'} onClick={() => {
                                    callback(user.id)
                                }} variant={'contained'}>
                                    Удалить
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

