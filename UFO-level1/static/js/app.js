// from data.js
const tableData = data;

// Gets table references with d3.select()
const tbody = d3.select("tbody");

// Appends the data into the table by looping each record at a time
function buildTable(sightingReport) {

   // clear out any existing data in tbody
  //tbody.html("");

  var record = sightingReport
  var row = tbody.append('tr')
  row.append('td').text(record.datetime)
  row.append('td').text(record.city)
  row.append('td').text(record.state)
  row.append('td').text(record.country)
  row.append('td').text(record.shape)
  row.append('td').text(record.durationMinutes)
  row.append('td').text(record.comments)
};

data.forEach(buildTable);

// Prints data and user gets a glimpse of what data looks like
console.log(data);

// Event listener for the form button when user fills it out
var filterButton = d3.select('#filter-btn');

function handleClick() {
    // Prevents page from refreshing
    d3.event.preventDefault();
  
    // Select the input element and get the raw HTML node &
    // Get the value property of the input element
    var date = d3.select('#datetime').property('value');
    
    console.log(date);

    // Check to see if a date was entered and filter the data using that date then
    // Rebuild the table with filtered data
    // Otherwise, will build the original data table
    var filteredData = data.filter(rowItem => rowItem.datetime === date);
    console.log(filteredData);
    
    tbody.html("");
    
    filteredData.forEach(buildTable);
};
// event handler of the form button
// when filter button is clicked, then handleClick function is called
filterButton.on('click', handleClick);

console.log(data);

