import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const MassageComponent = ({open,handleClose, msg, loading,duration}) => {
    const classes = useStyles();
    const handleCloseSnachbar = ()=>{
        handleClose()
    }
    return (
        <>
            <Backdrop className={classes.backdrop} open={loading} onClick={handleClose}>
                <CircularProgress color="inherit" />
            </Backdrop>
            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                open={open}
                autoHideDuration={duration}
                onClose={handleCloseSnachbar}
                message={msg}
            />
        </>
    )
}

export default MassageComponent