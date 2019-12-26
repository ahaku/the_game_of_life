import React, {useState}from 'react';
import './Mainpage.css';

function Mainpage() {

    const [numberRows, setNumberRows] = useState(30);
    const [numberCols, setNumberCols] = useState(30);
    const [cellSize, setSellSize] = useState('20px');
    const [grid, setGrid] = useState(emptyGridGenerate());
    const [running, setRunnig] = useState(false);
    const [colors, setColors] = useState({
        'pageBackground': 'white',
        'emptyCellBg': '#212121',
        'filledCellBg': 'green'
    })

    const emptyGridGenerate = () => {
        const rows = [];
        for (let i = 0; i < numberRows; i++) {
            rows.push(Array.from(Array(numberCols), () => 0));
        }
        setGrid(rows);
    }

    return (
        <div className='Mainpage'>
MP
        </div>
    )
}

export default Mainpage;