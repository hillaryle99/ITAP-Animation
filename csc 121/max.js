/* eslint-disable no-unused-vars */
/* eslint-disable prefer-destructuring */
/* eslint-disable eqeqeq */
/* eslint-disable no-shadow */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */

var currentArr = null;

const initArr = [];
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

window.onload = function () {
  createTable(initialArr);
};

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

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Adding values to the array ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// ---Push Methods---
const submitPush = document.getElementById('submit-push');
const pushField = document.getElementById('add-val');
console.log(document.getElementById('add-val'));
// allows enter to trigger the button
pushField.addEventListener('keyup', (event) => {
  if (event.key == 'Enter') {
    submitPush.click();
  }
});

const pushPopupButton = document.getElementById('push-popup-button');
const pushPopup = document.getElementById('push-popup');
// focuses the cursor on the textbox
pushPopupButton.onclick = () => {
  pushPopup.style.display = 'block';
  pushField.focus();
};

submitPush.onclick = () => {
  if (currentArr !== initialArr) {
    currentArr = makeNewArray();
  }
  clearTable();

  if (pushField.value != '') {
    currentArr.push(parseInt(pushField.value, 10));
    createTable(currentArr);
    pushField.value = '';
    pushPopup.style.display = 'none';
    return currentArr;
  }
  createTable(currentArr);
  pushPopup.style.display = 'none';
  return currentArr;
};

// ---Enqueue Method---
const submitEnqueue = document.getElementById('submit-enqueue');
const enqueueField = document.getElementById('enqueue-val');
enqueueField.addEventListener('keyup', (event) => {
  if (event.key == 'Enter') {
    submitEnqueue.click();
  }
});

const enqueuePopupButton = document.getElementById('enqueue-popup-button');
const enqueuePopup = document.getElementById('enqueue-popup');
enqueuePopupButton.onclick = () => {
  enqueuePopup.style.display = 'block';
  enqueueField.focus();
};

submitEnqueue.onclick = () => {
  if (currentArr != initialArr) {
    currentArr = makeNewArray();
  }
  clearTable();

  if (enqueueField.value != '') {
    currentArr.push(enqueueField.value);
    createTable(currentArr);
    pushField.value = '';
    enqueuePopup.style.display = 'none';
    return currentArr;
  }
  createTable(currentArr);
  enqueuePopup.style.display = 'none';
  return currentArr;
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ removing values from the array ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// ---the Pop Method---
const popPopup = document.getElementById('pop-popup');
const popPopupButton = document.getElementById('pop-popup-button');

function popVal() {
  console.log('pop val');
  if (currentArr != initialArr) {
    currentArr = makeNewArray();
  }
  console.log(currentArr);
  clearTable();
  document.getElementById('display-pop').innerHTML = `<b>${
    currentArr.slice(-1)[0]
  }</b> at index <b>${currentArr.length - 1}</b>`;
  currentArr.pop();
  createTable(currentArr);
  popPopup.style.display = 'block';
  return currentArr;
}

popPopupButton.onclick = () => {
  console.log('calling popval');
  popVal();
  popPopup.style.display = 'block';
};

// ---Dequeue Method---
const dequeuePopup = document.getElementById('dequeue-popup');
function dequeueVal() {
  if (currentArr != initialArr) {
    currentArr = makeNewArray();
  }

  clearTable();
  document.getElementById('display-dequeue').innerHTML = `<b>${currentArr.shift()}</b> at index 0`;
  createTable(currentArr);
  dequeuePopup.style.display = 'block';
  return currentArr;
}

const dequeuePopupButton = document.getElementById('dequeue-popup-button');
dequeuePopupButton.onclick = () => {
  dequeueVal();
  dequeuePopup.style.display = 'block';
};

// --- Loop Through Sum ---
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
  var max = arr[0];
  // arr.innerHTML = initMax;
  nextButton.onclick = () => {
    console.log(i);
    console.log(document.getElementById('icon-button').style.display);
    if(arr[i] > max){
      max = arr[i];
    }
    const arrayElement = document.getElementsByClassName(`.arrayEl${i}`);
    if(arr[i] == max){
      arrayElement[0].style.backgroundColor = "yellow";
    }
    else{
      arrayElement[0].style.backgroundColor = "green";
    }
    arr.innerHTML = max;
    max.className = `.m`;
    // const cnt = Number(arr.innerHTML) + parseInt(arr[i])
    // arr.innerHTML = cnt
    // const currentLength = i + 1
    // const avg = cnt / currentLength
    document.getElementById('icon-button').style.display = 'block';
    // indexInfo.innerHTML = `double sum = 0.0; <br><br> double average; <br><br> for (int index = 0; index < array.length; index++) <br><br> sum += array[index] <br><br> average = sum / arr.length <br><br> Sum of the array is <span style='background-color:yellow'><b> ${cnt}</b></span> <br><br> Length of the Array is  <span style='background-color:yellow'><b> ${i + 1}</b></span> <br><br> Average of the Array is <span style='background-color:yellow'><b> ${avg}</b></span>`;
    indexInfo.innerHTML = `int max = arr[0]; <br><br> for(int i = 0; i < arr.length; i++) <br><br> if(arr[i] > max) max = arr[i]; <br><br> Maximum is <span style='background-color:yellow'><b> ${max} </b></span>`;

    // const ar = document.getElementsByClassName(`m`);
    const lastArrayElement = document.getElementsByClassName(`.arrayEl${i - 1}`);
    // $("max").style.backgroundColor = "Yellow";
    if (lastArrayElement[0] != undefined) {
      if (arr[i] == undefined) {
        indexInfo.innerHTML = 'END OF ARRAY';
        document.getElementById('icon-button').style.display = 'none';
        nextButton.disabled = true;
        document.getElementById('restart-loop').style.display = 'block';
        // lastArrayElement[0].style.backgroundColor = 'white';
      }

      // arrayElement[0].style.backgroundColor = '#fcf23d';
      // lastArrayElement[0].style.backgroundColor = 'white';
    }
    // arrayElement[0].style.backgroundColor = '#fcf23d';
    i++;
  };
  i = 0;
  console.log(i);
}

