import React, { useState } from 'react';
import Switch from '@material-ui/core/Switch';

export default function Switcher(props) {
    const [checked, setChecked] = useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked)
        if (checked) {
            props.removeCellBorder();
        } else if (!checked) {
            props.showCellBorder();
        }
    } 

    return (
        <div className="SwitcherWrapper">
            {props.label}
            <Switch
                checked={checked}
                onChange={handleChange}
            ></Switch>
        </div>
    )
}