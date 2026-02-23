const puzzle = document.getElementById("puzzle");
const statusText = document.getElementById("status");

let tiles = [1, 2, 3, 4, 5, 6, 7, 8, ""];

function createPuzzle() {
  puzzle.innerHTML = "";

  tiles.forEach((tile, index) => {
    const div = document.createElement("div");
    div.classList.add("tile");

    if (tile === "") {
      div.classList.add("empty");
    } else {
      div.textContent = tile;
      div.addEventListener("click", () => moveTile(index));
    }

    puzzle.appendChild(div);
  });
}

function moveTile(index) {
  const emptyIndex = tiles.indexOf("");

  const validMoves = [
    index - 1,
    index + 1,
    index - 3,
    index + 3
  ];

  if (validMoves.includes(emptyIndex)) {
    [tiles[index], tiles[emptyIndex]] = [tiles[emptyIndex], tiles[index]];
    createPuzzle();
    checkWin();
  }
}

function shuffle() {
  tiles.sort(() => Math.random() - 0.5);
  statusText.textContent = "Arrange numbers in correct order!";
  createPuzzle();
}

function checkWin() {
  const winState = [1, 2, 3, 4, 5, 6, 7, 8, ""];

  if (JSON.stringify(tiles) === JSON.stringify(winState)) {
    statusText.textContent = "🎉 You Solved the Puzzle!";
  }
}

createPuzzle();
