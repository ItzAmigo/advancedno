//импорт модулей
import React, {useCallback, useEffect, useState} from 'react';


import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField,
} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../../../redux/hooks";
import {register} from "../../../../redux/slices/auth";
import Login from "../LoginModal/Login";

const Register = ({open, handleClose}) => {
    const [error, setError] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const [userData, setUserData] = useState({
        email: "",
        name: "",
        password: "",
        repeat_password: ""
    });

    const dispatch = useAppDispatch();
    const {isSuccess, isError, message} = useAppSelector(
        (state) => state.auth
    );

    const handleClickOpen = () => {
        setOpenModal(true);
    };

    const onInputChange = useCallback(
        (e) => {
            setUserData({...userData, [e.target.name]: e.target.value});
        },
        [userData]
    );

    useEffect(() => {
        if (isSuccess) {
            window.location.reload();
        }
        if (isError) {
            setError(message);
        }
    }, [isSuccess, isError]);

    const onFormSubmit = (e) => {
        e.preventDefault();

        dispatch(register(userData));
    };

    return (
        <>
            <Dialog open={open} onClose={handleClose}>
                <DialogContentText style={{padding: '22px 0 0 24px'}}>
                    <p> Sign In </p>
                    <p style={{color: 'red'}}> {error ? message : null} </p>
                </DialogContentText >
                <form onSubmit={onFormSubmit} action="" className="pt-4 space-y-3">
                    <DialogContent style={{padding: '0 24px 20px 24px'}}>
                        <TextField
                            autoFocus
                            margin="dense"
                            name="name"
                            label="Your Name"
                            type="text"
                            onChange={onInputChange}
                            value={userData.name}
                            fullWidth
                            variant="standard"
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            name="email"
                            label="Email Address"
                            type="email"
                            onChange={onInputChange}
                            value={userData.email}
                            fullWidth
                            variant="standard"
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            name="password"
                            label="Password"
                            type="password"
                            onChange={onInputChange}
                            value={userData.password}
                            fullWidth
                            variant="standard"
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            name="repeat_password"
                            label="Repeat Password"
                            type="password"
                            onChange={onInputChange}
                            value={userData.repeat_password}
                            fullWidth
                            variant="standard"
                        />
                    </DialogContent>
                    <DialogActions>
                        <p style={{color: "black", fontSize: "small"}}>Already have an account?</p>
                        <Button onClick={handleClickOpen}>Log In</Button>
                        <Login
                            open={openModal}
                            handleClose={handleClose}
                        />
                        <Button variant="outlined" onClick={handleClose}>Close</Button>
                        <Button
                            margin="dense"
                            id="login"
                            type="submit"
                            variant="outlined"
                        > Sign In
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </>
    )
}

export default Register;