import React from 'react';
import Button from './Button/Button';
import './../../Mainpage.css';

function ButtonRow (props) {
    const { setColors, setNumberRows, setRunning,
        setNumberCols, customSizeGridGenerate, colors, runGame, numberCols, numberRows, 
        emptyGridGenerate, setSavedGrid, savedGrid, gameSpeed, setGrid, grid, running, runningRef} = props;
    return (
        <div className="ButtonRow">
        <Button
        variant='contained'
        color='primary' 
        title="Clear"
        onClick={() => {
            props.clearGenerationsNumber();
            setGrid(emptyGridGenerate())
        }}
        />
        <Button
            variant='contained'
            color='primary'
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
        <Button
            variant='contained'
            color='primary' 
            title="Save grid"
            onClick={() => {
                setSavedGrid(grid);
            }}
        />
        <Button
            variant='contained'
            color='primary' 
            title="Load grid"
            onClick={() => {
                setGrid(savedGrid);
            }}
        />
        <Button 
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
        />
        <Button
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
        />
    </div>
    )
}

export default ButtonRow