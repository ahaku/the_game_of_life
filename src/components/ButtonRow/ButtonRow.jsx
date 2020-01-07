import React, { useState } from 'react';
import Button from './Button/Button';
import IconButton from '@material-ui/core/IconButton';
import PauseCircleOutlineRoundedIcon from '@material-ui/icons/PauseCircleOutlineRounded';
import PlayCircleOutlineRoundedIcon from '@material-ui/icons/PlayCircleOutlineRounded';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Switcher from '../Switcher/Switcher'
import ThemeSelector from '../ThemeSelector/ThemeSelector';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import ThemeSelectorMD from '../ThemeSelector/ThemeSelectorMD'

import Dialog, { DialogProps } from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';


import './../../Mainpage.css';


function Settings(props) {
    const [open, setOpen] = useState(false)

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
            <Button variant="contained" color="primary" title='Settings' onClick={handleClickOpen}>
            </Button>

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

function ButtonRow(props) {
    const { setColors, setNumberRows, setRunning,
        setNumberCols, customSizeGridGenerate, colors, runGame, numberCols, numberRows,
        emptyGridGenerate, setSavedGrid, savedGrid, gameSpeed, setGrid, grid, running, runningRef } = props;
    return (
        <div className="ButtonRow">
            <AppBar position="static">
                <Toolbar className='ToolBar'>
                    <Button
                        variant='contained'
                        // color='default'
                        title="Clear"
                        onClick={() => {
                            props.clearGenerationsNumber();
                            setGrid(emptyGridGenerate())
                        }}
                    />
                    <Button
                        variant='contained'
                        // color='primary'
                        title="Random"
                        onClick={() => {
                            props.clearGenerationsNumber();
                            const rows = [];
                            for (let i = 0; i < numberRows; i++) {
                                rows.push(Array.from(Array(numberCols), () => Math.random() > 0.7 ? 1 : 0))
                            }
                            setGrid(rows);
                        }}
                    />
                    <IconButton
                        variant='contained'
                        // color='secondary'
                        title='Play/Pause'
                        onClick={() => {
                            setRunning(!running)
                            console.log(gameSpeed)
                            if (!running) {
                                runningRef.current = true;
                                runGame();
                            }
                        }}>
                        {runningRef.current ? <PauseCircleOutlineRoundedIcon fontSize='large' /> : <PlayCircleOutlineRoundedIcon fontSize='large' />}
                        {/* <PlayCircleOutlineRoundedIcon color="primary" fontSize='medium'/> */}
                    </IconButton>
                    <Button
                        variant='contained'
                        // color='primary'
                        title="Save grid"
                        onClick={() => {
                            setSavedGrid(grid);
                        }}
                    />
                    <Button
                        variant='contained'
                        // color='primary'
                        title="Load grid"
                        onClick={() => {
                            setGrid(savedGrid);
                        }}
                    />

                    {/* <Button
                variant='contained'
                color='primary'
                title={running ? 'Stop' : 'Start'}
                onClick={() => {
                    setRunning(!running)
                    console.log(gameSpeed)
                    if (!running) {
                        runningRef.current = true;
                        runGame();
                    }
                }}
            /> */}
                    {/* <Button
                        variant='contained'
                        // color='secondary'
                        disabled={runningRef.current ? true : false}
                        title={'XL'}
                        onClick={() => props.changeGridSize('XL')}
                    />
                    <Button
                        variant='contained'
                        disabled={runningRef.current ? true : false}
                        // color='secondary'
                        title={'L'}
                        onClick={() => props.changeGridSize('L')}
                    />
                    <Button
                        variant='contained'
                        disabled={runningRef.current ? true : false}
                        // color='secondary'
                        title={'M'}
                        onClick={() => props.changeGridSize('M')}
                    /> */}
                    <Settings
                        colors={colors}
                        setColors={setColors}
                        ColorThemes={props.ColorThemes}
                        currentThemeName={props.currentThemeName}
                        ColorThemes={props.ColorThemes} 
                        setCurrentThemeName={props.setCurrentThemeName}
                        runningRef={runningRef}
                        changeGridSize={props.changeGridSize}
                        gameSpeed={props.gameSpeed}
                        setGameSpeed={props.setGameSpeed}
                    ></Settings>
                    {/* <Button
            variant='contained'
            color='primary' 
            title='50 x 50'
            disabled={runningRef.current ? true : false}
            onClick={() => {
                setGrid(customSizeGridGenerate(50, 50));
                setNumberRows(50);
                setNumberCols(50);
                setSavedGrid(customSizeGridGenerate(50, 50));
            }}
        />
        <Button
            variant='contained'
            color='primary' 
            title='30 x 30'
            disabled={runningRef.current ? true : false}
            onClick={() => {
                setGrid(customSizeGridGenerate(30, 30));
                setNumberRows(30);
                setNumberCols(30);
                setSavedGrid(customSizeGridGenerate(30, 30));
            }}
        /> */}

                </Toolbar>
            </AppBar>
        </div>
    )
}

export default ButtonRow