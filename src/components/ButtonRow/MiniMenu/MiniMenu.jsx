import React from "react";
import Menu from "@material-ui/core/Menu";
import Button from "../Button/Button";
import IconButton from "@material-ui/core/IconButton";
import "./MiniMenu.css";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";

export default function MainMenu(props) {
  const {
    numberCols,
    numberRows,
    setGrid,
    emptyGridGenerate,
    setSavedGrid,
    grid,
    savedGrid
  } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="MiniMenu__wrpapper">
      <IconButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuRoundedIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <div className="MiniMenu__ButtonsWrapper">
          <Button
            variant="contained"
            title="Очистить"
            onClick={() => {
              props.clearGenerationsNumber();
              setGrid(emptyGridGenerate());
            }}
          />
          <Button
            variant="contained"
            title="Заполнить случайно"
            onClick={() => {
              props.clearGenerationsNumber();
              const rows = [];
              for (let i = 0; i < numberRows; i++) {
                rows.push(
                  Array.from(Array(numberCols), () =>
                    Math.random() > 0.7 ? 1 : 0
                  )
                );
              }
              setGrid(rows);
            }}
          />
          <Button
            variant="contained"
            title="Сохранить сетку"
            onClick={() => {
              setSavedGrid(grid);
              localStorage.setItem("Grid", JSON.stringify(grid));
            }}
          />
          <Button
            variant="contained"
            title="Загрузить сетку"
            onClick={() => {
              setGrid(savedGrid);
            }}
          />
        </div>
      </Menu>
    </div>
  );
}
