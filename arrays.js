// first initializing the empty array box,
// where we going to store the user input arrays
let array = [];

//getting input field, buttons and output field

let inputValue = document.getElementById("input");
let pushButton = document.getElementById("pushBtn");
let popButton = document.getElementById("popBtn");
let deleteButton = document.getElementById("deleteBtn");
let shiftButton = document.getElementById("shiftBtn");
let unshiftButton = document.getElementById("unShiftBtn");
let findButton = document.getElementById("findBtn");
let reverseButton = document.getElementById("reverseBtn");
let sortButton = document.getElementById("sortBtn");
let concatButton = document.getElementById("concatBtn");
let filterButton = document.getElementById("filterBtn");
let sliceButton = document.getElementById("sliceBtn");
let spliceButton = document.getElementById("spliceBtn");
let lengthButton = document.getElementById("lengthBtn");
let stringButton = document.getElementById("stringBtn");
let outputFiled = document.getElementById("output");

//output box function
function updatingOutput() {
  document.getElementById("output").value = `Array: ${array}`;
}

//function push
function pushItem() {
  let inputvalue = document.getElementById("input").value.trim();
  if (inputvalue !== "") {
    array.push(inputvalue);
    document.getElementById("input").value = "";
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
    alert("Array is empty!");
  }
}

//function delete
function deleteItem() {
  let inputvalue = document.getElementById("input").value.trim();
  let index = array.indexOf(inputvalue);
  if (inputvalue === "") {
    alert("Please enter a value to delete!");
  } else if (index !== -1) {
    array.splice(index, 1); // Remove the item
    document.getElementById("input").value = ""; // Clear input field
    updatingOutput(); // Update output field
  } else {
    alert("Value not found in the array!");
  }
}

// Function to remove the first item from the array
function shiftItem() {
  if (array.length > 0) {
    array.shift(); // Removes the first element of the array
    updatingOutput(); // Update the displayed array
  } else {
    alert("Array is empty!");
  }
}

// Function to add a new item at the beginning of the array
function unshiftItem() {
  let inputValue = document.getElementById("input").value.trim();
  if (inputValue !== "") {
    array.unshift(inputValue); // Adds the value at the beginning of the array
    document.getElementById("input").value = ""; // Clear input field
    updatingOutput(); // Update the displayed array
  } else {
    alert("Please enter a value!");
  }
}

//function to filter an array
function findItem() {
  let findValue = document.getElementById("input").value.trim();
  if (inputValue !== "") {
    let foundItem = array.find(item => item === findValue);

    if (foundItem !== undefined) {
      alert(`Found: ${foundItem}`);
    } else {
      alert("No Items found in an Array set");
    }

    document.getElementById("input").value = ""; // Clear input field
    updatingOutput(); // Update output
  } else {
    alert("Please enter a value to search!");
  }
}

// Function to reverse the array
function reverseItem() {
  if (array.length > 0) {
      array.reverse(); // Reverse the array
      updatingOutput();
  } else {
      alert("⚠️ Array is empty!");
  }
}

// Function to sort the array
function sortItem() {
  if (array.length > 0) {
      array.sort(); // Sort the array alphabetically
      updatingOutput();
  } else {
      alert("⚠️ Array is empty!");
  }
}

// Function to concatenate arrays
function concatItem() {
  if (array.length === 0) {
      alert("⚠️ Array 1 is empty! Please add values first.");
      return;
  }

  // Ask the user to enter another array using prompt
  let secondArrayInput = prompt("Enter another set of values separated by commas:");

  if (secondArrayInput !== null && secondArrayInput.trim() !== "") {
      // Convert the user input into an array
      let secondArray = secondArrayInput.split(",").map(item => item.trim());

      // Concatenate the two arrays
      let newArray = array.concat(secondArray);

      // Show the result in an alert and update the output box
      alert(`🔗 Concatenated Array: ${newArray.join(", ")}`);
      document.getElementById("output").value = `Array: ${newArray.join(", ")}`;
  } else {
      alert("⚠️ Please enter valid values for the second array.");
  }
}



// Function to filter the array based on user input
function filterItem() {
  if (array.length === 0) {
      alert("⚠️ Array is empty! Add values first.");
      return;
  }

  let filterValue = prompt("Enter the value to filter:");
  
  if (filterValue !== null && filterValue.trim() !== "") {
      let filteredArray = array.filter(item => item.includes(filterValue.trim()));

      if (filteredArray.length > 0) {
          alert(`🔍 Filtered Results: ${filteredArray.join(", ")}`);
          updatingOutput(filteredArray);
      } else {
          alert("⚠️ No matching items found!");
      }
  } else {
      alert("⚠️ Please enter a value!");
  }
}


// Function to slice the array
function sliceItem() {
  if (array.length === 0) {
      alert("⚠️ Array is empty! Add values first.");
      return;
  }

  let start = parseInt(prompt("Enter the start index:"));
  let end = parseInt(prompt("Enter the end index (optional, leave empty for full slice):"));

  if (!isNaN(start)) {
      let slicedArray = isNaN(end) ? array.slice(start) : array.slice(start, end);
      
      alert(`✂️ Sliced Array: ${slicedArray.join(", ")}`);
      
      // Update output box with the sliced array
      document.getElementById("output").value = `Sliced Array: ${slicedArray.join(", ")}`;
  } else {
      alert("⚠️ Please enter a valid number for the start index.");
  }
}


// Function to splice the array
function spliceItem() {
  if (array.length === 0) {
      alert("⚠️ Array is empty! Add values first.");
      return;
  }

  let start = parseInt(prompt("Enter the start index:"));
  let deleteCount = parseInt(prompt("Enter the number of elements to delete:"));
  let newItem = prompt("Enter a new item to add (leave empty if no item to add):");

  if (!isNaN(start) && !isNaN(deleteCount)) {
      // Apply splice operation
      if (newItem !== "") {
          array.splice(start, deleteCount, newItem);
      } else {
          array.splice(start, deleteCount);
      }
      
      // Show the updated array
      alert(`✂️ Updated Array: ${array.join(", ")}`);
      document.getElementById("output").value = `Updated Array: ${array.join(", ")}`;
  } else {
      alert("⚠️ Please enter valid numbers for start index and delete count.");
  }
}


// Function to get array length
function lengthItem() {
  let length = array.length; // Get array length
  alert(`📏 Length of Array: ${length}`); // Show in alert
  // document.getElementById("output").value = `Array Length: ${length}`; // Update output box
}

// Function to convert array to string
function stringItem() {
  let arrayString = array.toString(); // Convert array to string
  alert(`📝 Array as String: ${arrayString}`); // Show in alert
  document.getElementById("output").value = `Array: ${arrayString}`; // Update output box
}