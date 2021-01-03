// from data.js
var tableData = data;

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  

  // Get the value property of the input element
  var inputValue = d3.select("#datetime").property("value");

  console.log(inputValue);

  // Filter the data 
  var filteredData = tableData.filter(value => value.datetime === inputValue);
  
  // This is to account for a blank input field
  if (inputValue === ""){
    var finalData = tableData;
  }
  else {
    var finalData = filteredData;
  }

  console.log(filteredData);

  // Add in the table data
  var tbody = d3.select("tbody");
  tbody.html("");
  finalData.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

};