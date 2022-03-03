// const rows = 10;
// const columns = 8;

// const myArray1 = [];

// for (let i = 0; i < rows; i++) {
//   myArray1[i] = [];
//   for (let j = 0; j < columns; j++) {
//     myArray1[i][j] = null;
//   }
// }
// console.log(myArray1);

// const myArray2 = new Array(rows);

// for (let i = 0; i < myArray2.length; i++) {
//   myArray2[i] = new Array(columns);
// }

// console.log(myArray2);

// const myArray3 = Array.from(Array(rows), () => new Array(columns));

// console.log(myArray3);

// const myArray4 = [[],[],[],[],[],[],[],[]];

// console.log(myArray4);

const initMatrix =[[1, 2, 3], [4, 5, 6], [6, 7, 8]]
const iMatrix = [];
var currentMatrix = null;
function createTable(tableData) {
  const arrayTable = document.getElementById('array-table');
  const table = document.createElement('table');
  table.id = 'table';
  arrayTable.appendChild(table);
  const tableBody = document.createElement('tbody');
  tableData.forEach(function(rowData) {
    const row = document.createElement('tr');

    rowData.forEach(function(cellData) {
      var i = 0;
      const cell = document.createElement('td');
      cell.className = `.matrixEl${i++}`
      cell.appendChild(document.createTextNode(cellData));
      row.appendChild(cell);
    });

    tableBody.appendChild(row);
  });

  table.appendChild(tableBody);
  document.body.appendChild(table);
}

window.onload = function () {
  createTable(initMatrix);
};

function clearTable(){
  const table = document.getElementById('table');
  table.remove();
}


function makeNewArray() {
  clearTable();
  var inputVal = document.getElementById('input-new-array').value;
  if(typeof(inputVal) === "string"){inputVal = JSON.parse(inputVal)}
  // console.log(inputVal);
  // inputVal = JSON.parse(inputVal);
  createTable(inputVal);
  document.getElementById('array-popup').style.display = 'none';
  currentMatrix = inputVal;
  // arrayLen.innerHTML = `Array Length: ${currentArr.length}`;
  return currentMatrix;
}

const inputField = document.getElementById('input-new-array');
inputField.addEventListener('keyup', (event) => {
  if (event.key == 'Enter') {
    document.getElementById('submit-array').click();
  }
});

document.getElementById('submit-array').onclick = function () {
  makeNewArray();
};

const arrayPopupButton = document.getElementById('array-popup-button');
const arrayPopup = document.getElementById('array-popup');
arrayPopupButton.onclick = function () {
  arrayPopup.style.display = 'block';
  inputField.focus();
};

const nextButton = document.getElementById('next-button');
const loopContent = document.getElementById('loop-content');
const indexInfo = document.getElementById('index-info');

function incrementArrIndex(index) {
  console.log('inc');
  return index + 1;
}

function loopThrough(arr) {
  var i = 0;

  loopContent.style.display = 'block';
  document.getElementById('icon-button').style.display = 'none';
  nextButton.disabled = false;
  nextButton.style.display = 'block';
  indexInfo.style.display = 'block';

  nextButton.onclick = () => {
    console.log(i);
    console.log(document.getElementById('icon-button').style.display);
    document.getElementById('icon-button').style.display = 'block';
    indexInfo.innerHTML = `for (int index = 0; index < array.length; index++) <br><br>
     index = <span style='background-color:yellow'><b> ${i} </b></span> <br>
     array[index] = <span style='background-color:yellow'><b> ${arr[i]}</b></span>`;

    const arrayElement = document.getElementsByClassName(`.arrayEl${i}`);
    const lastArrayElement = document.getElementsByClassName(`.arrayEl${i - 1}`);

    if (lastArrayElement[0] != undefined) {
      if (arr[i] == undefined) {
        indexInfo.innerHTML = 'END OF ARRAY';
        document.getElementById('icon-button').style.display = 'none';
        nextButton.disabled = true;
        document.getElementById('restart-loop').style.display = 'block';
        lastArrayElement[0].style.backgroundColor = 'white';
      }

      arrayElement[0].style.backgroundColor = '#fcf23d';
      lastArrayElement[0].style.backgroundColor = 'white';
    }
    arrayElement[0].style.backgroundColor = '#fcf23d';
    i++;
  };
  i = 0;
  console.log(i);
}
