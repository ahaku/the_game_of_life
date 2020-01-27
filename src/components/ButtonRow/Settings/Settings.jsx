import React from 'react'
import Button from '../Button/Button';
import ThemeSelectorMD from '../../ThemeSelector/ThemeSelectorMD'
import GridSelector from '../../GridSelector/GridSelector'
import Switcher from '../../Switcher/Switcher'
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import SettingsApplicationsRoundedIcon from '@material-ui/icons/SettingsApplicationsRounded';
import '../../../Mainpage.css'

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
            <IconButton variant="contained" title='Настройки' onClick={handleClickOpen}>
                <SettingsApplicationsRoundedIcon></SettingsApplicationsRoundedIcon>
            </IconButton>

            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>Настройки</DialogTitle>
                <DialogContent>
                    <Switcher
                        label={'Границы клеток'}
                        removeCellBorder={() => props.setColors({ ...props.colors, border: 'none' })}
                        showCellBorder={() => props.setColors({ ...props.colors, border: props.ColorThemes[props.currentThemeName].border })}
                        checked={props.colors.border !== 'none'}
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
                    <div>
                    <GridSelector changeGridSize={props.changeGridSize} setGrid={props.setGrid}></GridSelector></div>
                    <div className="GridSizeButtons">
                        <p>Размер сетки</p>
                        <Button
                            variant='contained'
                            color='primary'
                            disabled={props.runningRef.current ? true : false}
                            title={'XL'}
                            onClick={() => props.changeGridSize('XL')}
                        />
                        <Button
                            variant='contained'
                            disabled={props.runningRef.current ? true : false}
                            color='primary'
                            title={'L'}
                            onClick={() => props.changeGridSize('L')}
                        />
                        <Button
                            variant='contained'
                            disabled={props.runningRef.current ? true : false}
                            color='primary'
                            title={'M'}
                            onClick={() => props.changeGridSize('M')}
                        />
                    </div>
                    <Typography id="discrete-slider-always" gutterBottom>
                        Скорость игры (мс)
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