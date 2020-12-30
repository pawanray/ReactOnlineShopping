import React, { Children } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

export default function DialogComponent({ children, title, size, dialogClose, show }) {
    //   const [open, setOpen] = React.useState(false);

    //   const handleClickOpen = () => {
    //     setOpen(true);
    //   };
    const handleClose = () => {
        // setOpen(false);
        dialogClose()
    };

    return (
        <div>

            <Dialog onClose={handleClose}
                open={show}
                maxWidth={size}
                >
                {
                    title ? (
                    <DialogTitle onClose={handleClose}>
                        {title}
                    </DialogTitle>) : null
                }

                <DialogContent dividers>
                    {children}
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                        Cancel
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
