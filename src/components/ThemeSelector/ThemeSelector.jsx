import React from 'react';

function ThemeSelector (props) {
    // const [selectedTheme, setSelectedTheme] = React.useState();
    const handleChange = (event) => {
        props.setColors(props.ColorThemes[event.target.value]);
        props.setCurrentThemeName(event.target.value);
    }
    const options = []
    for (let key in props.ColorThemes) {
        options.push(<option>{key}</option>)
    }
    return (
        <div className = 'ThemeSelector'>
            <select onChange={handleChange}>
                {options}
            </select>
        </div>
    )
}

export default ThemeSelector