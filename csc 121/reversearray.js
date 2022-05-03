// // create the first array
// var currentArr = null;

// const initArr = [];
// for (var i = 0; i <= 5, i++) {

// }

const initialArr = [1, 5, 3, 9, 7];

currentArr = initialArr;

const arrayLen = document.getElementById('array-length');

function createTable(arr) {
  const arrayTable = document.getElementById('array-table');
  const retrievedTable = document.createElement('table');
  retrievedTable.id = 'retrieved-table';

  arrayTable.appendChild(retrievedTable);

  const arrayRow = document.createElement('tr');
  arrayRow.id = 'array-row';
  arrayRow.className = '.arrayRow';
  retrievedTable.appendChild(arrayRow);
  for (var i = 0; i < arr.length; i++) {
    const th = document.createElement('th');
    th.className = `.arrayEl${i}`;
    th.appendChild(document.createTextNode(arr[i]));
    arrayRow.appendChild(th);
  }

  const indexRow = document.createElement('tr');
  indexRow.id = 'index-row';
  retrievedTable.appendChild(indexRow);
  for (let i = 0; i < arr.length; i++) {
    const td = document.createElement('td');
    td.appendChild(document.createTextNode(i));
    indexRow.appendChild(td);
  }
  arrayLen.innerHTML = `Array Length: ${currentArr.length}`;
}

// window.onload = function () {
//   createTable(initialArr);
// };

function clearTable() {
  const retrievedTable = document.getElementById('retrieved-table');
  retrievedTable.remove();
}

