import React, { useState, useRef, useCallback } from 'react';
import produce from 'immer';
import ButtonMD from '@material-ui/core/Button';
import ButtonRow from './components/ButtonRow/ButtonRow';
import Grid from './components/Grid/Grid';
import ThemeSelector from './components/ThemeSelector/ThemeSelector';
import Switcher from './components/Switcher/Switcher'
import './Mainpage.css';
import ColorThemes from './Data'

const neighborsCoordinates = [
    [-1, 1],
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1],
    [-1, 0]
]

let numberGenerations = 0;

function Mainpage() {

    const [numberRows, setNumberRows] = useState(30);
    const [numberCols, setNumberCols] = useState(60);
    const [grid, setGrid] = useState(emptyGridGenerate());
    const [cellSize, setCellSize] = useState('18px');
    const [savedGrid, setSavedGrid] = useState(grid);
    const [gameSpeed, setGameSpeed] = useState(100);
    const [currentThemeName, setCurrentThemeName] = useState('Default');

    const [running, setRunning] = useState(false);
    const [colors, setColors] = useState({
        'pageBackground': 'white',
        'emptyCellBg': 'rgb(236, 236, 236)',
        'filledCellBg': 'dodgerblue',
        'fontColor': '#212121',
        'border': '1px solid white'
    })

    function emptyGridGenerate() {
        const rows = [];
        for (let i = 0; i < numberRows; i++) {
            rows.push(Array.from(Array(numberCols), () => 0));
        }
        return rows;
    }

    function customSizeGridGenerate(r, c) {
        const newGrid = [];
        for (let i = 0; i < r; i++) {
            newGrid.push(Array.from(Array(c), () => 0))
        }
        return newGrid;
    }

    const runningRef = useRef(running);
    runningRef.current = running;

    const runGame = useCallback(() => {
        if (!runningRef.current) {
            return;
        }

        setGrid(prevGrid => {
            return produce(prevGrid, nextGrid => {
                numberGenerations++;
                for (let i = 0; i < numberRows; i++) {
                    for (let j = 0; j < numberCols; j++) {
                        let numberNeighbors = 0;
                        neighborsCoordinates.forEach(([x, y]) => {
                            const neighborX = i + x;
                            const neighborY = j + y;
                            if (neighborX >= 0 && neighborX < numberRows && neighborY >= 0 && neighborY < numberCols) {
                                numberNeighbors += prevGrid[neighborX][neighborY];
                            }
                        })

                        if (numberNeighbors < 2 || numberNeighbors > 3) {
                            nextGrid[i][j] = 0;
                        } else if (prevGrid[i][j] === 0 && numberNeighbors === 3) {
                            nextGrid[i][j] = 1;
                        }
                    }
                }
            })
        })

        setTimeout(runGame, gameSpeed);
    }, [numberRows, numberCols, gameSpeed])


    return (
        <div className='Mainpage' style={{ backgroundColor: colors.pageBackground }}>
            <Switcher
                label={'Cell border'}
                removeCellBorder={() => setColors({...colors, border: 'none'})}
                showCellBorder={() => setColors({...colors, border: ColorThemes[currentThemeName].border})}
            ></Switcher>
            <ThemeSelector ColorThemes={ColorThemes} setColors={setColors} setCurrentThemeName={setCurrentThemeName}></ThemeSelector>
            <ButtonRow
                clearGenerationsNumber={() => numberGenerations = 0}
                numberRows={numberRows}
                numberCols={numberCols}
                cellSize={cellSize}
                grid={grid}
                setGrid={setGrid}
                colors={colors}
                emptyGridGenerate={emptyGridGenerate}
                setSavedGrid={setSavedGrid}
                savedGrid={savedGrid}
                gameSpeed={gameSpeed}
                setGrid={setGrid}
                running={running}
                runningRef={runningRef}
                runGame={runGame}
                customSizeGridGenerate={customSizeGridGenerate}
                setColors={setColors}
                setNumberRows={setNumberRows}
                setNumberCols={setNumberCols}
                customSizeGridGenerate={customSizeGridGenerate}
                colors={colors}
                setRunning={setRunning}
                removeCellBorder={() => {
                    setColors({...colors, border: 'none'})
                }}
            ></ButtonRow>
            <Grid
                numberRows={numberRows}
                numberCols={numberCols}
                cellSize={cellSize}
                grid={grid}
                setGrid={setGrid}
                colors={colors}
            ></Grid>
            <div className="GenerationsCount" style={{color: colors.fontColor}}>Generations: {numberGenerations}</div>
        </div>
    )
}

export default Mainpage;