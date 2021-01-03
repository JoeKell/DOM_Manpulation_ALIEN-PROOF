// from data.js
var tableData = data;

// Create event handler
d3.select("#filter-btn").on("click", runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  

  // Get the value property of the input element
  var inputValueDate = d3.select("#datetime").property("value");
  var inputValueCity = d3.select("#city").property("value");
  var inputValueState = d3.select("#state").property("value");
  var inputValueCountry = d3.select("#country").property("value");
  var inputValueShape = d3.select("#shape").property("value");

  // Filter the data 
  var filteredData = tableData.filter(value => value.datetime === inputValueDate)
  .filter(value => value.city === inputValueCity)  
  .filter(value => value.state === inputValueState)
  .filter(value => value.country === inputValueCountry)
  .filter(value => value.shape === inputValueShape);
  
//   // This is to account for a blank input field
//   if (inputValueData === "" ){
//     var finalData = tableData;
//   }
//   else {
//     var finalData = filteredData;
//   }

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