const startOverButton = document.getElementById('restart-loop');
startOverButton.onclick = () => {
  console.log('start');
  loopThrough(currentArr);
  loopContent.style.display = 'none';
  startOverButton.style.display = 'none';
  nextButton.style.display = 'none';
  indexInfo.innerHTML = '';
};

const loopThroughButton = document.getElementById('loop-through-button');
loopThroughButton.onclick = () => {
  loopThrough(currentArr);
};

const indexInfoPopup = document.getElementById('index-info-popup');
const iconButton = document.getElementById('icon-button');
iconButton.onclick = () => {
  indexInfoPopup.style.display = 'block';
  console.log('clicked');
};

const span = document.getElementsByClassName('close');
span[0].onclick = () => {
  console.log(document.getElementsByClassName('close'));
  arrayPopup.style.display = 'none';
};
span[1].onclick = () => {
  pushPopup.style.display = 'none';
};
span[2].onclick = () => {
  popPopup.style.display = 'none';
};
span[3].onclick = () => {
  enqueuePopup.style.display = 'none';
};
span[4].onclick = () => {
  dequeuePopup.style.display = 'none';
};
span[5].onclick = () => {
  indexInfoPopup.style.display = 'none';
  console.log('closing time');
};

window.onclick = (event) => {
  if (event.target === loopContent) {
    loopContent.style.display = 'none';
  }
  if (event.target === arrayPopup) {
    arrayPopup.style.display = 'none';
  }
  if (event.target === pushPopup) {
    pushPopup.style.display = 'none';
  }
  if (event.target === popPopup) {
    popPopup.style.display = 'none';
  }
  if (event.target === enqueuePopup) {
    enqueuePopup.style.display = 'none';
  }
  if (event.target === dequeuePopup) {
    dequeuePopup.style.display = 'none';
  }
  if (event.target === indexInfoPopup) {
    indexInfoPopup.style.display = 'none';
  }
};

function darkmode() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}