import React from 'react'
import Button from '../Button/Button';
import ThemeSelectorMD from '../../ThemeSelector/ThemeSelectorMD'
import Switcher from '../../Switcher/Switcher'
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Dialog, { DialogProps } from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import SettingsApplicationsRoundedIcon from '@material-ui/icons/SettingsApplicationsRounded';

export default function Settings(props) {
    const [open, setOpen] = React.useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleSpeedChange = (event, newValue) => {
        props.setGameSpeed(newValue);
    }
    return (
        <React.Fragment>
            <IconButton variant="contained"  title='Settings' onClick={handleClickOpen}>
                <SettingsApplicationsRoundedIcon></SettingsApplicationsRoundedIcon>
            </IconButton>

            <Dialog
            open={open}
            onClose={handleClose}
            >
                <DialogTitle>Настройки</DialogTitle>
                <DialogContent>
                    <Switcher
                        label={'Cell border'}
                        removeCellBorder={() => props.setColors({ ...props.colors, border: 'none' })}
                        showCellBorder={() => props.setColors({ ...props.colors, border: props.ColorThemes[props.currentThemeName].border })}

                    ></Switcher>
                    {/* <ThemeSelector 
                    ColorThemes={props.ColorThemes} 
                    setColors={props.setColors} 
                    setCurrentThemeName={props.setCurrentThemeName}>

                    </ThemeSelector> */}
                    <ThemeSelectorMD
                        ColorThemes={props.ColorThemes}
                        setColors={props.setColors}
                        setCurrentThemeName={props.setCurrentThemeName}
                        currentThemeName={props.currentThemeName}
                    ></ThemeSelectorMD>
                    <Button
                        variant='contained'
                        color='secondary'
                        disabled={props.runningRef.current ? true : false}
                        title={'XL'}
                        onClick={() => props.changeGridSize('XL')}
                    />
                    <Button
                        variant='contained'
                        disabled={props.runningRef.current ? true : false}
                        color='secondary'
                        title={'L'}
                        onClick={() => props.changeGridSize('L')}
                    />
                    <Button
                        variant='contained'
                        disabled={props.runningRef.current ? true : false}
                        color='secondary'
                        title={'M'}
                        onClick={() => props.changeGridSize('M')}
                    />
                    <Typography id="discrete-slider-always" gutterBottom>
                        Game speed (ms)
                    </Typography>
                    <Slider
                        defaultValue={100}
                        aria-labelledby="discrete-slider-always"
                        step={100}
                        valueLabelDisplay="auto"
                        min={0}
                        max={1500}
                        value={props.gameSpeed}
                        onChange={handleSpeedChange}
                    />

                </DialogContent>

            </Dialog>
        </React.Fragment>
    )
}