import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useState } from "react";

export default function ThemeSelectorMD(props) {
  const [selectedTheme, setSelectedTheme] = useState("Default");

  const handleChange = event => {
    setSelectedTheme(event.target.value);
    props.setColors(props.ColorThemes[event.target.value]);
    props.setCurrentThemeName(event.target.value);
  };

  let items = [];
  for (let key in props.ColorThemes) {
    items.push(<MenuItem value={key}>{key}</MenuItem>);
  }

  return (
    <FormControl>
      <Select
        value={props.currentThemeName}
        displayEmpty
        onChange={handleChange}
      >
        <MenuItem value="" disabled>
          Выберите цветовую тему
        </MenuItem>
        {items}
      </Select>
      <FormHelperText>Выберите цветовую тему</FormHelperText>
    </FormControl>
  );
}
