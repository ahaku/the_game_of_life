import React from 'react';
import Typography from '@material-ui/core/Typography';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';

export default function Reference(props) {
    const [open, setOpen] = React.useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <React.Fragment>
            <IconButton onClick={handleClickOpen}>
                <HelpOutlineOutlinedIcon ></HelpOutlineOutlinedIcon>
            </IconButton>
            <Dialog
                open={open}
                onClose={handleClose}
                scroll='body'
            >
                {props.text}
            </Dialog>
        </React.Fragment>
    )
}