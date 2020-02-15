import React from "react";
import produce from "immer";
import "./Grid.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  GridAdaptive: {
    [theme.breakpoints.down("md")]: {
      transform: "scale(0.72)"
    },
    [theme.breakpoints.down("sm")]: {
      transform: "scale(0.46) rotate(90deg)"
    },
    [theme.breakpoints.down("xs")]: {
      transform: "scale(0.46)  rotate(90deg) "
    }
  }
}));

function Grid(props) {
  const { colors } = props;
  const classes = useStyles();
  return (
    <div className="Grid">
      <div
        className={`GridWrapper ${classes.GridAdaptive}`}
        style={{
          outline: colors.border,
          gridTemplateColumns: `repeat(${props.numberCols}, ${props.cellSize})`
        }}
      >
        {props.grid.map((row, i) =>
          row.map((col, j) => (
            <div
              className="Cell"
              key={`${i}:${j}`}
              style={{
                width: props.cellSize,
                height: props.cellSize,
                backgroundColor: props.grid[i][j]
                  ? colors.filledCellBg
                  : colors.emptyCellBg,
                border: colors.border
              }}
              onClick={() => {
                const changedGrid = produce(props.grid, copyOfGrid => {
                  copyOfGrid[i][j] = props.grid[i][j] ? 0 : 1;
                });
                props.setGrid(changedGrid);
              }}
            ></div>
          ))
        )}
      </div>
    </div>
  );
}

export default Grid;
