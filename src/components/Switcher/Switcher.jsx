import React from 'react';
import Switch from '@material-ui/core/Switch';

export default function Switcher(props) {

    const handleChange = (event) => {

        if (props.checked) {
            props.removeCellBorder();
        } else if (!props.checked) {
            props.showCellBorder();
        }
    } 

    return (
        <div className="SwitcherWrapper">
            {props.label}
            <Switch
                color='primary'
                checked={props.checked}
                onChange={handleChange}
            ></Switch>
        </div>
    )
}