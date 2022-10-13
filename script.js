//set important constants and variables 

const btn = document.getElementById('btnChangeSquares');

// Event listener

btn.addEventListener('click', () =>{resetGrid();});



// Creates a grid 16 x 16

function makeGrid(numberCubs) {
    //start with given square number or 16x16
    numberCubs = numberCubs || 16;
    // to fit each cub
    let cubWidth = 40/numberCubs + "rem";
    let cubHeight = 40/numberCubs + "rem";
    
    const mainContainer = document.getElementById("gamecontainer");
    //make empty array for div
    let divArr = [];
    
    for ( i = 0 ; i < numberCubs ; i++) {
        //for each num,create a div
        divArr[i] = document.createElement('div'); //create the rows div 
        //append it to the gamecontainer
        mainContainer.appendChild(divArr[i]); //append row to the container

        for ( j = 0 ; j < numberCubs ; j++){
            // give a class "cub" to the div created
            const newCub = document.createElement('div');
            const classAttribute = document.createAttribute('class');
            classAttribute.value = "cub";
            newCub.setAttributeNode(classAttribute);
            //create a style attribute
            const widthHeightAttribute = document.createAttribute("style");
            //give the style the value
            widthHeightAttribute.value = `width: ${cubWidth}; height: ${cubHeight};`;
            //set attribute to the div (class= "cub")
            newCub.setAttributeNode(widthHeightAttribute);
            //append it on the array
            divArr[i].appendChild(newCub);
        }
    }
    onLoad();
}

// mouse hover on func

function hoverOn(){
    // select all the cub div
    const cubNode = document.querySelectorAll('div.cub');
    //change nodelist to array
    let cubArr = Array.from(cubNode); 
    
    //select each cub in array and change color
    cubArr.forEach((item) =>{
      item.addEventListener('mouseover', () =>{
        item.style.backgroundColor = '#000000';
      })
        
    })
   
}

// Reset grid func

function resetGrid(){
    
    let allCubs = document.querySelectorAll("div.cub").forEach(cub => {
        cub.style.backgroundColor = "white";
    })
    let promptNumberCubs = prompt("How many squares per side? (Maximum: 100)");
    let numberCubs = parseInt(promptNumberCubs, 10);
    if (isNaN(numberCubs)) {
        window.alert("Please insert a positive integer. (Maximum: 100)");
        return;
    }
    else if (numberCubs <= 0) {
        window.alert("Please insert a positive integer. (Maximum: 100)");
        return;
    }
    else if (numberCubs > 100) {
        window.alert("Please insert a positive integer. (Maximum: 100)");
        return;
    }
   

    const gameContainer = document.getElementById("gamecontainer");

    // Delete all divs from the container

    while (gameContainer.firstChild) 
        gameContainer.removeChild( gameContainer.firstChild);
        makeGrid(numberCubs);
}



function onLoad() {
    let cubPx = document.querySelectorAll(".cub");
    cubPx.forEach(cubPx => cubPx.addEventListener("mouseover", hoverOn));
}

makeGrid();

  //down here is another way to do it ,but failed


// const container = document.getElementById('gamecontainer');
// OR const container = document.querySelector('#container');

//takes (rows, columns) and make a grid

// function makeRows(rowNum) {
//     //create rows
//     for (let r = 0 ; r < rowNum ; r++) {
//         let row = document.createElement('div'); //create the rows div 
//         row.classList.add('gridRow'); //add the 'gridRow' class name to row
//         container.appendChild(row); //append row to the container
//     };
// };

// //Creates columns

// function makeColumns(cubNum) {
//     for (let r = 0 ; r < rows.length ; r++) { 
//         for(let c = 0 ; c < cubNum ; c++) { //each loop append a div to rows[c] with class name 'cub'
//             let newCub = document.createElement('div');
//             newCub.classList.add('cub');
//             rows[c].appendChild(newCub);

//         };
//     };
// };
