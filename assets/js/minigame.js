/* Mini Game 4 - Sliding Tile Puzzle
document.addEventListener("DOMContentLoaded", () => {
    const gameSection = document.getElementById("mini-game");
    const shuffleBtn = document.getElementById("shuffle-btn");

    const gridSize = 3;

    let tiles = [];

    initGame();

    function initGame() {
        // Create an array with tile numbers from 1 to 9
        tiles = Array.from({ length: gridSize * gridSize }, (_, index) => index + 1);
        // Set the last element as an empty space
        tiles[tiles.length - 1] = "";

        renderTiles();
        addTileClickListeners();
    }

    function renderTiles() {
        gameSection.innerHTML = "";
        tiles.forEach((tileNumber, index) => {
            const tile = document.createElement("div");
            tile.textContent = tileNumber;
            tile.classList.add("tile");
            if (tileNumber === "") {
                tile.classList.add("empty");
            }
            gameSection.appendChild(tile);
        });
    }

    function addTileClickListeners() {
        const tiles = document.querySelectorAll(".tile");
        tiles.forEach(tile => {
            tile.addEventListener("click", () => {
                const emptyTile = document.querySelector(".empty");
                if (isAdjacent(tile, emptyTile)) {
                    swapTiles(tile, emptyTile);
                    if (isPuzzleSolved()) {
                        setTimeout(() => {
                            alert("Congratulations! You solved the puzzle!");
                        }, 100);
                    }
                }
            });
        });
    }

    function isAdjacent(tile1, tile2) {
        const tileIndex1 = Array.from(gameSection.children).indexOf(tile1);
        const tileIndex2 = Array.from(gameSection.children).indexOf(tile2);

        return (
            (Math.abs(tileIndex1 - tileIndex2) === 1 && Math.floor(tileIndex1 / gridSize) === Math.floor(tileIndex2 / gridSize)) ||
            (Math.abs(tileIndex1 - tileIndex2) === gridSize)
        );
    }

    function swapTiles(tile1, tile2) {
        const tempText = tile1.textContent;
        tile1.textContent = tile2.textContent;
        tile2.textContent = tempText;

        tile1.classList.toggle("empty");
        tile2.classList.toggle("empty");
    }

    function isPuzzleSolved() {
        for (let i = 0; i < tiles.length - 1; i++) {
            if (tiles[i] !== i + 1) {
                return false;
            }
        }
        return true;
    }

    shuffleBtn.addEventListener("click", () => {
        // Randomize the tiles
        shuffleTiles();
        renderTiles();
        addTileClickListeners();
    });

    function shuffleTiles() {
        for (let i = tiles.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
        }
    }
});
*/