"use client";

import { useState } from "react";

const DEFAULT_GRID_SIZE: number = 8;
const DEFAULT_GRID_COLOR: string = "#fff";
const DEFAULT_SELECTED_COLOR: string = "#0472ff";
const COLOR_PALETTE: string[] = [
  "#000000",
  "#ff0000",
  "#00ff00",
  "#0000ff",
  "#ffff00",
  "#ff00ff",
  "#00ffff",
  "#ffffff",
];

export default function PixelArtMaker() {
  const [gridSize, setGridSize] = useState<number>(DEFAULT_GRID_SIZE);
  const [grid, setGrid] = useState<string[]>(
    Array(gridSize * gridSize).fill(DEFAULT_GRID_COLOR),
  );
  const [selectedColor, setSelectedColor] = useState<string>(
    DEFAULT_SELECTED_COLOR,
  );

  const handleCellClick = (index: number) => {
    const newGrid = [...grid];
    newGrid[index] =
      newGrid[index] === selectedColor ? DEFAULT_GRID_COLOR : selectedColor;
    setGrid(newGrid);
  };

  const handleGridChange = (newGridSize: number) => {
    setGridSize(newGridSize);
    setGrid(Array(newGridSize * newGridSize).fill(DEFAULT_GRID_COLOR));
  };

  const resetGrid = () => {
    setGrid(Array(gridSize * gridSize).fill("#ffffff"));
  };

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <div className="flex gap-3">
        <label htmlFor="size">Pick grid size:</label>
        <input
          id="size"
          type="number"
          value={gridSize}
          onChange={(e) => handleGridChange(+e.target.value)}
          className="text-black px-2"
        />
        <label htmlFor="color">Pick color:</label>
        <input
          id="color"
          type="color"
          value={selectedColor}
          onChange={(e) => setSelectedColor(e.target.value)}
          className="text-black"
        />
      </div>
      <div className="flex gap-2">
        <button
          onClick={resetGrid}
          className="mr-4 p-1 border rounded hover:bg-gray-200 hover:border-gray-200 hover:text-gray-950 transition-colors ease-in-out duration-300 focus:outline-none w-36"
        >
          Reset
        </button>
        {COLOR_PALETTE.map((color) => (
          <div
            key={color}
            onClick={() => handleColorSelect(color)}
            className="w-8 h-8 border cursor-pointer"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
      <div
        className="grid w-[30rem] h-[30rem] border gap-0.5"
        style={{
          gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
        }}
      >
        {grid.map((color, index) => (
          <div
            key={index}
            onClick={() => handleCellClick(index)}
            className="border cursor-pointer"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </div>
  );
}
