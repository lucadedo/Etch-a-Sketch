//set important constants and variables 

const container = document.getElementById('container');
// OR const container = document.querySelector('#container');
let rows = document.getElementsByClassName('gridRow');
let cubs = document.getElementsByClassName('cub');

// Creates a grid 16 x 16

function makeGrid() {
    makeRows(16);
    makeColumns(16);
}

//takes (rows, columns) and make a grid

function makeRows(rowNum) {
    //create rows
    for (r = 0 ; r < rowNum ; r++) {
        let row = document.createElement('div'); //create the rows div 
        row.classList.add('gridRow'); //add the 'gridRow' class name to row
        container.appendChild(row); //append row to the container
    };
};

//Creates columns

function makeColumns(cubNum) {
    for (r = 0 ; r < rows.length ; r++) { 
        for(c = 0 ; c < cubNum ; c++) { //each loop append a div to rows[c] with class name 'cub'
            let newCub = document.createElement('div');
            newCub.classList.add('cub');
            rows[c].appendChild(newCub);

        };
    };
};
makeGrid();