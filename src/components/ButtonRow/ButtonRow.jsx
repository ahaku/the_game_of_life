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
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import SettingsApplicationsRoundedIcon from '@material-ui/icons/SettingsApplicationsRounded';
import Dialog, { DialogProps } from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';


import './../../Mainpage.css';

function Reference(props) {
    const [open, setOpen] = useState(false)

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
                <DialogTitle>Справка</DialogTitle>
                <DialogContent>
                    <Typography variant="h5" gutterBottom paragraph>Происхождение</Typography>
                    <Typography variant="body1" gutterBottom paragraph>
                    Джон Конвей заинтересовался проблемой, предложенной в 1940-х годах известным математиком Джоном фон Нейманом, который пытался создать гипотетическую машину, которая может воспроизводить сама себя. Джону фон Нейману удалось создать математическую модель такой машины с очень сложными правилами. Конвей попытался упростить идеи, предложенные Нейманом, и в конце концов ему удалось создать правила, которые стали правилами игры «Жизнь». Впервые описание этой игры было опубликовано в октябрьском (1970 год) выпуске журнала Scientific American, в рубрике «Математические игры» Мартина Гарднера (Martin Gardner)
                    </Typography>

                    <Typography variant="h5" gutterBottom paragraph>Правила игры</Typography>
                    <Typography variant="body1" gutterBottom>
                        <ul>
                            <li>Действие игры происходит во "Вселенной" - это плоскость размеченная на клетки</li>
                            <li>Каждая клетка может находиться в двух состояниях: быть «живой» (заполненной) или быть «мёртвой» (пустой).</li>
                            <li>У клетки есть восемь соседей, окружающих её</li>
                            <li>Начальное положение клеток считается первым поколением. Каждое следующее поколение рассчитывается на основе предыдущего по таким правилам:
                                <ul>
                                    <li>в пустой (мёртвой) клетке, рядом с которой ровно три живые клетки, зарождается жизнь;</li>
                                    <li>если у живой клетки есть две или три живые соседки, то эта клетка продолжает жить; в противном случае, если соседей меньше двух или больше трёх, клетка умирает («от одиночества» или «от перенаселённости»)</li>
                                </ul>
                            </li>
                            <li>Игра прекращается, если
                                <ul>
                                    <li>на поле не останется ни одной «живой» клетки</li>
                                    <li>конфигурация на очередном шаге в точности (без сдвигов и поворотов) повторит себя же на одном из более ранних шагов (складывается периодическая конфигурация)</li>
                                    <li>при очередном шаге ни одна из клеток не меняет своего состояния (складывается стабильная конфигурация; предыдущее правило, вырожденное до одного шага назад)</li>
                                </ul>
                            </li>
                        </ul>
                        <p>Эти простые правила приводят к огромному разнообразию форм, которые могут возникнуть в игре.</p>
                        <p>Игрок не принимает прямого участия в игре, а лишь расставляет или генерирует начальную конфигурацию «живых» клеток, которые затем взаимодействуют согласно правилам уже без его участия (он является наблюдателем).</p>
                    </Typography>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    )
}

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
                    <Reference ></Reference>
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