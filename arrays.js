// first initializing the empty array box,
// where we going to store the user input arrays
let array = [];

//getting input field, buttons and output field

let inputValue = document.getElementById("input");
let popButton = document.getElementById("popBtn");
let pushButton = document.getElementById('pushBtn');
let deleteButton = document.getElementById("deleteBtn");
// let concatutton = document.getElementById("concatBtn");
let shiftButton = document.getElementById("shiftBtn");
let unshiftButton = document.getElementById("unShiftBtn");
let findButton = document.getElementById("findBtn");
let reverseButton = document.getElementById("reverseBtn");
let sortButton = document.getElementById("sortBtn");
let sliceButton = document.getElementById("sliceBtn");
let spliceButton = document.getElementById("spliceBtn");
let outputFiled = document.getElementById("output");

//output box function
function updatingOutput() {
    document.getElementById('output').value = `Array: ${array}`;
}

//function push
function pushItem() {
  let inputvalue = document.getElementById("input").value.trim();
  if (inputvalue !== "") {
    array.push(inputvalue);
    document.getElementById("input").value = '';
    updatingOutput();
  } else {
    alert("Please enter the value");
  }
}

//function push
function popItem() {
  if (array.length > 0) {
    array.pop();
    updatingOutput();
} else {
    alert('Array is empty!');
}
}