
const row0 = [];
const row1 = [];
const row2 = [];
const row3 = [];
const row4 = [];
const row5 = [];
const row6 = [];
const row7 = [];
const row8 = [];

const col0 = [];
const col1 = [];
const col2 = [];
const col3 = [];
const col4 = [];
const col5= [];
const col6 = [];
const col7 = [];
const col8 = [];

const box0 = [];
const box1 = [];
const box2 = [];
const box3 = [];
const box4 = [];
const box5 = [];
const box6 = [];
const box7 = [];
const box8 = [];


function
generateRandomNumber(){
    let number =  Math.floor(Math.random()  * 9) + 1
return number
}

// Sets the cols and boxes to the same as the rows (didnt finish the last 6 boxes)
function
updateArrays(){
col0[0] = row0[0]
col0[1] = row1[0]
col0[2] = row2[0]
col0[3] = row3[0]
col0[4] = row4[0]
col0[5] = row5[0]
col0[6] = row6[0]
col0[7] = row7[0]
col0[8] = row8[0]

col1[0] = row0[1]
col1[1] = row1[1]
col1[2] = row2[1]
col1[3] = row3[1]
col1[4] = row4[1]
col1[5] = row5[1]
col1[6] = row6[1]
col1[7] = row7[1]
col1[8] = row8[1]

col2[0] = row0[2]
col2[1] = row1[2]
col2[2] = row2[2]
col2[3] = row3[2]
col2[4] = row4[2]
col2[5] = row5[2]
col2[6] = row6[2]
col2[7] = row7[2]
col2[8] = row8[2]

col3[0] = row0[3]
col3[1] = row1[3]
col3[2] = row2[3]
col3[3] = row3[3]
col3[4] = row4[3]
col3[5] = row5[3]
col3[6] = row6[3]
col3[7] = row7[3]
col3[8] = row8[3]

col4[0] = row0[4]
col4[1] = row1[4]
col4[2] = row2[4]
col4[3] = row3[4]
col4[4] = row4[4]
col4[5] = row5[4]
col4[6] = row6[4]
col4[7] = row7[4]
col4[8] = row8[4]

col5[0] = row0[5]
col5[1] = row1[5]
col5[2] = row2[5]
col5[3] = row3[5]
col5[4] = row4[5]
col5[5] = row5[5]
col5[6] = row6[5]
col5[7] = row7[5]
col5[8] = row8[5]

col6[0] = row0[6]
col6[1] = row1[6]
col6[2] = row2[6]
col6[3] = row3[6]
col6[4] = row4[6]
col6[5] = row5[6]
col6[6] = row6[6]
col6[7] = row7[6]
col6[8] = row8[6]

col7[0] = row0[7]
col7[1] = row1[7]
col7[2] = row2[7]
col7[3] = row3[7]
col7[4] = row4[7]
col7[5] = row5[7]
col7[6] = row6[7]
col7[7] = row7[7]
col7[8] = row8[7]

col8[0] = row0[8]
col8[1] = row1[8]
col8[2] = row2[8]
col8[3] = row3[8]
col8[4] = row4[8]
col8[5] = row5[8]
col8[6] = row6[8]
col8[7] = row7[8]
col8[8] = row8[8]



box0[0] = row0[0]
box0[1] = row0[1]
box0[2] = row0[2]

box0[3] = row1[0]
box0[4] = row1[1]
box0[5] = row1[2]

box0[6] = row2[0]
box0[7] = row2[1]
box0[8] = row2[2]


box1[0] = row0[3]
box1[1] = row0[4]
box1[2] = row0[5]

box1[3] = row1[3]
box1[4] = row1[4]
box1[5] = row1[5]

box1[6] = row2[3]
box1[7] = row2[4]
box1[8] = row2[5]



box2[0] = row0[6]
box2[1] = row0[7]
box2[2] = row0[8]

box2[3] = row1[6]
box2[4] = row1[7]
box2[5] = row1[8]

box2[6] = row2[6]
box2[7] = row2[7]
box2[8] = row2[8]
}


