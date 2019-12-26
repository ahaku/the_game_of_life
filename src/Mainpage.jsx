import React, {useState}from 'react';
import produce from 'immer';
import './Mainpage.css';




function Grid(props) {
    const {colors} = props;
    return (
        <div className="Grid">
            <div className="GridWrapper" style={{gridTemplateColumns: `repeat(${props.numberCols}, ${props.cellSize})`}}>
                {props.grid.map((row, i) =>
                    row.map((col, j) => (
                        <div 
                        className="Cell"
                        style={{
                            width: props.cellSize,
                            height: props.cellSize,
                            backgroundColor: props.grid[i][j] ? colors.filledCellBg : colors.emptyCellBg,
                            border: '1px solid white'
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
    const [numberCols, setNumberCols] = useState(30);
    const [grid, setGrid] = useState(emptyGridGenerate());
    const [cellSize, setSellSize] = useState('20px');
    
    const [running, setRunnig] = useState(false);
    const [colors, setColors] = useState({
        'pageBackground': 'white',
        'emptyCellBg': '#212121',
        'filledCellBg': 'green'
    })

    function emptyGridGenerate() {
        const rows = [];
        for (let i = 0; i < numberRows; i++) {
            rows.push(Array.from(Array(numberCols), () => 0));
        }
        return rows;
    }

    return (
        <div className='Mainpage'>
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