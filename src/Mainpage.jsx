import React, {useState, useRef, useCallback}from 'react';
import produce from 'immer';
import ButtonMD from '@material-ui/core/Button';
import ButtonRow from './components/ButtonRow/ButtonRow'
import './Mainpage.css';

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


function Grid(props) {
    const {colors} = props;
    return (
        <div className="Grid">
            <div className="GridWrapper" style={{gridTemplateColumns: `repeat(${props.numberCols}, ${props.cellSize})`}}>
                {props.grid.map((row, i) =>
                    row.map((col, j) => (
                        <div 
                        className="Cell"
                        key={`${i}:${j}`}
                        style={{
                            width: props.cellSize,
                            height: props.cellSize,
                            backgroundColor: props.grid[i][j] ? colors.filledCellBg : colors.emptyCellBg,
                            border: colors.border
                        }}
                        onClick={() => {
                            const changedGrid = produce(props.grid, copyOfGrid => {
                                copyOfGrid[i][j] = props.grid[i][j] ? 0 : 1;
                            })
                            props.setGrid(changedGrid);
                        }}
                        ></div>
                    ))
                )}
            </div>
        </div>
    )
}

function Mainpage() {
    
    const [numberRows, setNumberRows] = useState(30);
    const [numberCols, setNumberCols] = useState(60);
    const [grid, setGrid] = useState(emptyGridGenerate());
    const [cellSize, setSellSize] = useState('18px');
    const [savedGrid, setSavedGrid] = useState(grid);
    const [gameSpeed, setGameSpeed] = useState(100);
    
    const [running, setRunning] = useState(false);
    const [colors, setColors] = useState({
        'pageBackground': 'white',
        'emptyCellBg': 'rgb(236, 236, 236)',
        'filledCellBg': 'dodgerblue',
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
        <div className='Mainpage' style={{backgroundColor: colors.pageBackground}}>
            <ButtonRow
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
            ></ButtonRow>
            <Grid
            numberRows={numberRows}
            numberCols={numberCols}
            cellSize={cellSize}
            grid={grid}
            setGrid={setGrid}
            colors={colors}
            ></Grid>
        </div>
    )
}

export default Mainpage;