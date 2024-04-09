/*TODO: 
Create a function that takes a grid of $ and - where each ($) represents a mine and each (-) will represents a mine-free spot.
Return an array where each ($) is replaced by a digit indicating the number of mines immediately mine adjacent to the spot.
*/

/*NOTE - 
EX:
mineGrid([
    ["-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-"],
    ["-", "-", "$", "-", "-"],
    ["-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-"]
])
output:
    ["0", "0", "0", "0", "0"],
    ["0", "1", "1", "1", "0"],
    ["0", "1", "$", "1", "0"],
    ["0", "2", "2", "2", "0"],
    ["0", "1", "$", "1", "0"]

*/


const minegrid = (arr) => {
    //NOTE - Create a helper function that accesses the element possition (x, y) in arr. if the y index is valid or exists.
    //I want to return arr[y][x]; otherwise return null. (this will prevent accessing undefined elements and avoid errors)
    const checkAccess = (y,x) => arr[y] ? arr[y,x] : null
    //NOTE - Create another helper function that calculates the number of adjacent mines around the cell at position (y,x)
    const getMines = (x,y) => {
        //NOTE an array is constucted with elements representing the content of the adjacent cells,
        //we are going to use checkAccess for each of the eight digit possible adjacent position.
        return [
            checkAccess(y+1, x),   //Checks the cell directly below the current cell
            checkAccess(y+1, x+1), //Checks the cell diagolally below and to the right of the currect cell.
            checkAccess(y+1, x-1), //Checks the cell diagonally below and the the left of the current cell.
            checkAccess(y, x+1),   //Checks the cell directly to the right of the current cell.
            checkAccess(y, x-1),   //Checks the cell directly to the left of the current cell.
            checkAccess(y-1, x),   //Checks the cell directly above the current cell.
            checkAccess(y-1, x+1), //Checks the cell diagonally above and the the right of the current cell.
            checkAccess(y-1, x-1), //Checks the cell diagonally above and the the left of the current cell.
            //NOTE - Construct an array of values that represent the content of the cells adjacent, after the constructing
            //of the array we will use filter method to keep only those elements that are mines. ($)
        ].filter(adjCell => adjCell === "$").length.toString()
    }
    return arr.map((r,y) => r.map((c,x) => c === "-" ? getMines(x,y) : c))
}