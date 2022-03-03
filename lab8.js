// let data = [
//   ['Title', 'Artist', 'Duration', 'Created'],
//   ['hello', 'me', '2', '2019'],
//   ['ola', 'me', '3', '2018'],
//   ['Bob', 'them', '4.3', '2006']
// ];

// function getCells(data, type) {
//   return data.map(cell => `<${type}>${cell}</${type}>`).join('');
// }

// function createBody(data) {
//   return data.map(row => `<tr>${getCells(row, 'td')}</tr>`).join('');
// }

// function createTable(data) {

//   // Destructure the headings (first row) from
//   // all the rows
//   const [headings, ...rows] = data;

//   // Return some HTML that uses `getCells` to create
//   // some headings, but also to create the rows
//   // in the tbody.
//   return `
//     <table>
//       <thead>${getCells(headings, 'th')}</thead>
//       <tbody>${createBody(rows)}</tbody>
//     </table>
//   `;
// }

// // Bang it altogether
// document.body.insertAdjacentHTML('beforeend', createTable(data));
//setup our table array
var tableArr = [
  ["", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  ["Week 1",Math.random().toFixed(2),Math.random().toFixed(2), Math.random().toFixed(2), Math.random().toFixed(2),Math.random().toFixed(2), Math.random().toFixed(2), Math.random().toFixed(2)],
  ["Week 2",Math.random().toFixed(2),Math.random().toFixed(2), Math.random().toFixed(2), Math.random().toFixed(2),Math.random().toFixed(2), Math.random().toFixed(2), Math.random().toFixed(2)],
  ["Week 3",Math.random().toFixed(2),Math.random().toFixed(2), Math.random().toFixed(2), Math.random().toFixed(2),Math.random().toFixed(2), Math.random().toFixed(2), Math.random().toFixed(2)],
  ["Week 4",Math.random().toFixed(2),Math.random().toFixed(2), Math.random().toFixed(2), Math.random().toFixed(2),Math.random().toFixed(2), Math.random().toFixed(2), Math.random().toFixed(2)],  
  ["Week 5",Math.random().toFixed(2),Math.random().toFixed(2), Math.random().toFixed(2), Math.random().toFixed(2),Math.random().toFixed(2), Math.random().toFixed(2), Math.random().toFixed(2)],
  ["Week 6",Math.random().toFixed(2),Math.random().toFixed(2), Math.random().toFixed(2), Math.random().toFixed(2),Math.random().toFixed(2), Math.random().toFixed(2), Math.random().toFixed(2)],
  ["Week 7",Math.random().toFixed(2),Math.random().toFixed(2), Math.random().toFixed(2), Math.random().toFixed(2),Math.random().toFixed(2), Math.random().toFixed(2), Math.random().toFixed(2)],
]
//create a Table Object
let table = document.createElement('table');
//iterate over every array(row) within tableArr
for (let row of tableArr) {
//Insert a new row element into the table element
  table.insertRow();
//Iterate over every index(cell) in each array(row)
  for (let cell of row) {
//While iterating over the index(cell)
//insert a cell into the table element
    let newCell = table.rows[table.rows.length - 1].insertCell();
//add text to the created cell element
    newCell.textContent = cell;
  }
}
//append the compiled table to the DOM
document.body.appendChild(table);

//loop-through
const nextButton = document.getElementById('next-button');
const loopContent = document.getElementById('loop-content');
const indexInfo = document.getElementById('index-info');
function loopThrough() {
  var i = 1;
  var j = 1;
  loopContent.style.display = 'block';
  document.getElementById('icon-button').style.display = 'none';
  nextButton.disabled = false;
  nextButton.style.display = 'block';
  indexInfo.style.display = 'block';
  nextButton.onclick = () =>{
    console.log(i);
    console.log(j);
    console.log(document.getElementById('icon-button').style.display);
    const val = tableArr[i][j];
    console.log(val.innerHTML);
    i++;
    j++;
  }

  window.onclick = (event) => {
  if (event.target === loopContent) {
    loopContent.style.display = 'none';
  }
}

  // var sum = 0;
  // arr.innerHTML = sum;

  // nextButton.onclick = () => {
  //   console.log(i);
  //   console.log(document.getElementById('icon-button').style.display);
  //   const cnt = Number(arr.innerHTML) + parseInt(arr[i])
  //   arr.innerHTML = cnt
  //   const pre = cnt - parseInt(arr[i])
  //   document.getElementById('icon-button').style.display = 'block';
  //   indexInfo.innerHTML = `int sum = 0; <br><br> for (int index = 0; index < array.length; index++) <br><br> <span margin-left: "20px> sum += array[index] </span> <br><br> Previous sum of the array is <span style='background-color:yellow'><b> ${pre}</b></span> <br><br> Current index is <span style='background-color:yellow'><b> ${i}</b></span> <br><br> Value of the current element is <span style='background-color:yellow'><b> ${arr[i]}</b></span> <br><br> Sum of the array is: <span style='background-color:yellow'><b> ${cnt} </b></span>`;

  //   const arrayElement = document.getElementsByClassName(`.arrayEl${i}`);
  //   const lastArrayElement = document.getElementsByClassName(`.arrayEl${i - 1}`);

  //   if (lastArrayElement[0] != undefined) {
  //     if (arr[i] == undefined) {
  //       indexInfo.innerHTML = 'END OF ARRAY';
  //       document.getElementById('icon-button').style.display = 'none';
  //       nextButton.disabled = true;
  //       document.getElementById('restart-loop').style.display = 'block';
  //       lastArrayElement[0].style.backgroundColor = 'white';
  //     }

  //     arrayElement[0].style.backgroundColor = '#fcf23d';
  //     lastArrayElement[0].style.backgroundColor = 'white';
  //   }
  //   arrayElement[0].style.backgroundColor = '#fcf23d';
  //   i++;
  // };
  // i = 0;
  // console.log(i);
}
