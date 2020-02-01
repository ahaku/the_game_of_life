import React from "react";
import produce from "immer";
// import '../../Mainpage.css';
import "./Grid.css";

function Grid(props) {
  const { colors } = props;
  return (
    <div className="Grid">
      <div
        className="GridWrapper"
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
