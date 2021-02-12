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
  if (inputValueDate === ""){
      var filteredData= tableData;
  }
  else{
    var filteredData = tableData.filter(value => value.datetime === inputValueDate);
  }
  if (inputValueCity === ""){}
  else {
    var filteredData = filteredData.filter(value => value.city === inputValueCity);    
  }
  if (inputValueState === ""){}
  else {
    var filteredData = filteredData.filter(value => value.state === inputValueState);    
  }
  if (inputValueCountry === ""){}
  else {
    var filteredData = filteredData.filter(value => value.country === inputValueCountry);    
  }
  if (inputValueShape === ""){}
  else {
    var filteredData = filteredData.filter(value => value.shape === inputValueShape);    
  }

  // console.log(filteredData);

  // Add in the table data
  var tbody = d3.select("tbody");
  tbody.html("");
  filteredData.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

};