/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
const declareInfoPopup = document.getElementById('declare-info-popup');
// const finalArrayPopup = document.getElementById('final-array-popup');

const iconButton = document.getElementById('icon-button');
iconButton.onclick = function () {
  declareInfoPopup.style.display = 'block';
  console.log('clicked');
};

// retrieving html elements and putting them into variables to be used later
const allPortions = document.getElementsByClassName('portion');

const forLoop = document.getElementById('for-loop');
const b4loop = document.getElementById('for-loop-out');

// buttons
const runLoop2 = document.getElementById('run-loop-two');
const runLoop3 = document.getElementById('run-loop-three');
const runLoop4 = document.getElementById('run-loop-four');
const nextButton = document.getElementById('next-button');
const backButton = document.getElementById('back-button');

const outputBox = document.getElementById('write-output');

const print1Output = document.getElementById('print1-output');

const after = document.getElementById('after');
const arrShow = document.getElementById('add-to-arr');
const showBVal = document.getElementById('b-vals');
const runLoop = document.getElementById('run-loop');

const showOG = document.getElementById('print-og');
let shownArr = null;

console.log(allPortions);

let newVar = 0;
let b = new Array(10);
let bFilter = [];
function runOGLoop() {
  for (let i = 0; i < 10; i++) {
    newVar = (i % 6) + 8 / 3;
    b.push(+newVar.toFixed(0));
  }
  console.log(b);

  bFilter = b.filter(Boolean);
  console.log('ogarr', bFilter);
  shownArr = bFilter.join(',  ');
  arrShow.innerHTML = `b = [ ${shownArr} ]`;
  return bFilter;
}

nextButton.disabled = true;
backButton.disabled = true;
let j = 0;
let x = 0;
let m = 1;
let n = 0;

// shows the next portion of the function
let i = 0;
nextButton.onclick = () => {
  console.log('next', i);
  if (allPortions[i] == undefined) {
    return;
  }

  if (allPortions[i] == allPortions[0]) {
    backButton.disabled = false;
  }

  console.log('this is the portion displayed', allPortions[i], 'portion', i);

  allPortions[i].style.display = 'block';
  if (allPortions[i] == b4loop) {
    outputBox.innerHTML += 'Before: <br />';
  }

  if (allPortions[i] == allPortions[2]) {
    // if (allPortions[i] == print1Output) {
    console.log('print1 worked');
    runLoop2.style.display = 'block';
    nextButton.disabled = true;
  }

  if (allPortions[i] == allPortions[5]) {
    nextButton.disabled = true;
  }

  if (allPortions[i] == allPortions[8]) {
    nextButton.disabled = true;
  }

  if (allPortions[i] == after) {
    outputBox.innerHTML += '<br />After: <br />';
    console.log('after worked');
  }

  i++;
};
console.log('i', i);
backButton.onclick = () => {
  outputBox.innerHTML = '';
  arrShow.innerHTML = '';
  document.getElementById('show-i').innerHTML = '';
  for (i = 0; i < 9; i++) {
    allPortions[i].style.display = 'none';
  }
  runLoop.disabled = false;
  runLoop2.disabled = false;
  runLoop3.disabled = false;
  runLoop4.disabled = false;
  shownArr = 0;
  b = [];
  j = 0;
  x = 0;
  m = 1;
  i = 0;
  n = 0;

  // eslint-disable-next-line no-sequences
  return j, x, m, n, i;
};

const bLen = b.length;

// Each click steps through the first loop, first Run Loop button
// eslint-disable-next-line func-names
// eslint-disable-next-line consistent-return
runLoop.onclick = function () {
  if (j < bLen) {
    // console.log('for the second time', shownArr, bFilter, 'b', b);
    document.getElementById('show-i').innerHTML = `i = ${j}`;

    newVar = (j % 6) + 8 / 3;

    b.push(+newVar.toFixed(0));

    bFilter = b.filter(Boolean);
    console.log(bFilter);
    shownArr = bFilter.join(', ');
    arrShow.innerHTML = `b = [${shownArr}] <br />`;
    j++;
  } else {
    nextButton.disabled = false;
    runLoop.disabled = true;
    console.log('after first', b);
  }
};

console.log(i);

// let x = 0;
runLoop2.onclick = () => {
  if (x < bLen) {
    newVar = (x % 6) + 8 / 3;
    outputBox.innerHTML += `${+newVar.toFixed(0)} <br />`;
    x++;
  } else {
    outputBox.innerHTML += `Array: [${bFilter}]`;
    runLoop2.disabled = true;
    nextButton.disabled = false;
  }
};

// shows that the b value is changing
runLoop3.onclick = () => {
  console.log(bFilter);

  if (m < 9) {
    bFilter[m] = bFilter[m + 1] - bFilter[m - 1];
    arrShow.innerHTML += `b[${m}] = ${bFilter[m]}<br />`;
    m++;
    console.log(bFilter);
  } else {
    runLoop3.disabled = true;
    nextButton.disabled = false;
  }
};

// console.log('bfilter', bFilter);

runLoop4.onclick = () => {
  console.log(bFilter);
  if (n < bLen) {
    outputBox.innerHTML += `${bFilter[n]} <br />`;
    n++;
  } else {
    shownArr = bFilter.join(',');
    outputBox.innerHTML += `Array: [${shownArr}]`;
    arrShow.innerHTML += `b = [${shownArr}]`;
    runLoop4.disabled = true;
    // nextButton.disabled = false;
  }
};

const span = document.getElementsByClassName('close');
console.log(span);
span[0].onclick = function () {
  declareInfoPopup.style.display = 'none';
};

window.onclick = (event) => {
  if (event.target === declareInfoPopup) {
    declareInfoPopup.style.display = 'none';
  }
};