// this is the main function. it takes the current row as arr, then it takes the boxes as parameters
function
pushNumbers(arr,firstBox,secondBox,thirdBox){

    let randomNumber = generateRandomNumber()

        
  if (arr.length == 9) {return }

  if (arr.includes(randomNumber)) { return pushNumbers(arr,firstBox,secondBox,thirdBox)}

  if (arr.length == 0) {

    if ( col0.includes(randomNumber) || box0.includes(randomNumber)) {
   
     return pushNumbers(arr,firstBox,secondBox,thirdBox)}  } 

  if (arr.length == 1) {

    if (col1.includes(randomNumber) || box0.includes(randomNumber)) {

     return pushNumbers(arr,firstBox,secondBox,thirdBox)}  } 
     if (arr.length == 2) {

        if (col2.includes(randomNumber) || box0.includes(randomNumber)) {

         return pushNumbers(arr,firstBox,secondBox,thirdBox)}  } 

         if (arr.length == 3) {

            if (col3.includes(randomNumber) || box1.includes(randomNumber)) {

             return pushNumbers(arr,firstBox,secondBox,thirdBox)}  } 

             if (arr.length == 4) {

                if (col4.includes(randomNumber) || box1.includes(randomNumber)) {
                    
                 return pushNumbers(arr,firstBox,secondBox,thirdBox)}  } 


             if (arr.length == 5) {

                if (col5.includes(randomNumber) || box1.includes(randomNumber)) {
                    
                 return pushNumbers(arr,firstBox,secondBox,thirdBox)}  } 

                 if (arr.length == 6) {

                    if (col6.includes(randomNumber) || box2.includes(randomNumber)) {
                        
                     return pushNumbers(arr,firstBox,secondBox,thirdBox)}  } 
    
                     if (arr.length == 7) {

                        if (col7.includes(randomNumber) || box2.includes(randomNumber)) {
                            
                         return pushNumbers(arr,firstBox,secondBox,thirdBox)}  } 

                         if (arr.length == 8) {

                            if (col8.includes(randomNumber) || box2.includes(randomNumber)) {
                                
                             return pushNumbers(arr,firstBox,secondBox,thirdBox)}  } 

                             if (arr.length == 9) {

                                if (col8.includes(randomNumber) || box2.includes(randomNumber)) {
                                    
                                 return pushNumbers(arr,firstBox,secondBox,thirdBox)}  } 
                
else { 
    arr.push(randomNumber)
    updateArrays()
return pushNumbers(arr,firstBox,secondBox,thirdBox)}
}

// here I draw out the first 3 boxes
pushNumbers(row0,box0,box1,box2)
pushNumbers(row1,box0,box1,box2)
pushNumbers(row2,box0,box1,box2)



// visualizing it on the page
function
makeGrid(){
    
    let tbl = document.getElementById('grid');

        for (let i = 0; i < 9; i++){
            let row = document.createElement('tr');
            row.id = 'row' + i;
            tbl.appendChild(row);

            let rowW = document.getElementById('row' + i);

            for (let j = 0; j < 9; j++){
                let cell = document.createElement('td');
                cell.id = 'cell' + j + i;
                rowW.appendChild(cell);
            }
        }

}

makeGrid();



function
displayRow0(){

    for (let i = 0; i < 9; i ++){
        document.getElementById('cell' + i + 0).innerHTML = row0[i]
    }
}
displayRow0();

function
displayRow1(){

    for (let i = 0; i < 9; i ++){
        document.getElementById('cell' + i + 1).innerHTML = row1[i]
    }
}
displayRow1();


function
displayRow2(){

    for (let i = 0; i < 9; i ++){
        document.getElementById('cell' + i + 2).innerHTML = row2[i]
    }
}
displayRow2();

function
displayRow3(){

    for (let i = 0; i < 9; i ++){
        document.getElementById('cell' + i + 3).innerHTML = row3[i]
    }
}
displayRow3();

function
displayRow4(){

    for (let i = 0; i < 9; i ++){
        document.getElementById('cell' + i + 4).innerHTML = row4[i]
    }
}
displayRow4();

function
displayRow5(){

    for (let i = 0; i < 9; i ++){
        document.getElementById('cell' + i + 5).innerHTML = row5[i]
    }
}
displayRow5();

function
displayRow6(){

    for (let i = 0; i < 9; i ++){
        document.getElementById('cell' + i + 6).innerHTML = row6[i]
    }
}
displayRow6();

function
displayRow7(){

    for (let i = 0; i < 9; i ++){
        document.getElementById('cell' + i + 7).innerHTML = row7[i]
    }
}
displayRow7();

function
displayRow8(){

    for (let i = 0; i < 9; i ++){
        document.getElementById('cell' + i + 8).innerHTML = row8[i]
    }
}
displayRow8();