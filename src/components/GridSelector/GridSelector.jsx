import React from 'react'
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useState } from 'react';
import PreloadedGrids from '../../PreloadedGrids'

export default function GridSelector(props) {
    const [selectedGrid, setSelectedGrid] = useState('')
    const handleChange = (event) => {
        setSelectedGrid(event.target.value)
        props.changeGridSize('L')
        props.setGrid(PreloadedGrids[event.target.value])
    } 
    let items = [];
    for (let key in PreloadedGrids) {
        items.push(<MenuItem value={key}>{key}</MenuItem>)
    }
    return (
        <FormControl >
        <Select value={selectedGrid} displayEmpty onChange={handleChange}  >
          <MenuItem value="" disabled>
            Выберите фигуру
          </MenuItem>
           {items}
        </Select>
        <FormHelperText >Выберите фигуру</FormHelperText>
      </FormControl>
    )
}