function makeNewArray() {
  clearTable();
  const inputVal = document.getElementById('input-new-array').value;
  const newArrayVal = inputVal.split(' ');
  createTable(newArrayVal);
  inputVal.value = '';
  document.getElementById('array-popup').style.display = 'none';
  currentArr = newArrayVal;
  arrayLen.innerHTML = `Array Length: ${currentArr.length}`;
  return currentArr;
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

// create second array

var currentArr2 = null;

const initArr2 = [];
// for (var i = 0; i <= 5, i++) {

// }

const initialArr2 = [1, 3, 5, 7, 9];

currentArr2 = initialArr2;

const arrayLen2 = document.getElementById('array-length2');

function createTable2(arr2) {
  const arrayTable2 = document.getElementById('array-table2');
  const retrievedTable2 = document.createElement('table');
  retrievedTable2.id = 'retrieved-table2';

  arrayTable2.appendChild(retrievedTable2);

  const arrayRow2 = document.createElement('tr');
  arrayRow2.id = 'array-row2';
  arrayRow2.className = '.arrayRow2';
  retrievedTable2.appendChild(arrayRow2);
  for (var j = 0; j < arr2.length; j++) {
    const th2 = document.createElement('th');
    th2.className = `.arrayEl${j}`;
    th2.appendChild(document.createTextNode(arr2[j]));
    arrayRow2.appendChild(th2);
  }

  const indexRow2 = document.createElement('tr');
  indexRow2.id = 'index-row2';
  retrievedTable2.appendChild(indexRow2);
  for (let j = 0; j < arr2.length; j++) {
    const td2 = document.createElement('td');
    td2.appendChild(document.createTextNode(j));
    indexRow2.appendChild(td2);
  }
  arrayLen2.innerHTML = `Array Length: ${currentArr2.length}`;
}

window.onload = function () {
  createTable(initialArr)
  createTable2(initialArr2);
};

function clearTable2() {
  const retrievedTable2 = document.getElementById('retrieved-table2');
  retrievedTable2.remove();
}

function makeNewArray2() {
  clearTable2();
  const inputVal2 = document.getElementById('input-new-array2').value;
  const newArrayVal2 = inputVal2.split(' ');
  createTable2(newArrayVal2);
  inputVal2.value = '';
  document.getElementById('array-popup2').style.display = 'none';
  currentArr2 = newArrayVal2;
  arrayLen2.innerHTML = `Array Length: ${currentArr2.length}`;
  return currentArr2;
}

const inputField2 = document.getElementById('input-new-array2');
inputField2.addEventListener('keyup', (event) => {
  if (event.key == 'Enter') {
    document.getElementById('submit-array2').click();
  }
});

document.getElementById('submit-array2').onclick = function () {
  makeNewArray2();
};

const arrayPopupButton2 = document.getElementById('array-popup-button2');
const arrayPopup2 = document.getElementById('array-popup2');
arrayPopupButton2.onclick = function () {
  arrayPopup2.style.display = 'block';
  inputField2.focus();
};


// loop through button
const nextButton = document.getElementById('next-button');
const loopContent = document.getElementById('loop-content');
const code = document.getElementById('code');
const indexInfo = document.getElementById('index-info');

function incrementArrIndex(index) {
  console.log('inc');
  return index + 1;
}

function loopThrough(arr, arr2) {
  var i = 0;
  var j = 0;
  loopContent.style.display = 'block';
  document.getElementById('icon-button').style.display = 'none';
  nextButton.disabled = false;
  nextButton.style.display = 'block';
  indexInfo.style.display = 'block';
  code.style.display = 'block';
  code.innerHTML = `<br /><br />if(arr1.length != arr2.length) return false; <br> else <br> for (int i = 0; i < arr1.length; i++) <br> if (arr1[i] != arr2[arr2.length - 1 - i]) return false; <br> return true;`;
  nextButton.onclick = () => {
    console.log(i);
    console.log(j);
    console.log(document.getElementById('icon-button').style.display);
    document.getElementById('icon-button').style.display = 'block';
    if(currentArr.length != currentArr2.length){
      indexInfo.innerHTML = `<br><br> <span style='background-color:red'><b>Array_1 is not a reverse of Array_2.</b></span> <br> Length of Array_1 is <span style='background-color:yellow'><b> ${currentArr.length}</b></span> <br> Length of Array_2 is <span style='background-color:yellow'><b> ${currentArr2.length} </b></span>`;
      document.getElementById('icon-button').style.display = 'none';
      nextButton.disabled = true;
      document.getElementById('restart-loop').style.display = 'block';
    }
    else {
      const revIndex = currentArr2.length - 1 - parseInt(i);
      indexInfo.innerHTML = `<br><br> Value at index <span style='background-color:yellow'><b>${i} </b></span> of Array_1 is <span style='background-color: yellow'><b>${arr[i]} </b></span> <br> Value at index <span style='background-color:yellow'><b>${revIndex} </b></span> of Array_2 is <span style='background-color:yellow'><b>${arr2[revIndex]}</b></span>`;
      if(parseInt(arr[i]) != parseInt(arr2[revIndex])){
      indexInfo.innerHTML = `<br><br> <span style='background-color:red'><b> Array_1 is not a reverse of Array_2 </b></span> <br> Value at index <span style='background-color:yellow'><b>${i} </b></span> of Array_1 is <span style='background-color:green'><b>${arr[i]} </b></span> <br> Value at index <span style='background-color:yellow'><b>${revIndex}</b></span> of Array_2 is <span style='background-color:blue'><b>${arr2[revIndex]} </b></span>`;
      document.getElementById('icon-button').style.display = 'none';
      nextButton.disabled = true;
      document.getElementById('restart-loop').style.display = 'block';
      }
      const arrayElement = document.getElementsByClassName(`.arrayEl${i}`);
      const lastArrayElement = document.getElementsByClassName(`.arrayEl${i - 1}`);

      if (lastArrayElement[0] != undefined) {
        if (arr[i] == undefined) {
          indexInfo.innerHTML = `<br><br><span style='background-color:yellow'><b> ARRAY_1 IS A REVERSE OF ARRAY_2 <b></span>`;
          document.getElementById('icon-button').style.display = 'none';
          nextButton.disabled = true;
          document.getElementById('restart-loop').style.display = 'block';
        }
      }
      i++;
      j++;
    }
    }
  i = 0;
  j = 0;
  console.log(i);
  console.log(j);
}

const startOverButton = document.getElementById('restart-loop');
startOverButton.onclick = () => {
  console.log('start');
  loopThrough(currentArr, currentArr2);
  loopContent.style.display = 'none';
  startOverButton.style.display = 'none';
  nextButton.style.display = 'none';
  indexInfo.innerHTML = '';
};

const loopThroughButton = document.getElementById('loop-through-button');
loopThroughButton.onclick = () => {
  loopThrough(currentArr, currentArr2);
};

const indexInfoPopup = document.getElementById('index-info-popup');
const iconButton = document.getElementById('icon-button');
iconButton.onclick = () => {
  indexInfoPopup.style.display = 'block';
  console.log('clicked');
};


//close
const span = document.getElementsByClassName('close');
span[0].onclick = () => {
  console.log(document.getElementsByClassName('close'));
  arrayPopup.style.display = 'none';
};
span[1].onclick = () => {
  console.log(document.getElementsByClassName('close'));
  arrayPopup2.style.display = 'none';
};