import React from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useState } from 'react';

export default function ThemeSelectorMD (props) {
    const [selectedTheme, setSelectedTheme] = useState('Default')

    const handleChange = (event) => {
        setSelectedTheme(event.target.value)
        props.setColors(props.ColorThemes[event.target.value])
        props.setCurrentThemeName(event.target.value);
      };

    let items = []
    for (let key in props.ColorThemes) {
        items.push(<MenuItem value={key}>{key}</MenuItem>)
    }
    return (
        <FormControl >
        <Select value={selectedTheme} displayEmpty onChange={handleChange}  >
          <MenuItem value="" disabled>
            Select a theme
          </MenuItem>
            {items}
        </Select>
        <FormHelperText>Select a theme</FormHelperText>
      </FormControl>
    )
}