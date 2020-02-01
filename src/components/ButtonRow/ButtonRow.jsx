import React from "react";
import Button from "./Button/Button";
import Settings from "./Settings/Settings";
import Reference from "./Reference/Reference";
import IconButton from "@material-ui/core/IconButton";
import PauseCircleOutlineRoundedIcon from "@material-ui/icons/PauseCircleOutlineRounded";
import PlayCircleOutlineRoundedIcon from "@material-ui/icons/PlayCircleOutlineRounded";
import SkipNextRoundedIcon from "@material-ui/icons/SkipNextRounded";
import MainpageReferenceText from "../../Text";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MiniMenu from "./MiniMenu/MiniMenu";
import { makeStyles } from "@material-ui/core/styles";
import "./ButtonRow.css";
const useStyles = makeStyles(theme => ({
  MiniMenu: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block"
    }
  },
  Btn: {
    display: "block",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  }
}));

function ButtonRow(props) {
  const classes = useStyles();
  const {
    setColors,
    setRunning,
    colors,
    runGame,
    numberCols,
    numberRows,
    emptyGridGenerate,
    setSavedGrid,
    savedGrid,
    gameSpeed,
    setGrid,
    grid,
    running,
    runningRef
  } = props;
  return (
    <div className="ButtonRow">
      <AppBar position="static">
        <Toolbar className="ToolBar">
          <div className={classes.MiniMenu}>
            <MiniMenu
              setGrid={setGrid}
              emptyGridGenerate={emptyGridGenerate}
              numberRows={numberRows}
              numberCols={numberCols}
              clearGenerationsNumber={props.clearGenerationsNumber}
              grid={grid}
              savedGrid={savedGrid}
              setSavedGrid={setSavedGrid}
            />
          </div>
          <div className={classes.Btn}>
            <Button
              variant="contained"
              // color='default'
              title="Очистить"
              onClick={() => {
                props.clearGenerationsNumber();
                setGrid(emptyGridGenerate());
              }}
            />
          </div>
          <div className={classes.Btn}>
            <Button
              variant="contained"
              // color='primary'
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
          </div>
          <Settings
            colors={colors}
            setColors={setColors}
            ColorThemes={props.ColorThemes}
            currentThemeName={props.currentThemeName}
            setCurrentThemeName={props.setCurrentThemeName}
            runningRef={runningRef}
            changeGridSize={props.changeGridSize}
            gameSpeed={props.gameSpeed}
            setGameSpeed={props.setGameSpeed}
            setGrid={props.setGrid}
          ></Settings>
          <IconButton
            variant="contained"
            // color='secondary'
            title="Старт / Стоп"
            onClick={() => {
              setRunning(!running);
              console.log(gameSpeed);
              if (!running) {
                runningRef.current = true;
                runGame();
              }
            }}
          >
            {runningRef.current ? (
              <PauseCircleOutlineRoundedIcon fontSize="large" />
            ) : (
              <PlayCircleOutlineRoundedIcon fontSize="large" />
            )}
            {/* <PlayCircleOutlineRoundedIcon color="primary" fontSize='medium'/> */}
          </IconButton>
          <IconButton
            variant="contained"
            title="Один шаг"
            onClick={props.oneStepEvolution}
          >
            <SkipNextRoundedIcon />
          </IconButton>
          <Reference text={MainpageReferenceText}></Reference>
          <div className={classes.Btn}>
            <Button
              variant="contained"
              // color='primary'
              title="Сохранить сетку"
              onClick={() => {
                setSavedGrid(grid);
                localStorage.setItem("Grid", JSON.stringify(grid));
              }}
            />
          </div>
          <div className={classes.Btn}>
            <Button
              variant="contained"
              // color='primary'
              title="Загрузить сетку"
              onClick={() => {
                setGrid(savedGrid);
              }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default ButtonRow;
